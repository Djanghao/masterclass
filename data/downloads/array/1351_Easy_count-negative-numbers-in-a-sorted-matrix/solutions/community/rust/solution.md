# Rust flatten (0ms, 2.2MB)

**Author:** kom0z
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/742825/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/742825/)

---

```
impl Solution {
    pub fn count_negatives(grid: Vec<Vec<i32>>) -> i32 {
        grid.iter()
            .flatten()
            .filter(|item| **item < 0)
            .count() as i32
    }
}
```