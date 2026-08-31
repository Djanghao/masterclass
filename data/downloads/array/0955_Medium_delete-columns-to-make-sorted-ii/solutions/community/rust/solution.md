# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/3351089/](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/3351089/)

---

# Code
```
use std::collections::*;

impl Solution {
  pub fn min_deletion_size(strs: Vec<String>) -> i32 {
    let mut result = 0;
    let strs = strs.into_iter().map(|v| v.chars().collect::<VecDeque<char>>()).collect::<Vec<VecDeque<char>>>();
    let n = strs.len();
    let mut temps = vec![format!("");n];
    for i in 0..100 {
      let mut flag = false;
      for j in 1..n {
        if strs[j].len() <= i { continue }
        if !temps[j-1].is_empty() && !temps[j].is_empty() && temps[j-1] < temps[j] {
          continue
        }

        if strs[j-1][i] > strs[j][i] {
          flag = true;
          result += 1;
          break
        }
      }
      if !flag {
        for j in 0..n {
          if strs[j].len() <= i { continue }
          temps[j] = format!("{}{}", temps[j], strs[j][i]);
        }
      }
    }
    result
  }
}
```