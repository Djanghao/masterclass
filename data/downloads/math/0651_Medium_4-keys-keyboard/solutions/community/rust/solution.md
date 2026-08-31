# Rust Solution using Dynamic Programing

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/3661684/](https://leetcode.com/problems/4-keys-keyboard/solutions/3661684/)

---



# Code
```
use std::collections::*;

impl Solution {
  pub fn max_a(n: i32) -> i32 {
    let n = n as usize;
    let mut memo = vec![HashMap::new();n+1];
    memo[0].insert(0,0);

    for i in 0..n {
      let mut new_memo = vec![];
      let mut new_memo2 = vec![];
      for (&v, &num) in &memo[i] {
        new_memo.push((v+1,num));
        new_memo.push((v+num, num));
        new_memo2.push((v,v));
      }

      if i+2 <= n {
        for (v,num) in new_memo2 {
          let entry = memo[i+2].entry(v).or_insert(0);
          if *entry <= num {
            *entry = num;
          }
        }
      }
      for (v, num) in new_memo {
        let entry = memo[i+1].entry(v).or_insert(0);
        if *entry <= num {
          *entry = num;
        }
      }
    }

    let mut result = 0;
    for (v, _) in &memo[n] {
      result = result.max(*v);
    }
    result
  }
}
```