# DP

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4220885/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4220885/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1) Consider sliding window of length 3
2) Let denote: 
$$l[i] = nums[i]$$, 
$$m[i] = nums[i + 1]$$ 
$$r[i] = nums[i + 2]$$
3) Then: 
$$l[i + 1] = min(l[i] + nums[i + 1], m[i])$$
$$m[i + 1] = min(l[i] + nums[i + 2], m[i] + nums[i + 2], r[i])$$
$$r[i + 1] = min(l[i] + nums[i + 3], m[i] + nums[i + 3], r[i] + nums[i + 3])$$
4) The result is $$min(l[i], m[i], r[i])$$
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::min;

impl Solution {
    pub fn min_increment_operations(mut nums: Vec<i32>, k: i32) -> i64 {
        let mut l = (if nums[0] < k {k - nums[0]} else {0}) as i64;
        let mut m = (if nums[1] < k {k - nums[1]} else {0}) as i64;
        let mut r = (if nums[2] < k {k - nums[2]} else {0}) as i64;
        
        let mut i = 1;
        
        while i < nums.len() - 2 {
            let lt = (if nums[i] < k {k - nums[i]} else {0}) as i64;
            let mt = (if nums[i + 1] < k {k - nums[i + 1]} else {0}) as i64;
            let rt = (if nums[i + 2] < k {k - nums[i + 2]} else {0}) as i64;

            let l1 = min(l + lt, m);    
            let m1 = min(l + mt, min(m + mt, r));            
            let r1 = min(l + rt, min(m + rt, r + rt));

            l = l1;
            m = m1;
            r = r1;
            
            i += 1;
        }
        
        min(l, min(m, r))
    }
}
```