# Rust solution beats 100%

**Author:** sunjesse
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909258/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909258/)

---

# Code
```rust []
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_kelements(nums: Vec<i32>, k: i32) -> i64 {
        let mut h: BinaryHeap<i32> = BinaryHeap::from(nums);
        let mut ans: i64 = 0;
        let mut v: i32 = 0;

        for i in 0..k { 
            v = h.pop().unwrap();
            ans += v as i64;
            h.push((v+2)/3);
        }
        ans
    }
}
```