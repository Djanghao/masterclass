# Rust Binary Search & Priority Queue

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3809496/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3809496/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::BinaryHeap;
impl Solution {
    pub fn max_increasing_groups(usage_limits: Vec<i32>) -> i32 {
        let (mut left, mut right) = (1, usage_limits.len() as i32);

        while (left < right) {
            let mid = right - (right - left) / 2;
            if Self::check(&usage_limits, mid) { left = mid; }
            else { right = mid - 1; }
        }
        left
    }

    fn check(data: &Vec<i32>, m: i32) -> bool {
        let mut pq = BinaryHeap::from(data.clone());
        for a in (1 ..= m).rev() {
            let mut t = a;
            while t > 0 && pq.is_empty() == false {
                let b = a.min(pq.pop().unwrap());
                if b > t { pq.push(b - t); }
                t -= b.min(t);
            }
            if t > 0 { return false }
        }
        true
    } 
}
```