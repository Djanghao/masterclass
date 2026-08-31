# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/2702205/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/2702205/)

---

The grid value can only be changed by x, so grid value % x should be the same value.
If every grid value % x is not the same value, the answer is -1. 

```
impl Solution {
    pub fn min_operations(grid: Vec<Vec<i32>>, x: i32) -> i32 {
        let n = grid.len();
        let m = grid[0].len();
        let a = grid[0][0] % x;
        let nm = n*m;
        let mut arr = vec![0;nm];
        for i in 0..n {
            for j in 0..m {
                if grid[i][j] % x != a {
                    return -1
                }
                arr[i*m+j] = grid[i][j];
            }
        }
        arr.sort();

        let mid = nm / 2;
        let mut result = i32::max_value();
        for i in mid..std::cmp::min(nm, mid+3) {
            let mut temp = 0;
            let v1 = arr[i];

            for &v2 in &arr {
                temp += (v1-v2).abs() / x;
            }
            result = result.min(temp);
        }
        result
    }
}
```