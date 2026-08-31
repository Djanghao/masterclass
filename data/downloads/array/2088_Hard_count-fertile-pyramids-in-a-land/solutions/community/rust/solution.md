# Rust: modifies input grid

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/5273033/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/5273033/)

---

# Complexity
- Time complexity: $$O(m*n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn count_pyramids(mut grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        for v in grid.iter_mut() {
            for j in 1..n {
                v[j] *= v[j - 1] + 1;
            }
            v[n - 1] = v[n - 1].min(1);
            for j in (0..n - 1).rev() {
                v[j] = v[j].min(v[j + 1] + 1);
            }
        }

        let mut ans = 0;
        for j in 1..n - 1 {
            let mut combo = 0;
            for i in 0..m {
                combo = grid[i][j].min(combo + 1);
                ans += 0.max(combo - 1);
            }
            combo = 0;
            for i in (0..m).rev() {
                combo = grid[i][j].min(combo + 1);
                ans += 0.max(combo - 1);
            }
        }
        ans
    }
}
```