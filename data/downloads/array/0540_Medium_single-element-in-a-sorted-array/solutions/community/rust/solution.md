# [Rust] 0ms Binary Search + XOR approach

**Author:** ikorennoy
**Votes:** 3
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3214483/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3214483/)

---

# Complexity
- Time complexity: $$O(log \\space n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
        let mut right = nums.len() - 1;
        let mut left = 0;

        while left < right {
            let mid = (left + right) / 2;

            if nums[mid] == nums[mid ^ 1] {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return nums[left];
    }
}
```