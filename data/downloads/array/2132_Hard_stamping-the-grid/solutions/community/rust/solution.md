# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-grid/solutions/3254460/](https://leetcode.com/problems/stamping-the-grid/solutions/3254460/)

---

# Code
```
impl Solution {
    pub fn possible_to_stamp(grid: Vec<Vec<i32>>, stamp_height: i32, stamp_width: i32) -> bool {
        fn pref2d(v: &[Vec<i32>], m: usize, n: usize) -> Vec<Vec<i32>> {
            let mut p = vec![vec![0; n + 1]; m + 1];
            for i in 0..m {
                for j in 0..n {
                    p[i + 1][j + 1] = v[i][j] + p[i + 1][j] + p[i][j + 1] - p[i][j];
                }
            }
            p
        }

        fn sum2d(p: &[Vec<i32>], c1: usize, r1: usize, c2: usize, r2: usize) -> i32 {
            p[c2 + 1][r2 + 1] + p[c1][r1] - p[c1][r2 + 1] - p[c2 + 1][r1]
        }

        let (stamp_height, stamp_width) = (stamp_height as usize, stamp_width as usize);
        let (m, n) = (grid.len(), grid[0].len());
        let mut stamp = vec![vec![0; n]; m];
        let pref = pref2d(&grid, m, n);
        for (i, stamp_i) in stamp.iter_mut().enumerate().skip(stamp_height - 1) {
            for (j, stamp_i_j) in stamp_i.iter_mut().enumerate().skip(stamp_width - 1) {
                let v = sum2d(&pref, i + 1 - stamp_height, j + 1 - stamp_width, i, j);
                *stamp_i_j = if v == 0 { 1 } else { 0 };
            }
        }
        let pref2 = pref2d(&stamp, m, n);
        for (i, grid_i) in grid.iter().enumerate() {
            for (j, &grid_i_j) in grid_i.iter().enumerate() {
                let c2 = (m - 1).min(i + stamp_height - 1);
                let r2 = (n - 1).min(j + stamp_width - 1);
                if grid_i_j == 0 && sum2d(&pref2, i, j, c2, r2) == 0 {
                    return false;
                }
            }
        }
        true
    }
}
```