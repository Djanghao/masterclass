# hashing the distances

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/5957784/](https://leetcode.com/problems/number-of-boomerangs/solutions/5957784/)

---

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn number_of_boomerangs(points: Vec<Vec<i32>>) -> i32 {
        let mut total = 0;
        let mut m : HashMap<i64, i32> = HashMap::new();
        for p in &points {
            m.clear();
            for q in &points {
                let d1 = (p[0]-q[0]) as i64;
                let d2 = (p[1]-q[1]) as i64;
                *m.entry(d1*d1 + d2*d2).or_default() += 1;
            }
            total += m.values().map(|k|k*(k-1)).sum::<i32>()
        }
        total 
    }
}
```