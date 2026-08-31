# Rust Sliding Window

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052870/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052870/)

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
use std::collections::HashMap;

impl Solution {
    pub fn count_good(nums: Vec<i32>, k: i32) -> i64 {
        let mut mp = HashMap::<i32, i32>::new();
        let (n, mut j) = (nums.len(), 0);
        let (mut ret, mut count, k) = (0, 0, k as i64);

        for i in 0 .. n {
            while j < n && count < k {
                if let Some(cnt) = mp.get(&nums[j]) { count += *cnt as i64; }
                *mp.entry(nums[j]).or_insert(0) += 1;
                j += 1;
            }
            if count < k { break }
            ret += (n - j + 1) as i64;
            *mp.entry(nums[i]).or_insert(0) -= 1;
            if let Some(cnt) = mp.get(&nums[i]) { count -= *cnt as i64; }
        }
        
        ret
    }
}
```