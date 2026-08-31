# simply generate everything

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/6033961/](https://leetcode.com/problems/beautiful-arrangement/solutions/6033961/)

---

```rust []
use std::collections::HashSet;

impl Solution {
    pub fn count_arrangement(n: i32) -> i32 {
        let mut r = HashSet::new();
        r.insert(vec![]);
        for i in 1..=n {
            let mut q = HashSet::new();
            for x in r.into_iter() {
                for d in 1..=n {
                    if (d % i == 0 || i % d == 0) && !x.contains(&d) {
                        let mut y = x.clone();
                        y.push(d);
                        q.insert(y);
                    }
                }
            }
            r = q;
        }
        r.len() as _
    }
}
```