# understanding the description is half the battle

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/5488704/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/5488704/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

use std::collections::HashSet;

impl Solution {
  pub fn distinct_integers(n: i32) -> i32 {
    // math equation or simulation?
    let mut nums_list: HashSet<i32> = HashSet::new();
    nums_list.insert(n);
    let mut cnt = 0;
    let mut changed = true;
    while changed && cnt < 1_000_000_000 {
      cnt+=1;
      changed = false;
      let cpy: Vec<i32> = nums_list.iter().cloned().collect();
      for x in cpy {
        for i in 1..=n {
          if x%i == 1 {
            if nums_list.insert(i) {
              changed = true
            }
          }
        }
      }
    }
    nums_list.len() as i32
  }
}
```