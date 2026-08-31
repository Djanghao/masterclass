# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/4095988/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/4095988/)

---


# Complexity
- Time complexity:
$$O(2^n)$$

- Space complexity:
$$O(1)$$O

# Code
```
impl Solution {
  pub fn max_strength(nums: Vec<i32>) -> i64 {
    let n = nums.len();
    let limit = 1i64 << n;
    let mut result = -10i64.pow(13);
    for i in 1..limit {
      let mut temp = 1;
      for j in 0..n {
        if i >> j & 1 == 1 {
          temp *= nums[j] as i64;
        }
      }
      result = result.max(temp);
    }

    result
  }
}
```