# Rust solution using BTreeMap

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/671612/](https://leetcode.com/problems/random-pick-with-weight/solutions/671612/)

---

```rust
use rand::Rng;
use std::collections::BTreeMap;

struct Solution {
    btm: BTreeMap<i32, usize>,
    n: i32,
}

impl Solution {

    fn new(w: Vec<i32>) -> Self {
        let mut btm: BTreeMap<i32, usize> = BTreeMap::new();
        let mut n = 0;
        for weight in w.iter() {
            n += *weight;
            btm.insert(n, btm.len());
        }
        Self { btm, n }
    }
    
    fn pick_index(&self) -> i32 {
        let mut rng = rand::thread_rng();
        let m: i32 = rng.gen_range(0, self.n);
        if let Some(next) = self.btm.range(m + 1..).next() {
            *next.1 as i32
        } else {
            -1
        }
    }
}
 ```