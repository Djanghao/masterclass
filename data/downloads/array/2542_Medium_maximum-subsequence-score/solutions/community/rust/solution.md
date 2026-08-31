# Rust Sort & Priority_Queue

**Author:** xiaoping3418
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3082071/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3082071/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_score(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> i64 {
        let mut data = vec![];
        for i in 0 .. nums1.len() { data.push((nums2[i] as i64, nums1[i] as i64)); }
        data.sort();
        
        let mut pq = BinaryHeap::new();
        let (mut sum, mut ret) = (0, 0);
        while let Some((a, b)) = data.pop() {
            sum += b;
            pq.push(Reverse(b));
            
            if pq.len() > k as usize {
                if let Some(Reverse(c)) = pq.pop() { sum -= c; }
            }
            if pq.len() == k as usize { ret = ret.max(sum * a); }
        }
        
        ret
    }
}
```