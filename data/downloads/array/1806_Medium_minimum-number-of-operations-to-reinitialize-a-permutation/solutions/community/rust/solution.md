# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/2150675/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/2150675/)

---

All value is unique. And every value never comes to the same position until the values come back to the initial position.
So we need to simulate one value and counts operation.  I chose 1 in my solution.

```
impl Solution {
  pub fn reinitialize_permutation(n: i32) -> i32 {
    let mut count = 1;
    let mut i = n / 2;
    while i != 1 {
      if i % 2 == 0 {
        i /= 2;
      } else {
        i = n / 2 + (i-1) / 2;
      }
      count += 1;
    }
    
    count
  }
}
```