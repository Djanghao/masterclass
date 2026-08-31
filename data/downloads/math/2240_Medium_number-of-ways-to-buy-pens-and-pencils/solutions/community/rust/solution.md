# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/3578700/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/3578700/)

---

# Code
```
impl Solution {
  pub fn ways_to_buy_pens_pencils(total: i32, cost1: i32, cost2: i32) -> i64 {
    let mut result = 0;
    let t = total as i64;
    let c1 = cost1 as i64;
    let c2 = cost2 as i64;
    for num in 0.. {
      let v = num * c1;
      if t < v {
        break
      }

      let left = t - v;
      result += left / c2 + 1;
    }

    result      
  }
}
```