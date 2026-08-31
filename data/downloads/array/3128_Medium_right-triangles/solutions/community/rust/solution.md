# count non-zero values for each row and column

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5947316/](https://leetcode.com/problems/right-triangles/solutions/5947316/)

---


```rust []
impl Solution {
    pub fn number_of_right_triangles(grid: Vec<Vec<i32>>) -> i64 {
        let n = grid.len();
        let m = grid[0].len();
        let mut a = vec![-1_i64; n];
        let mut b = vec![-1_i64; m];
        let mut total = 0;
        for i in 0..grid.len() {
            for j in 0..grid[0].len() {
                if grid[i][j] == 1 {
                    a[i] += 1;
                    b[j] += 1;
                }
            }
        }
        for i in 0..n {
            for j in 0..m {
                if grid[i][j] == 1 {
                    total += a[i]*b[j]
                }
            }
        }
        total 
    }
}
```