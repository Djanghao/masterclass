# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/2784745/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/2784745/)

---

# Intuition
The state transition rule is fixed so this state transition will be looped.
So we can memorize the state transition using a vector. 
The number of cells states is only below 2^8.  It's small enough to use HashSet to find the loop is finished.

# Code
```
use std::collections::*;
impl Solution {
  pub fn prison_after_n_days(cells: Vec<i32>, n: i32) -> Vec<i32> {
    let mut cs = vec![0;8];
    for i in 1..7 {
      if cells[i-1] == cells[i+1] {
        cs[i] = 1;
      }
    }

    let mut patterns = vec![];
    let mut set = HashSet::new();
    while !set.contains(&cs) { 
      let mut new_cs = vec![0;8];
      for i in 1..7 {
        if cs[i-1] == cs[i+1] {
          new_cs[i] = 1;
        }
      }
      set.insert(cs.clone());
      patterns.push(cs);
      cs = new_cs;
    }

    let n = (n-1) as usize;
    let len = patterns.len();
    patterns[n % len].clone()
  }
}
```