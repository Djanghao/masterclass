# dynamical programming

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/5397945/](https://leetcode.com/problems/cherry-pickup/solutions/5397945/)

---

One picker is at position (i,j) and the other at (k,l).
We only need to save (i,j,k) as l is found from i + j = k + l.


# Code
```
impl Solution {
    pub fn cherry_pickup(mut grid: Vec<Vec<i32>>) -> i32 {
        let inf = 1_000_000;
        let n = grid.len();

        let mut x = vec![vec![vec![-inf; n];n];n];
        x[0][0][0] = grid[0][0];
        for i in 0..n {
            let i1 = i.wrapping_sub(1);
            for j in 0..n {
                let a = grid[i][j];
                if a == -1 {continue}
                let j1 = j.wrapping_sub(1);
                for k in (i+j+1).saturating_sub(n)..n.min(i+j+1) {
                    let k1 = k.wrapping_sub(1);
                    let l = i+j-k;
                    let b = grid[k][l];
                    if b == -1 {continue}
                    for &(ii,jj,kk) in &[(i1, j, k1),(i1, j, k), (i, j1, k1), (i, j1, k)] {
                        let ll = (ii+jj).wrapping_sub(kk);
                        if  ii >= n || jj >= n || kk >= n {continue}
                        let cherrys = a + if i != k || j != l {b} else {0};
                        x[i][j][k] = x[i][j][k].max(x[ii][jj][kk] + cherrys)
                    }
                }
            }
        }
        (0..n).map(|k|x[n-1][n-1][k]).max().unwrap().max(0)
    }
}
```