# Rust one-liner

**Author:** BitUnWise
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5145072/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5145072/)

---

# Code
```
impl Solution {
    pub fn satisfies_conditions(grid: Vec<Vec<i32>>) -> bool {
        grid[0].windows(2).all(|w| w[0] != w[1]) && grid.windows(2).all(|w| w[0] == w[1])
    }
}
```