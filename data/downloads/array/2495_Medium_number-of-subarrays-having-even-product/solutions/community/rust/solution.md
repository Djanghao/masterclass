# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/3750265/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/3750265/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::*;

impl Solution {
  pub fn even_product(nums: Vec<i32>) -> i64 {
    let mut que = VecDeque::new();
    let n = nums.len();

    for i in 0..n {
      if nums[i] % 2 == 0 {
        que.push_back(i);
      }
    }

    let mut result = 0;
    let mut li = 0;
    while !que.is_empty() && li < n {
      let ri = que[0];
      result += n - ri;
      if li == ri {
        que.pop_front();
      }
      li += 1;
    }

    result as i64
  }
}
```