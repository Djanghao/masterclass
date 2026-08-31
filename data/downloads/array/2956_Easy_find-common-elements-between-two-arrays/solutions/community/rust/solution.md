# maps

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/5783473/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/5783473/)

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

use std::collections::HashMap;

impl Solution {
  pub fn find_intersection_values(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut nums1_map = HashMap::new();
    let mut nums2_map = HashMap::new();

    for num in nums1 {
      *nums1_map.entry(num).or_insert(0) += 1;
    }

    for num in nums2 {
      *nums2_map.entry(num).or_insert(0) += 1;
    }

    let count1 = nums1_map.iter().filter(|(&num, _)| nums2_map.contains_key(&num)).map(|(_, &count)| count).sum();
    let count2 = nums2_map.iter().filter(|(&num, _)| nums1_map.contains_key(&num)).map(|(_, &count)| count).sum();
    vec![count1, count2]

  }
}
```