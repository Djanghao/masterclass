# Space optimized top down DP, beats 100% in both

**Author:** germanov_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/5518521/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/5518521/)

---

# Complexity
- Time complexity:
$$O(m*n^2)$$

- Space complexity:
$$O(4n)$$

# Code
```
impl Solution {
    pub fn min_path_cost(grid: Vec<Vec<i32>>, move_cost: Vec<Vec<i32>>) -> i32 {
        let (mut dp,mut prev_dp) = (vec![vec![0;2];grid[0].len()],vec![vec![0;2];grid[0].len()]);
        for col in 0..grid[0].len() {
            (prev_dp[col][0],prev_dp[col][1]) = (grid[0][col],grid[0][col]);
        }
        for row in 1..grid.len() {
            for col in 0..grid[row].len() {
                dp[col][1] = grid[row][col];
                dp[col][0] = grid[row][col] + grid[row-1].iter().enumerate()
                    .map(|(idx,_)| {
                        prev_dp[idx][0] + move_cost[prev_dp[idx][1] as usize][col]
                    }).min().unwrap();
            }
            prev_dp = dp.clone();
        }
        dp.iter().map(|item| item[0]).min().unwrap()        
    }
}
```