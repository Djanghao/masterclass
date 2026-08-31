# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/3131078/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/3131078/)

---

# Code
```
impl Solution {
  pub fn minimum_numbers(num: i32, k: i32) -> i32 {
    if num == 0 {
      return 0
    }
    if k == 0 {
      return if num % 10 == 0 {
        1
      } else {
        -1
      }
    }

    let one = num % 10;
    for i in 1..=3000 {
      if one == i * k % 10 && num >= i*k {
        return i
      }
    }
    -1
  }
}
```