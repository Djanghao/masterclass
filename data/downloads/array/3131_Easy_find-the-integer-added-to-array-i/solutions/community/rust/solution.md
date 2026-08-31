# many red herrings

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5834919/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5834919/)

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
```rust []

impl Solution {
  pub fn added_integer(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
    let mut s1 = nums1.clone();
    s1.sort();
    let mut s2 = nums2.clone();
    s2.sort();
    return s2[0]-s1[0]
  }
}
```