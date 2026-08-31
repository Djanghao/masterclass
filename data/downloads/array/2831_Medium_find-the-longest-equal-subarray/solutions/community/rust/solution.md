# Rust HashMap + Two Pointers

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934149/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934149/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn longest_equal_subarray(nums: Vec<i32>, k: i32) -> i32 {
        let mut mp = HashMap::<i32, Vec<i32>>::new();
        
        for i in 0 .. nums.len() {
            mp.entry(nums[i]).or_insert(vec![]).push(i as i32);    
        }
        
        let mut ret = 1;
        for (_, v) in mp {
            let n = v.len();
            let (mut j, mut cnt) = (0, 0);
            for i in 0 .. n - 1 {
                if j < i {j = i; }
                while (j < n) {
                    ret = ret.max(v[j] - v[i] + 1 - cnt);
                    if j + 1 == n || v[j + 1] - v[j] - 1 + cnt > k { break }
                    cnt += v[j + 1] - v[j] - 1;
                    j += 1;
                }
                if (j > i) { cnt -= v[i + 1] - v[i] - 1; }
            }
        }
        
        ret
    }
}
```