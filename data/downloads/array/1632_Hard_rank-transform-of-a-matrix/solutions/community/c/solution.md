# Explained in detail with comments

**Author:** anuragdub3y
**Votes:** 3
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3686600/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3686600/)

---

Try not to be taken aback by the long code! Bear with me for just a minute.

The idea is simple for the most part: We need to sort the cell values and update the rank of each cell gradually if it's the largest in it's row or it's column. For that we will have ```rowRank``` and ```colRank``` vectors which will help us update the rank of the current row and the current column as we traverse through the cell values.

Now where things take a turn is when we come across cells with the same values. Here two things can happen:

1. The same valued cells are not in the same row or the same column. This means one's rank is not going to have an effect of the other cell's.
2. Otherwise, that is, the cells share a common row or a column (and have the same value).

I believe the question should have clearly stated that if we come across the 2nd condition, the cells should have a **same rank** and that this rank should be the largest of all the rows and columns that the cells are a part of. I spent a huge amount of time figuring this out.

Hence while processing through the sorted list of cell-values, when we come across cell-groups of the second kind, we will need to find the maximum rank among these cells that they may have at the current moment and then assign this maximum value to all the members of this particular group. 

Through each iteration, we will update the max rank observed in each row and column.


DSU here helps us in grouping together the cells of the second kind. The ```join``` function is used in such a way that we end up assigning all the cells in the group to a head. ```find``` function helps us find the head of the group of which a certain cell is a part of.

```
class Solution {
public:
    using pii=pair<int,int>;
    pii par[501][501];
    int rank[501][501];
    pii find(pii a){
        if(par[a.first][a.second]==a){ return a; }
        return par[a.first][a.second]=find(par[a.first][a.second]);
    }
    void join(pii a, pii b){
        a=find(a), b=find(b);
        if(rank[a.first][a.second]>rank[b.first][b.second]){
            par[a.first][a.second]=b;
            rank[a.first][a.second]++;
        }
        else{ par[b.first][b.second]=a; rank[b.first][b.second]++; }
    }
    vector<vector<int>> matrixRankTransform(vector<vector<int>>& mat) {
        int m=mat.size(), n=mat[0].size();
        vector<vector<int>> ans(m,vector<int>(n,0));
        
        // Initialise the DSU
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                par[i][j]={i,j}; rank[i][j]=1;
            }
        }
        
        // For every row, group together the same values
        for(int i=0; i<m; i++){
            map<int,pii> mp;
            for(int j=0; j<n; j++){
                if(mp.find(mat[i][j])!=mp.end()){ join({i,j},mp[mat[i][j]]); }
                else{ mp[mat[i][j]]={i,j}; }
            }
        }
        
        // For every column, group together the same values
        for(int j=0; j<n; j++){
            map<int,pii> mp;
            for(int i=0; i<m; i++){
                if(mp.find(mat[i][j])!=mp.end()){ join({i,j},mp[mat[i][j]]); }
                else{ mp[mat[i][j]]={i,j}; }
            }
        }
        
        // At this point, some sets have been formed with these properties:
        // 1. Each set element has the same mat[i][j]
        // 2. They all have the same parent
        
        // Now we will group all the childrens, ie these set elements to their parent
        vector<pii> isHead[m][n];
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                pii h=find({i,j});
                isHead[h.first][h.second].push_back({i,j});
            }
        }
        
        // Now we will store all these sets together in a sorted form
        map<int,vector<vector<pii>>> bigSet;
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if(isHead[i][j].empty()){ continue; }
                else{
                    bigSet[mat[i][j]].push_back(isHead[i][j]);
                    // m[val] is a vector which contains all the sets with value val
                    // Each of these different set has some children joined together
					// and they share a common row/column
                }
            }
        }
        
        vector<int> rowRank(m,0), colRank(n,0);
        for(auto it:bigSet){
            auto sets=it.second;
            for(auto s:sets){
                int maxRankOfThisSet=0;
                for(auto cell:s){
                    int i=cell.first, j=cell.second;
                    maxRankOfThisSet=max(maxRankOfThisSet,1+max(rowRank[i],colRank[j]));
                }
                // Update these values
                for(auto cell:s){
                    int i=cell.first, j=cell.second;
                    ans[i][j]=maxRankOfThisSet;
                    rowRank[i]=max(rowRank[i],maxRankOfThisSet);
                    colRank[j]=max(colRank[j],maxRankOfThisSet);
                }
            }
        }
        return ans;
    }
};
```