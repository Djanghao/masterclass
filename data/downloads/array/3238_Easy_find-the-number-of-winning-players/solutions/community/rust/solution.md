# suprisingly annoying

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5919031/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5919031/)

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
```rust []

use std::collections::HashMap;

impl Solution {
  pub fn winning_player_count(n: i32, pick: Vec<Vec<i32>>) -> i32 {
    let mut res = 0;
    let mut hm:HashMap<i32, HashMap<i32,i32>> = HashMap::new();
    for p in pick {
      let mut player_balls = hm.entry(p[0]).or_insert(HashMap::new());
      *player_balls.entry(p[1]).or_insert(0)+=1;
    }
    for (k,freqs) in hm {
      for (_,freq) in freqs {
        if freq >= (k+1) { 
            res+=1;
            break
        }
      }
    }
    res
  }
}

```