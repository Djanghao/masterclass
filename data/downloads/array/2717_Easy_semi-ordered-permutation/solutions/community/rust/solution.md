# one pass

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/5671874/](https://leetcode.com/problems/semi-ordered-permutation/solutions/5671874/)

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
  pub fn semi_ordered_permutation(nums: Vec<i32>) -> i32 {
    // find 1 position, find n position
    let n = nums.len() as i32;
    let mut idx1 = 0;
    let mut idxn = 0;
    for (index, &value) in nums.iter().enumerate() {
      let idx = index as i32;
      if value == 1 {
        idx1 = idx;
      }
      if value == n {
        idxn = idx;
      }
    }
    let mut res = idx1 + n - idxn - 1;
    if idx1 > idxn { res-=1; }
    res
  }
}
```