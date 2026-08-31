# [C++] || Backtracking

**Author:** 4byx
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2525117/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2525117/)

---

**What is Asked ?**
 `We have to find the maximum rows in which all cells having 1 should be covered by column we picking`

**How to Do ?**
```
1. We make a recursive function in which we will pick column and not pick it
2. picking a column means we marked it as visited
3. When we reached base case we will traverse whole matrix which tells us that
whether we can pick a row or not , we can pick a row only when '1' s in it are visited which 
we can verify by visited arrray
```

**Code**
```
class Solution {
public:
    int maxi = INT_MIN;
    void helper(vector<vector<int>> &mat , int m , int n , int cols , int idx , vector<int> &vis){
        if(cols == 0 or idx==n){
            int cnt = 0;
            for(int p = 0 ; p < m ; p++){
                bool check = true;
                for(int q = 0 ; q < n; q++){
                    // if cell is 1 and not visited then we cannot take this row
                    if(mat[p][q] == 1 and vis[q] == 0){
                        check = false;
                        break;
                    }
                }
                if(check) cnt++;
            }
            maxi = max(maxi,cnt);
            return;
        }
        
        // picking idx th column and marking column as visited
        vis[idx]=1;
        helper(mat,m,n,cols-1,idx+1,vis);
        vis[idx]=0;
        
        // not picking
        helper(mat,m,n,cols,idx+1,vis);
        return;
        
    }
    int maximumRows(vector<vector<int>>& mat, int cols) {
        int m = mat.size();
        int n = mat[0].size();
        
        vector<int> vis(n);
        
        helper(mat,m,n,cols,0,vis);
        return maxi;
    }
};
```