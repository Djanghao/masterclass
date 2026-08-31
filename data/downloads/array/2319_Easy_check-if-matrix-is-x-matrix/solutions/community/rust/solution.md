# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2200568/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2200568/)

---

```
impl Solution {
    pub fn check_x_matrix(grid: Vec<Vec<i32>>) -> bool {
        let n = grid.len();
        grid.iter().enumerate().all(|(i, row)| {
            row.iter()
                .enumerate()
                .all(|(j, &x)| match i == j || i == (n - j - 1) {
                    true => x > 0,
                    false => x == 0,
                })
        })
    }
}
```