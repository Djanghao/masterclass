# Rust Solution Using HashSet

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3501138/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3501138/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using a hashset to iterate backward to calculate the negation part and to iterate forward to calculate positive part separately.
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
use std::collections::HashSet;

impl Solution {
    pub fn distinct_difference_array(nums: Vec<i32>) -> Vec<i32> {
        let mut s = HashSet::new();
        let n = nums.len();
        let mut ret = vec![0; n]; 

        for i in (1 .. n).rev() {
            s.insert(nums[i]);
            ret[i - 1] -= s.len() as i32;
        }

        s.clear();
        for i in 0 .. n {
            s.insert(nums[i]);
            ret[i] += s.len() as i32;
        }

        ret
    }
}
```