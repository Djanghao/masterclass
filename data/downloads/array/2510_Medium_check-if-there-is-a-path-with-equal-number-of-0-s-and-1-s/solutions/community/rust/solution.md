# Rust Solution using Dynamic Programing

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3023660/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/3023660/)

---


# Code
```
use std::collections::*;

fn helper(a:i32) -> i32 {
    if a == 1 {
        1
    } else {
        -1
    }
}

impl Solution {
  pub fn is_there_a_path(grid: Vec<Vec<i32>>) -> bool {
    let n = grid.len();
    let m = grid[0].len();
    let mut memo = vec![vec![HashSet::new();m];n];
    memo[0][0].insert(helper(grid[0][0]));

    for i in 0..n {
      for j in 0..m {
        let arr = memo[i][j].iter().map(|v| *v).collect::<Vec<i32>>();
        if i < n-1 {
          let add = helper(grid[i+1][j]);
          let ni = i + 1;
          for v in &arr {
            memo[ni][j].insert(v+add);
          }
        }

        if j < m-1 {
          let add = helper(grid[i][j+1]);
          let nj = j + 1;
          for v in &arr {
            memo[i][nj].insert(v+add);
          }
        }
      }
    }

    memo[n-1][m-1].contains(&0)
  }
}
```