# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/3393723/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/3393723/)

---

# Code
```
use std::collections::*;

impl Solution {
  pub fn min_operations(mut nums1: Vec<i32>, mut nums2: Vec<i32>) -> i32 {
    if nums1.len() < nums2.len() {
      std::mem::swap(&mut nums1, &mut nums2);
    }

    if nums1.len() > nums2.len() * 6 {
      return -1
    }
    nums1.sort();
    nums2.sort();

    let sum1 = nums1.iter().sum::<i32>();
    let sum2 = nums2.iter().sum::<i32>();
    if sum1 < sum2 {
      std::mem::swap(&mut nums1, &mut nums2);
    }

    let mut que1 = nums1.into_iter().collect::<VecDeque<i32>>();
    let mut que2 = nums2.into_iter().collect::<VecDeque<i32>>();
    let mut diff = (sum1 - sum2).abs();

    let mut result = 0;
    while 0 < diff && (!que1.is_empty() || !que2.is_empty()) {
      if que1.is_empty() {
        let v2 =  6 - que2.pop_front().unwrap();
        diff -= v2;
      } else if que2.is_empty() {
        let v1 = que1.pop_back().unwrap() - 1;
        diff -= v1;
      } else {
        let v1 = que1[que1.len()-1] - 1;
        let v2 = 6 - que2[0];

        if v1 < v2 {
          diff -= v2;
          que2.pop_front();
        } else {
          diff -= v1;
          que1.pop_back();
        }
      }
      result += 1;
    }
    result
  }
}
```