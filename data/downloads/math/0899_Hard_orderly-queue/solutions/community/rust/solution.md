# A short Rust solution with 100% less memory & 100% less time

**Author:** OverflowCat
**Votes:** 1
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2784943/](https://leetcode.com/problems/orderly-queue/solutions/2784943/)

---

```rust
use std::str::from_utf8_unchecked;

impl Solution {
    pub fn orderly_queue(s: String, k: i32) -> String {
        let mut s = s.into_bytes();
        if k == 1 {
            let mut r = s.clone();
            for _ in 1..s.len() {
                r.rotate_left(1);
                if r < s {
                    s = r.clone();
                }
            }
        } else {
            s.sort_unstable();
        }
        unsafe { from_utf8_unchecked(&s).to_owned() }
    }
}
```