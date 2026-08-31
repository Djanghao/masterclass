# Rust Solution using Prefix Sum

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/2813399/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/2813399/)

---

# Complexity
- Time complexity:
$$O(n^2*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::*;

impl Solution {
  pub fn count_distinct(nums: Vec<i32>, k: i32, p: i32) -> i32 {
    let mut set = HashSet::new();
    let n = nums.len();
    let mut memo = vec![0;n+1];
    for i in 0..n {
      memo[i+1] = memo[i];
      if nums[i] % p == 0 {
        memo[i+1] += 1;
      }
    }

    for i in 0..n {
      for j in i..n {
        if memo[j+1] - memo[i] <= k {
          set.insert(&nums[i..=j]);
        }
      }
    }
    set.len() as i32
  }
}
```