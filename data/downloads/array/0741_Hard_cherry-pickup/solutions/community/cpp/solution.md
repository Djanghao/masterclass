# C++ || Detailed Explanation & clear Intuitions || Memoization || DP || Good Question

**Author:** KR_SK_01_In
**Votes:** 101
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/1912865/](https://leetcode.com/problems/cherry-pickup/solutions/1912865/)

---

### **Intuitions **  
### We have to take the cherries in such a way that it takes maximum of it , reach to (n-1 , n-1) , if possible and also make the taken cheeries as 0  .
### Now again we have to make one traversal from (n-1 , n-1)  to (0 , 0) such that it can take the maximum of the remaining cheeries .

### Now trying this way will be make our life very hectic 

### Think this questions as two persons are taking cheeries such a way that they following as maximum  cheeries as they can take combinely and they cannot take the same cheeries  i.e their sum of cheeries taken combinely is maximised , no need of maximising individual .

### Lets say (r1 , c1) coordinates of person1 , (r2 , c2) coordinates of person2 , now as they both are intially at origin and they move max 1 step each time , we can say that distance of person1 from origin is equal to distance of person2 from origin i.e r1+c1=r2+c2

### Now take the current cheery of person 1 i.e grid[r1][c1]  , if(r1!=r2) i.e they are not at same position , then take the cheery of person2 .

### There is 4 possibiltity of moving of (person1 , person2) both moving 1 steps each at a time . i.e (right , right) , (right , down) , (down , right) , (down , down)  . Find out which path will give the maximum cheeries stores in temp variable and add it to ans variable.

### Edge cases : if any of one of two persons goes out of bounds or obstacles is present means this is not not possible , return INT_MIN .                                  if( person1 reaches the (n-1 , n-1) then return the grid[n-1][n-1] value ) both reaches simultaneously as r1 + c1=r2+c2 .  
### if(already exists in 3-d dp matrix ) then return dp[r1][c1][r2] .

# **If u find it helpful , Please Upvote !!!**


```
 int dp[51][51][51];
    int func(int r1 , int c1 , int r2 , int n , vector<vector<int>> &grid )
    {
        int c2=r1+c1-r2;
        
        if(r1>=n || r2>=n || c1>=n || c2>=n || grid[r1][c1]==-1 || grid[r2][c2]==-1)
        {
            return INT_MIN;
        }
        
        if(dp[r1][c1][r2]!=-1)
        {
            return dp[r1][c1][r2];
        }
        
        if(r1==n-1 && c1==n-1)
        {
            return grid[r1][c1];
        }
        
        int ans=grid[r1][c1];
        
        if(r1!=r2)
        {
            ans += grid[r2][c2];
        }
        
        int temp= max(func(r1+1 , c1 , r2+1 , n , grid) , func(r1 , c1+1 , r2 , n , grid));
        temp = max(temp , func(r1+1 , c1 , r2 , n, grid));
        temp = max(temp , func(r1 , c1+1 , r2+1 , n , grid));
        
        ans+=temp;
        
        return dp[r1][c1][r2]=ans;
    }
    int cherryPickup(vector<vector<int>>& grid) {
        memset(dp , -1 , sizeof(dp));
        int n=grid.size();
        return max(0 , func(0,0,0,n , grid));
    }
```