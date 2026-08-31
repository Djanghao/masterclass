# tricky!

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/5696764/](https://leetcode.com/problems/longest-alternating-subarray/solutions/5696764/)

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
  pub fn alternating_subarray(nums: Vec<i32>) -> i32 {
    let sz = nums.len();
    let mut res = 0;
    for l in 0..sz {
      let left = nums[l];
      let mut start = false;
      let mut broke = false;
      for r in l+1..sz {
        let right = nums[r];

        if (right != (left+1) && (right != left)) || (start && right != left) || (!start && right == left) {
          broke = true;
          res = res.max(r-l);
          break;
        }
        start = !start;
      }
      if !broke {
        res = res.max(sz-l);
      }

    }
    if res < 2 {
      -1
    } else {
      res as i32
    }
  }
}
```