# Rust Solution using DP

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/2165009/](https://leetcode.com/problems/largest-1-bordered-square/solutions/2165009/)

---

```
impl Solution {
  pub fn largest1_bordered_square(grid: Vec<Vec<i32>>) -> i32 {
    let n = grid.len();
    let m = grid[0].len();
    let mut memo1 = vec![vec![0;m+1];n];
    let mut memo2 = vec![vec![0;m];n+1];
    
    for i in 0..n {
      for j in 0..m {
        memo1[i][j+1] = memo1[i][j] + grid[i][j];
      }
    }

    for i in 0..m {
      for j in 0..n {
        memo2[j+1][i] = memo2[j][i] + grid[j][i];
      }
    }

    let limit = std::cmp::min(n,m);
    let mut max = 0;
    for i in 0..n {
      for j in 0..m {
        for k in 1..=limit {
          let ni = i+k;
          let nj = j+k;
          if n < ni || m < nj { continue }
          let ik= k as i32;

          if memo1[i][nj] - memo1[i][j] != ik { continue }
          if memo1[ni-1][nj] - memo1[ni-1][j] != ik { continue }

          if memo2[ni][j] - memo2[i][j] != ik { continue }
          if memo2[ni][nj-1] - memo2[i][nj-1] != ik { continue }
          
          max = std::cmp::max(max, k*k);
        }
      }
    }
    max as i32
  }
}
```