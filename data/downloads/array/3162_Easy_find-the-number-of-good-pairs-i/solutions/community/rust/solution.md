# nested loop

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5894113/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5894113/)

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
  pub fn number_of_pairs(nums1: Vec<i32>, nums2: Vec<i32>, k: i32) -> i32 {
    let n = nums1.len();
    let m = nums2.len();
    let mut res = 0;
    for i in 0..n {
      let first = nums1[i];
      for j in 0..m {
        let second = nums2[j];
        if first % (second*k) == 0 { res+=1 }
      }
    }
    res
  }
}
```