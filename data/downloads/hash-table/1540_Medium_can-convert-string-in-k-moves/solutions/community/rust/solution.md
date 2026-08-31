# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/3534281/](https://leetcode.com/problems/can-convert-string-in-k-moves/solutions/3534281/)

---

# Code
```
impl Solution {
  pub fn can_convert_string(s: String, t: String, k: i32) -> bool {
    if s.len() != t.len() {
      return false
    }
    let s = s.chars().into_iter().map(|v| v as usize - 'a' as usize).collect::<Vec<usize>>();
    let t = t.chars().into_iter().map(|v| v as usize - 'a' as usize).collect::<Vec<usize>>();
    let n = s.len();
    let k = k as usize;
    let mut memo = (0..26).into_iter().collect::<Vec<usize>>();

    for i in 0..n {
      if s[i] < t[i] {
        let ti = t[i] - s[i];
        if memo[ti] > k {
          return false
        }
        memo[ti] += 26;
      } else if s[i] > t[i] {
        let ti = 26 - s[i] + t[i];
        if memo[ti] > k {
          return false
        }
        memo[ti] += 26;
      }
    }
    true
  }
}
```