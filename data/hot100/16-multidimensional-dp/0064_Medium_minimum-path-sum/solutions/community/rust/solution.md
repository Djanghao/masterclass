# Rust | DP | 100%

**Author:** erfansafari111
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-path-sum/solutions/3348395/](https://leetcode.com/problems/minimum-path-sum/solutions/3348395/)

---

# Code
**Creating a new dp Vec to hold our states:**
```
impl Solution {
    pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
        let (w, h) = (grid.len(), grid[0].len());
        let mut dp = vec![vec![0; h]; w];
        
        for i in 0..w {
            for j in 0..h {
                if i == 0 && j == 0 {
                    dp[i][j] = grid[i][j];
                } else if j == 0 {
                    dp[i][j] = grid[i][j] + dp[i-1][j];
                } else if i == 0 {
                    dp[i][j] = grid[i][j] + dp[i][j-1];
                } else {
                    dp[i][j] = grid[i][j] + std::cmp::min(dp[i-1][j], dp[i][j-1]);
                }
            }
        }

        dp[w-1][h-1]
    }
}
```
**Using grid Vec to preserve memory:**
```
impl Solution {
    pub fn min_path_sum(mut grid: Vec<Vec<i32>>) -> i32 {
        let (w, h) = (grid.len(), grid[0].len());
        
        for i in 0..w {
            for j in 0..h {
                if j == 0 && i > 0 {
                    grid[i][j] += grid[i-1][j];
                }
                if i == 0 && j > 0 {
                    grid[i][j] += grid[i][j-1];
                }
                if i != 0 && j != 0 {
                    grid[i][j] += std::cmp::min(grid[i-1][j], grid[i][j-1]);
                }
            }
        }

        grid[w-1][h-1]
    }
}
```