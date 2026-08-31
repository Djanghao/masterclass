# Rust one line solution

**Author:** SerVasilich
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2327709/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2327709/)

---

```
use std::collections::HashSet;

impl Solution {
    pub fn shortest_sequence(rolls: Vec<i32>, k: i32) -> i32 {
        rolls.iter().fold((1,HashSet::new()), |mut acc, x| {
            acc.1.insert(x); 
            if acc.1.len()==k as usize {(acc.0+1,HashSet::new())} else {acc}
        }).0
    }
}
```