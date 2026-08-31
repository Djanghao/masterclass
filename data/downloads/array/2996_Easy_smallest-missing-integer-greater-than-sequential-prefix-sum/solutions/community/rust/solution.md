# simple solution

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/5313521/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/5313521/)

---

```
use std::collections::HashSet;

impl Solution {
    pub fn missing_integer(x: Vec<i32>) -> i32 {

        let a = x.iter().cloned().collect::<HashSet<_>>();        
        let mut i = 1;
        let mut total = x[0];
        while i < x.len() && x[i] == x[i-1] + 1 {
            total += x[i];
            i += 1;
        }
        while a.contains(&total) {
            total += 1
        }
        total
    }
}
```