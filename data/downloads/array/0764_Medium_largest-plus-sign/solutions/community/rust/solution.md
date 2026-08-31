# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/2912985/](https://leetcode.com/problems/largest-plus-sign/solutions/2912985/)

---

# Code
```
impl Solution {
    pub fn order_of_largest_plus_sign(n: i32, mines: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut grid = vec![vec![1; n]; n];
        for mine in mines {
            grid[mine[0] as usize][mine[1] as usize] = 0;
        }

        let mut left = vec![vec![0; n]; n];
        let mut right = vec![vec![0; n]; n];
        let mut up = vec![vec![0; n]; n];
        let mut down = vec![vec![0; n]; n];

        for i in 0..n {
            for j in 0..n {
                if grid[i][j] == 1 {
                    left[i][j] = if j == 0 { 1 } else { left[i][j - 1] + 1 };
                    up[i][j] = if i == 0 { 1 } else { up[i - 1][j] + 1 };
                }
            }
        }

        for i in (0..n).rev() {
            for j in (0..n).rev() {
                if grid[i][j] == 1 {
                    right[i][j] = if j == n - 1 { 1 } else { right[i][j + 1] + 1 };
                    down[i][j] = if i == n - 1 { 1 } else { down[i + 1][j] + 1 };
                }
            }
        }

        let mut ans = 0;
        for i in 0..n {
            for j in 0..n {
                let len = std::cmp::min(left[i][j], std::cmp::min(right[i][j], std::cmp::min(up[i][j], down[i][j])));
                ans = std::cmp::max(ans, len);
            }
        }

        ans as i32
    }
}
```