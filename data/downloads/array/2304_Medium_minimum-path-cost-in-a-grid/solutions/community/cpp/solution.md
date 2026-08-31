# ✔✔USING LIS DP FORMAT || WITH TIME COMPLEXITY CALCULATION || WITH COMMENTS ||

**Author:** 2uringTested
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/3737020/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/3737020/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here I used the LIS DP format where we find the optimal answer ending at an index (i,j).

Why did I think of this? Because the value that is asked in the question can be calculated for all the cells in the grid and using the values calculated for the previous row we can calculate the answer for current row.

So I Calcuated the best answer ending at the index for all the cells in the last row and selected the minimum one which is asked.

For reaching a cell (i,j), I have gone through all the possibilities of where I could have come from and selected the minimum possible route.


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
Time complexity =  $$O(#states(1+#transitions(avg/state)))$$
- $$#states$$=m*n
- $$#Transitions$$=n
- TC = O(m*n*(1+n)) = O(m*n*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    using vvi =  vector<vector<int>>;
    vvi grid;
    vvi cost;
    vvi dp;
    int m,n;


    // rec(i,j) => returns the minimum cost of path to (i,j)
    int rec(int i,int j){

        //pruning:
        if(i>=m || i<0 || j<0 || j>=n) return 1e9;

        //base case: 
        if(i==0) return grid[i][j];

        //cache check
        if(dp[i][j]!=-1) return dp[i][j];

        //computations
        int row = i-1;
        int ans = 1e8;

        for(int col=0;col<n;++col){
            int val = grid[row][col];
            int costForComing = cost[val][j];
            ans = min(ans,grid[i][j]+costForComing+rec(row,col));
        }


        //save and return 
        return dp[i][j] = ans;

    }


    int minPathCost(vector<vector<int>>& matrix, vector<vector<int>>& moveCost) {
        
        //globalisation kardi taki bar bar na likhna pade
        grid = move(matrix);
        cost = move(moveCost);
        m = grid.size();
        n = grid[0].size();
        dp = vvi(m+1,vector<int>(n+1,-1));

        //ab last row mein se best select kar lunga
        int ans = INT_MAX;
        int row = m-1;
        for(int col = 0;col<n;++col){
            ans = min(ans,rec(row,col));
        }


        return ans;


        
    }
};
```