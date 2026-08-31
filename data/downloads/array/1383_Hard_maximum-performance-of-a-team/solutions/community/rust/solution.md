# Rust faster than 100% easy

**Author:** astadnik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2563281/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/2563281/)

---

```rust
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_performance(n: i32, speed: Vec<i32>, efficiency: Vec<i32>, k: i32) -> i32 {
        let mut efficiency: Vec<_> = efficiency.into_iter().enumerate().collect();
        efficiency.sort_unstable_by_key(|s| -s.1);

        let mut sum: i64 = 0;
        let mut rez: i64 = 0;
        let mut sp = BinaryHeap::new();

        for (i, e) in efficiency {
            let s = speed[i] as i64;

            if sp.len() < k as usize {
                sp.push(-s);
                sum += s;
            } else if s > -sp.peek().unwrap() {
                sum -= -sp.pop().unwrap();
                sp.push(-s);
                sum += s;
            }
            rez = rez.max(sum * e as i64);
        }

        (rez % (10_i64.pow(9) + 7)) as i32
    }
}


```