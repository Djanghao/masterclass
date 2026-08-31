# Rust with BinaryHeap and Iterator

**Author:** Minamikaze392
**Votes:** 5
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3683901/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3683901/)

---

# Code
```
use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn total_cost(costs: Vec<i32>, k: i32, candidates: i32) -> i64 {
        let mut iter = costs.iter();
        let mut heap = BinaryHeap::new();
        for _ in 0..candidates {
            if let Some(&x) = iter.next() {
                heap.push((Reverse(x), true));
            }
            if let Some(&x) = iter.next_back() {
                heap.push((Reverse(x), false));
            }
        }

        let mut ans = 0i64;
        for _ in 0..k {
            if let Some((Reverse(x), is_front)) = heap.pop() {
                ans += x as i64;
                let opt = if is_front { iter.next() } else { iter.next_back() };
                if let Some(&y) = opt {
                    heap.push((Reverse(y), is_front));
                }
            }
        }
        ans
    }
}
```