# Rust Min Heap

**Author:** germanov_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/5248548/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/5248548/)

---

# Complexity
- Time complexity:
$$O(nlog(n))$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn min_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut heap = BinaryHeap::new();
        nums.iter().for_each(|item| heap.push(Reverse(*item)));
        let mut result = 0;
        while heap.peek().unwrap().0 < k {
            let (x,y) = (heap.pop().unwrap().0,heap.pop().unwrap().0);
            if let Some(num) = (x.min(y)*2).checked_add(x.max(y)) {
                heap.push(Reverse(num));
            } else {
                heap.push(Reverse(i32::MAX));
            }                    
            result += 1;
        }
        return result;
    }
}
```