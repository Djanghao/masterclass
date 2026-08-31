# [C++/Python] Top-Down DP

**Author:** PhoenixDD
**Votes:** 108
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/2229819/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/2229819/)

---

## Observation

Let's try to solve the 1D version of this problem. We are given the following array and we can only move forward:

`[1,2,3,4,3]`. How do we find the number of increasing sequences?

 Let's try to pick each element/index as our starting point and find the answer. `1 -> [1,2,3,4] = 4`, `2 -> [2,3,4] = 3`, `3-> [3,4] = 2`, `[4] = 1`, `[3] = 1`. Summing these individual values will produce the answer. But what do these individual results essentially mean? 

Let's look at `[1,2,3,4] = 4`, this means starting from 1 we have a total of 4 increasing sequences/paths. `[1,2,3,4]`,  `[1,2,3]`,  `[1,2]`,  `[1]`. We are calculating the same for each starting point.

The 2D version is similar as it forms a DAG and hence are no cycles in the graph/path.

These observations are the only thing we need to understand and we can do the same in the converted/complex problem with 2D grid and 4 directional movement. For a 2D grid for each starting cell you find the number of elements/cell in the longest possible increasing path for all directions and the sum of all these results will be the answer.

## Solution

We use top-down DP to store the intermediate results, each state `i,j` could be called multiple times and we can cache the results and thus bring down the time complexity.

### C++
```c++
static int MOD=1e9+7;
static vector<int> dirs={0,1,0,-1,0};
class Solution {
public:
    vector<vector<long>> memo;
    long dp(vector<vector<int>>& grid,int i,int j) {
        long result=1;  // Contribution of current cell as an increasing sequence.
        if(memo[i][j]!=-1)  // Return the cached results if they exist.
            return memo[i][j];
        for(int d=0;d<4;d++) {  // Check all 4 directions.
            int x=i+dirs[d],y=j+dirs[d+1];
            if(x>=0&&y>=0&&x<grid.size()&&y<grid[0].size()&&grid[x][y]>grid[i][j])
                result=(result+dp(grid,x,y))%MOD;       // Add the total number of cells in the longest path for all directions.
        }
        return memo[i][j]=result;
    }
    int countPaths(vector<vector<int>>& grid) {
        long result=0;
        memo.resize(grid.size(),vector<long>(grid[0].size(),-1));
        for(int i=0;i<grid.size();i++)      // For each cell as a starting point calculate the number of increasing paths it can contribute.
            for(int j=0;j<grid[0].size();j++)
                result=(result+dp(grid,i,j))%MOD;
        return result;
    }
};
```

### Python

Please upvote [@tojuna's](https://leetcode.com/tojuna/) python solution in the comments below. Credits  [@tojuna](https://leetcode.com/tojuna/).

```python
def countPaths(self, A: List[List[int]]) -> int:
    m, n, mod, dirs = len(A), len(A[0]), (10 ** 9) + 7, [(0, 1), (1, 0), (-1, 0), (0, -1)]
    @cache
    def dp(i, j):
        return sum((1 + dp(i + x, j + y)) for x, y in dirs if 0 <= i + x < m and 0 <= j + y < n and A[i + x][j + y] > A[i][j]) % mod
    return (sum(dp(i, j) % mod for i in range(m) for j in range(n)) + (m * n)) % mod
```

## Complexity
**Space:** `O(mn)`. Due to memoization.
**Time** `O(4mn) = O(mn)`. At each recursion at max you have 4 directions thus `O(1)` further calls and we have a total of `m*n` states for the DP.