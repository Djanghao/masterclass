# ✅C++ | ✅Simple and efficient solution | ✅TC:O((n-2)^2)

**Author:** Yash2arma
**Votes:** 38
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2422211/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/2422211/)

---

**Please upvote if it helps :)**
```
class Solution 
{
public:
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) 
    {
        int n=grid.size();
        vector<vector<int>> res(n-2, vector<int> (n-2));
        
        //find max of 3x3 grid centred around row (i+1) and column (j+1)
		//for eg:1 starting from (1,1) so (1,1),(1,2),(2,1),(2,2) will be the centre of 3x3 grid-1,2,3,4 respectively
        for(int i=1; i<=n-2; i++)
        {
            for(int j=1; j<=n-2; j++)
            {
                int maxi=0;
                maxi = max({maxi, grid[i-1][j-1], grid[i-1][j], grid[i-1][j+1]});
                maxi = max({maxi, grid[i][j-1], grid[i][j], grid[i][j+1]});
                maxi = max({maxi, grid[i+1][j-1], grid[i+1][j], grid[i+1][j+1]});
                
               res[i-1][j-1] = maxi;
            }
        }
        return res;
    }
};
```