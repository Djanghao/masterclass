# oneliner

**Author:** user5285Zn
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/5736288/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/5736288/)

---


```rust []

impl Solution {
    pub fn find_column_width(grid: Vec<Vec<i32>>) -> Vec<i32> {
        let n = grid.len();
        let m = grid[0].len();
        (0..m).map(|j| (0..n).map(|i|format!("{}",grid[i][j]).len()).max().unwrap() as i32).collect()
    }
}
```