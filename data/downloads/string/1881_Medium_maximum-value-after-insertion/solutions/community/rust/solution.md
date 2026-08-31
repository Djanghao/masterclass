# Unsafe solution ...

**Author:** system_f
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/4709344/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/4709344/)

---

# Code
```
impl Solution {
    pub fn max_value(n: String, x: i32) -> String {
        go(&n, x)
    }
}

use std::str::from_utf8_unchecked;

fn go(n: &str, x: i32) -> String {
  let ux = x as u8 + b'0';
  let mut ans = String::with_capacity(1+n.len());
  let bs = n.as_bytes();
  if bs[0] == b'-' {
    ans.push('-');
    // goal: minimize the number part
    let mut cont = bs.len();
    for (i, b) in bs.iter().enumerate().skip(1) {
      if &ux < b {
        ans.push(ux as char);
        cont = i;
        break;
      }
      ans.push(*b as char);
    }
    if cont == bs.len() {
      ans.push(ux as char);
    } else {
      unsafe {
        ans.push_str(from_utf8_unchecked(&bs[cont..]));
      }
    }
  } else {
    // goal: maximize the number part
    let mut cont = bs.len();
    for (i, b) in bs.iter().enumerate() {
      if &ux > b {
        ans.push(ux as char);
        cont = i;
        break;
      }
      ans.push(*b as char);
    }
    if cont == bs.len() {
      ans.push(ux as char);
    } else {
      unsafe {
        ans.push_str(from_utf8_unchecked(&bs[cont..]));
      }
    }
  }
  ans
}
```