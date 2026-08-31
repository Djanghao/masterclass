# use min-heap

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/5025294/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/5025294/)

---


```
use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn largest_sum_after_k_negations(mut nums: Vec<i32>, k: i32) -> i32 {
        let mut q = nums.into_iter().map(|x|Reverse(x)).collect::<BinaryHeap<_>>();
        for _ in 0..k as usize {
            if let Some(Reverse(x)) = q.pop() {
                q.push(Reverse(-x))
            } else {
                unreachable!()
            }
        }
        q.into_iter().map(|Reverse(x)|x).sum::<i32>()
    }
}
```