# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/3117646/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/3117646/)

---

# Intuition
We need to think of the index of the max value.
When a binary string is prefix-aligned in this problem, all value is 1 from 1-index to the index of the max value.
The number of the value is the same as the index(this problem uses 1-index not 0-index).
This means the max value must be the same value as the index when a binary string is prefix-alined.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
  pub fn num_times_all_blue(flips: Vec<i32>) -> i32 {
    let n = flips.len();
    let mut max = 0;
    let mut result = 0;
    for i in 1..=n {
      max = max.max(flips[i-1] as usize);
      if max == i {
        result += 1;
      }
    }

    result
  }
}
```