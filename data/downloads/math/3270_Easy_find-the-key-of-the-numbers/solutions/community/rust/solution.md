# Rust Straightforward Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5841572/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5841572/)

---

# Code
```rust []
use std::cmp::min;

impl Solution {
  pub fn generate_key(num1: i32, num2: i32, num3: i32) -> i32 {
    let (num1, num2, num3, mut res) = (
      format!("{:04}", num1),
      format!("{:04}", num2),
      format!("{:04}", num3),
      String::from(""),
    );

    for i in 0..4 {
      let cur_digit = min(
        num1.chars().nth(i).unwrap(), 
        min(
          num2.chars().nth(i).unwrap(),
          num3.chars().nth(i).unwrap(),
        )
      );
      res = format!("{res}{cur_digit}")
    }

    i32::from_str_radix(&res, 10).unwrap()
  }
}
```