# Rust iterator solution with min heap | 0ms

**Author:** stevenylai
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/6138233/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/6138233/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(N + klog(n))$$

- Space complexity:
$$O(N)$$

# Code
```rust []
impl Solution {
    pub fn get_final_state(nums: Vec<i32>, k: i32, multiplier: i32) -> Vec<i32> {
        use std::collections::BinaryHeap;
        use std::cmp::Reverse;

        let mut min_heap = nums
          .into_iter()
          .enumerate()
          .map(|(i, n)| Reverse((n, i)))
          .collect::<BinaryHeap<_>>();
        
        let mut min_heap = (0..k)
          .fold(min_heap, |mut pq, _| {
            let (n, i) = pq.pop().unwrap().0;
            pq.push(Reverse((n * multiplier, i)));
            pq
          });
        
        let mut res = min_heap
          .into_vec();
        
        res.sort_unstable_by_key(|&Reverse((n, i))| i);

        res
          .into_iter()
          .map(|Reverse((n, i))| n)
          .collect()
    }
}
```