# Rust 63ms 🔥 11.55Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5211216/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5211216/)

---

# Complexity
- Time complexity: $$O(len(queries)) = O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(len(queries)) = O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::{HashMap, HashSet};
impl Solution {
    pub fn query_results(limit: i32, queries: Vec<Vec<i32>>) -> Vec<i32> {
        queries.into_iter()
        .fold((HashMap::new(), HashMap::new(), vec![]),
        |(mut m, mut s, mut v), x| {
            if m.contains_key(&x[0]) {
                let col = m.get(&x[0]).unwrap();
                let val = s.get(col).unwrap();
                
                if *val <= 1 {s.remove(col);}
                else {*s.entry(*col).or_insert(0) -= 1;}
                
                *m.entry(x[0]).or_insert(-1) = x[1];
                *s.entry(x[1]).or_insert(0) += 1;
            } else {
                m.insert(x[0], x[1]);
                *s.entry(x[1]).or_insert(0) += 1;
            }
            v.push(s.len() as i32);
            (m, s, v)
            }
        ).2
    }
}
```