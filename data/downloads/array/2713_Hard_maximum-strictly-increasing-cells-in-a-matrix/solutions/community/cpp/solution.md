# All possible solution with Explanation( Dp ,Binarysearch ,Recursion ...and more)

**Author:** imanishkumar7545
**Votes:** 44
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3570268/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3570268/)

---

# Intuition
we find the longest increasing paths starting from each value in the matrix. By keeping track of the longest paths for rows and columns, we determine the maximum number of cells we can visit. The final result is the maximum path length among all rows and columns.

# Algo
1-: We have a grid of numbers, and we want to find the most cells we can visit by starting from any cell and moving only to cells with higher numbers.

2-: We go through the grid and remember where each number is located, and also keep track of the unique numbers in reverse order.

3 -: Starting from the highest number, we calculate the longest paths by moving only to cells with higher numbers. We keep track of the longest path for each row and column.

After going through all the numbers, we update the longest paths for each row and column based on the calculated paths.

Finally, we find the longest path among all the rows and columns, which represents the maximum number of cells we can visit.
Complexity
Time complexity:
O(m * n * log(m * n))

Space complexity:
O(m * n)
# Code
```
class Solution {
public:
    int maxIncreasingCells(vector<vector<int>>& matrix) {
        const int rows = matrix.size();
        const int cols = matrix[0].size();

        vector<int> rowPaths(rows);
        vector<int> colPaths(cols);
        unordered_map<int, vector<vector<int>>> valuePositions;
        vector<vector<int>> temp(rows, vector<int>(cols));
        set<int> uniqueValues;

        // Populate valuePositions and uniqueValues
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                int value = matrix[i][j];
                valuePositions[-value].push_back({i, j});
                uniqueValues.insert(-value);
            }
        }

        // Calculate longest paths
        for (int value : uniqueValues) {
            for (const auto& position : valuePositions[value]) {
                int row = position[0];
                int col = position[1];
                temp[row][col] = max(rowPaths[row], colPaths[col]) + 1;
            }

            for (const auto& position : valuePositions[value]) {
                int row = position[0];
                int col = position[1];
                rowPaths[row] = max(rowPaths[row], temp[row][col]);
                colPaths[col] = max(colPaths[col], temp[row][col]);
            }
        }

        // Return the maximum path length
        return max(*max_element(rowPaths.begin(), rowPaths.end()), *max_element(colPaths.begin(), colPaths.end()));
    }
};
```
# Method 2-> Recursion ( Dfs )
But it passed only 557 cases and give tle at 558
Suggest me how to reduce complexity of recursion
My logic
1. Fisrt make array and mark -1 at each point 
2. make a call in same row and same column for given point 
3. Returm maximum of both calls 
```
     class Solution {
public:
    vector<vector<int>>vis;
    int m,n;
    int dfs(int x,int y,vector<vector<int>>&mat)
    {
        if(vis[x][y]!=-1)return vis[x][y];
        // for col
        int ans=1;
        for(int col=0;col<n;col++)
        {
           if(mat[x][y]<mat[x][col])
           {
               int colans=1+dfs(x,col,mat);
               ans=max(ans,colans);
           }
        }

        // for row
        for(int row=0;row<m;row++)
        {
           if(mat[x][y]<mat[row][y])
           {
               int rowans=1+dfs(row,y,mat);
               ans=max(ans,rowans);
           }
        }
      return vis[x][y]=ans;
    }
    int maxIncreasingCells(vector<vector<int>>& mat)
    {  
         m=mat.size(),n=mat[0].size();
         vis.resize(m+1,vector<int>(n+1,-1));
         int ans=1;
         for(int i=0 ;i< m ;i++)
         for(int j=0 ;j<n ;j++)
         {
             ans=max(ans,dfs(i,j,mat));
         }
         return ans;

    }
};
```
# Method 3 -> Binary Search along with dfs
 But its also give tle at case 558
```
class Solution {
public:
    vector<vector<int>>vis;
    vector<vector<pair<int,int>>>scol,srow;
    int m,n;
    int bs(vector<pair<int,int>>&sorted,int target)
    {
        int low=0,high=sorted.size()-1,ans=-1;
        vector<int>greater;
        while(high>=low)
        {
            int mid=(low+high)/2;
            if(sorted[mid].first>target)
            {
                ans=mid;
                high=mid-1;
            }
            else low=mid+1;
        }
        return ans ;
    }
    int dfs(int x,int y,vector<vector<int>>&mat)
    {
    
        int ans=1;
        int c=bs(scol[x],mat[x][y]);
        int r=bs(srow[y],mat[x][y]);
        if(vis[x][y]!=-1)return vis[x][y];
        //-1 means no element left in that row or column
         while(c!=-1 and c<scol[x].size())
        {
            int newcol=scol[x][c].second;
            int colans=1+dfs(x,newcol,mat);
            ans=max(ans ,colans);
            c++;
        }

          while(r!=-1 and r< srow[y].size())
        {   
            int newrow=srow[y][r].second;
            int rowans=1+dfs(newrow,y,mat);
            ans=max(ans ,rowans);
            r++;
        }
       
        return vis[x][y]=ans;
    }
    int maxIncreasingCells(vector<vector<int>>& mat)
    {  
         m=mat.size(),n=mat[0].size();
         scol.resize(m),srow.resize(n);
         // create sorted col
         for(int i=0 ;i<m ;i++)
         {   
             for(int j=0 ;j<n ;j++)
             scol[i].push_back({mat[i][j],j});
             sort(begin(scol[i]),end(scol[i]));
         }
        // create sorted row
          for(int i=0 ;i< n;i++)
         {   
             for(int j=0 ;j<m;j++)
             srow[i].push_back({mat[j][i],j});
             sort(begin(srow[i]),end(srow[i]));
         }
         vis.resize(m+1,vector<int>(n+1,-1));
         int ans=1;
         for(int i=0 ;i< m ;i++)
         for(int j=0 ;j< n ;j++)
         {
             ans=max(ans,dfs(i,j,mat));
         }
         return ans;

    }
};
```
# 4 Dfs using map and binary Search 100% accepted
```

class Solution {
private:
    int dfs(vector<vector<int>> &arr,int i,int j,map<int,vector<int>> row[],map<int,vector<int>> col[],vector<vector<int>> &dp){
        
        if(dp[i][j]!=-1)return dp[i][j];
        int ans=1;
        //move in row
        auto c=row[i].lower_bound(arr[i][j]+1);
        if(c!=row[i].end()){
            vector<int> x=(*c).second;
            for(auto ele:x)
                ans=max(ans,1+dfs(arr,i,ele,row,col,dp));
        }
        //move in col
        auto r=col[j].lower_bound(arr[i][j]+1);
        if(r!=col[j].end()){
            vector<int> x=(*r).second;
            for(auto ele:x)
                ans=max(ans,1+dfs(arr,ele,j,row,col,dp));
        }
        return dp[i][j]=ans;
    }
public:
    int maxIncreasingCells(vector<vector<int>>& arr) {
        
        int m=arr.size(),n=arr[0].size(),i,j;
        map<int,vector<int>> row[m];
        map<int,vector<int>> col[n];
        
        for(i=0;i<m;++i){
            for(j=0;j<n;++j){
                int ele=arr[i][j];
                row[i][ele].push_back(j);
                col[j][ele].push_back(i);
            }
        }
        vector<vector<int>> dp(m,vector<int>(n,-1));
        int ans=0;
       
        for(i=0;i<m;++i){
            for(j=0;j<n;++j){
                ans=max(ans,dfs(arr,i,j,row,col,dp));
            }
        }
        return ans;
        
    }
};