# Rust Solution

**Author:** Sunscar-Sony
**Votes:** 2
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5151259/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5151259/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn matrix_score(grid: Vec<Vec<i32>>) -> i32 {
        let rows = grid.len();
        let cols = grid[0].len();
        let mut score: i32 = (1i32 << (cols - 1)) * (rows as i32);
        for col_idx in 1..cols {
            let count = grid
                .iter()
                .fold(0i32, |acc, row| acc + if row[0] == row[col_idx] { 1 } else { 0 });
            score += count.max(rows as i32 - count) * (1 << (cols - col_idx - 1));
        }
        score
    }
}

```