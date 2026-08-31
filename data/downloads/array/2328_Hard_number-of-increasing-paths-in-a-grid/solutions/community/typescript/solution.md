# TypeScript Solution Based on Editorial

**Author:** jswang00037
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3651019/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3651019/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- The path with specific length would include the paths with smaller lenth, hence it would need **recursion**. 
- Since the number of paths of specific cell is static, could use **dynamic programming** to **memorize** the result and enhance the run time. 
- Use `BigInt` to handle the large numbers. 

# Approach
<!-- Describe your approach to solving the problem. -->
- Declare the `dp[i][j]` to log the path count once it has been calculted. 
- Define a Depth First Search (DFS) function `dfs(i,j)` to calculate the path count of visiting `grid[i][j]`. 
- In `dfs(i, j)`, if `dp[i][j]` exist then return the value, else initialize the path count `cost` as `1` (visit itself) and see its neighbor cells (4 directions next to `grid[i][j]`) could be visited or not. 
- If neighbors could be visited (value < current cell), add the path count of neighbors to `cost`. Log the `cost` into `dp[i][j]` in the end. 
- Sum all the `dp[i][j]` as result to be returned. 

# Complexity
- Time complexity: $$O(m \\cdot n)$$
    - All the cells would be calculated once. 
    - Initial `dp` cost $$O(m)$$. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m \\cdot n)$$
    - Size of `dp[i][j]`. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countPaths(grid: number[][]): number {
    let res = 0n;
    const m = grid.length;
    const n = grid[0].length;
    const dp: bigint[][] = [];
    const mod = BigInt(10**9+7);
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // init dp
    for(let i=0; i<m; i++){
        dp[i] = [];
    }

    function dfs(i: number, j: number): bigint{
        if(dp[i][j]){
            return dp[i][j];
        }

        let cost = 1n;
        for(let k=0; k<directions.length; k++){
            const direction = directions[k];
            const previousRow = i+direction[0];
            const previousCol = j+direction[1];
            if(
                grid[previousRow] 
                && grid[previousRow][previousCol]
                && grid[previousRow][previousCol] < grid[i][j]
            ){
                cost += dfs(previousRow, previousCol)
            }
        }
        dp[i][j] = cost
        return cost
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            res += dfs(i, j);
        }
    }
    
    return Number(res%mod);
};
```