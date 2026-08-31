# Easy Rust Solution

**Author:** sandy-5000
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863343/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863343/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn min_subarray(a: Vec<i32>, p: i32) -> i32 {
        let (n, mut r) = (a.len(), 0);
        for i in a.iter() {
            r = (r + *i) % p;
        }
        if r == 0 {
            return 0;
        }
        let mut map_: HashMap<i32, i32> = HashMap::new();
        map_.insert(0, -1);
        let (mut sum_, mut min_) = (0, n as i32);
        for (i, v) in a.into_iter().enumerate() {
            sum_ = (sum_ + v) % p;
            let d = (sum_ + p - r) % p;
            match map_.get(&d) {
                Some(x) => {
                    min_ = min_.min(i as i32 - x);
                },
                _ => {},
            }
            map_.insert(sum_, i as i32);
        }
        if min_ == n as i32 { -1 } else { min_ }
    }
}

```