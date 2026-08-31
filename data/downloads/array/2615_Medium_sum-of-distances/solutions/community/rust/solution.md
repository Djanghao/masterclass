# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/4017966/](https://leetcode.com/problems/sum-of-distances/solutions/4017966/)

---


# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::*;

impl Solution {
  pub fn distance(nums: Vec<i32>) -> Vec<i64> {
    let mut map = HashMap::new();
    let n = nums.len();
    for i in 0..n {
      map.entry(nums[i]).or_insert(vec![]).push(i as i64);
    }

    let mut result = vec![0;n];
    for (_, arr) in map {
      let m = arr.len();
      let mut after_sum = arr.iter().sum::<i64>();
      let mut before_sum = 0;
      for i in 0..m {
        let v = arr[i];
        
        let b_val = i as i64 * v;
        let a_val = (m - i) as i64 * v;

        result[v as usize] = b_val - before_sum + after_sum - a_val;
        before_sum += v;
        after_sum -= v;
      }
    }

    result
  }
}
```