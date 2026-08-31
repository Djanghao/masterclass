# simple solution

**Author:** ITPavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5007295/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/5007295/)

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
impl Solution {
    pub fn longest_monotonic_subarray(nums: Vec<i32>) -> i32 {
    let mut ans: i32 = 1;
    let mut inc: i32 = 1;
    let mut dec: i32 = 1;
    for i in 1..nums.len() {
        if nums[i - 1] > nums[i] {
            dec += 1;
            inc = 1;
        } else if nums[i - 1] < nums[i] {
            dec = 1;
            inc += 1;
        } else {
            inc = 1;
            dec = 1;
        }
        ans = ans.max(inc).max(dec);
    }
    ans
    }
}
```