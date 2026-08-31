# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/4408360/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/4408360/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
use std::collections::*;

const MOD:usize = 1_000_000_007;
impl Solution {
  pub fn number_of_good_subarray_splits(nums: Vec<i32>) -> i32 {
    let mut que = nums.into_iter().collect::<VecDeque<i32>>();
    let mut dirty = false;
    while let Some(v) = que.pop_front() {
      if v == 1 {
        dirty = true;
        que.push_front(v);
        break
      }
    }
    if !dirty {
      return 0
    }

    while let Some(v) = que.pop_back() {
      if v == 1 {
        que.push_back(v);
        break
      }
    }

    let mut result = 1;
    que.pop_front();
    let mut temp = 1;
    while let Some(v) = que.pop_front() {
      if v == 1 {
        result *= temp;
        result %= MOD;
        temp = 1;
      } else {
        temp += 1;
      }
    }

    result as i32
  }
}
```