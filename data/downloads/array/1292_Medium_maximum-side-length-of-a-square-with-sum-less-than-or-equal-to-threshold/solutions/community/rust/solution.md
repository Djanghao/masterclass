# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/3702412/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/3702412/)

---

# Code
```
impl Solution {
  pub fn max_side_length(mat: Vec<Vec<i32>>, threshold: i32) -> i32 {
    let n = mat.len();
    let m = mat[0].len();

    let mut memo = vec![vec![0;m+1];n+1];
    for i in 0..n {
      for j in 0..m {
        memo[i+1][j+1] = memo[i+1][j] + memo[i][j+1] + mat[i][j] - memo[i][j];
      }
    }

    let mut max = 0;
    for i in 0..n {
      for j in 0..m {
        for len in 0.. {
          let ni = i+len+1;
          if n < ni { break }
          let nj = j+len+1;
          if m < nj { break }

          let v = memo[ni][nj] - (memo[ni][j] + memo[i][nj]) + memo[i][j];
          if v <= threshold {
            max = max.max(len as i32 + 1);
          } else {
            break
          }
        }
      }
    }

    max
  }
}
```