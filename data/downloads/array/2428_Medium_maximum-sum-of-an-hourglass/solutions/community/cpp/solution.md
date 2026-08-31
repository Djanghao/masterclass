# ✅C++ | ✅Simple Approach

**Author:** Yash2arma
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2648733/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2648733/)

---

**Please upvote if it helps :)**
```
class Solution 
{
public:
    int maxSum(vector<vector<int>>& grid) 
    {
        int maxi = 0;
        int m=grid.size(), n=grid[0].size();
        int sum=0;
        
        for(int i=0; i<=m-3; i++)
        {
            for(int j=0; j<=n-3; j++)
            {
                sum=0;
                for(int c=j; c<j+3; c++) //for adding 3 values from column to make hourglass
                {
                    sum += grid[i][c]; //add 1st row to make hourglass
                    sum += grid[i+2][c]; //add 3rd row to make hourglass
                }
                sum += grid[i+1][j+1]; //add middle of 3x3 grid to make hourglass 
                maxi = max(maxi, sum); //find max. value
            }
        }
        return maxi;
        
    }
};
```