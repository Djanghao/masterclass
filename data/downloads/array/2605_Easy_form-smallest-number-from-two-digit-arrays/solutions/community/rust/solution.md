# not efficient

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/5545967/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/5545967/)

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
    pub fn min_number(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
      for i in 1..=9 {
        let as_i = i as i32;
        if nums1.contains(&as_i) && nums2.contains(&as_i) {
          return as_i
        }
      }
      let mut sorted1: Vec<i32> = nums1.clone();
      let mut sorted2: Vec<i32> = nums2.clone();
      sorted1.sort();
      sorted2.sort();

      if sorted1[0] < sorted2[0] {
        sorted1[0]*10 + sorted2[0]
      } else {
        sorted2[0]*10 + sorted1[0]
      }
    }
}
```