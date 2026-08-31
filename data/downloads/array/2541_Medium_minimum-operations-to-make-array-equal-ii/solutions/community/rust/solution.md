# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/4206788/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/4206788/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
  pub fn min_operations(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> i64 {
    let n = nums1.len();
    if k == 0 {
      for i in 0..n {
        if nums1[i] != nums2[i] {
          return -1
        }
      }
      return 0
    }

    let mut plus = 0;
    let mut minus = 0;
    for i in 0..n {
      let v1 = nums1[i];
      let v2 = nums2[i];

      let diff = v1 - v2;
      if diff % k != 0 {
        return -1
      }
      let num = diff / k;
      if 0 < num {
        plus += (num as i64).abs();
      } else {
        minus += (num as i64).abs();
      }
    }

    if plus != minus {
      -1
    } else {
      plus
    }
  }
}
```