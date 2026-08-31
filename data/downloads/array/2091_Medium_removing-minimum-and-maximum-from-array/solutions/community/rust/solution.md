# [Rust] Simple implementation with comments

**Author:** dreamzen
**Votes:** 2
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/1642748/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/1642748/)

---

```
impl Solution {
    pub fn minimum_deletions(nums: Vec<i32>) -> i32 {
        if nums.len() <= 2 {
            return nums.len() as i32;
        }

        let mut idx_max = 0;
        let mut idx_min = 0;
        for (i, n) in nums.iter().enumerate() {
            if *n < nums[idx_min] {
                idx_min = i;
            }
            if *n > nums[idx_max] {
                idx_max = i;
            }
        }
        
        // remove from left
        let mut result = idx_max.max(idx_min) + 1;
        // remove from right
        result = result.min(nums.len() - idx_min.min(idx_max));
        // remove from left and right
        result = result.min((idx_max.min(idx_min) + 1) + nums.len() - idx_min.max(idx_max));
        
        result as i32
    }
}
```