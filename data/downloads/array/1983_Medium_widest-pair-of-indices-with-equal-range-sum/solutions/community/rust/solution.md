# Rust Solution using Prefix Sum

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/2916072/](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/2916072/)

---

# Code
```
use std::collections::*;

impl Solution {
  pub fn widest_pair_of_indices(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
    let mut result = 0;
    let n = nums1.len();
    let mut memo = vec![0;n+1];

    for i in 0..n {
      memo[i+1] = memo[i] + nums1[i] - nums2[i];
    }

    let mut map = HashMap::new();
    for i in 0..=n {
      map.entry(memo[i]).or_insert(vec![]).push(i);
    }

    for (_, arr) in map {
      if arr.len() > 1 {
        result = result.max(arr[arr.len()-1] - arr[0]);
      }
    }
    
    result as i32
  }
}
```