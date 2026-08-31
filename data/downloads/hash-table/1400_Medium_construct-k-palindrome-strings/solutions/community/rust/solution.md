# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/2079176/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/2079176/)

---

```
impl Solution {
  pub fn can_construct(s: String, k: i32) -> bool {
    if (s.len() as i32) < k {
      return false
    }

    let mut memo = vec![0;26];
    for c in s.chars() {
      memo[(c as u8 - 'a' as u8) as usize] += 1;
    }

    let mut odds = 0;
    for v in memo {
      if v % 2 == 1 {
        odds += 1;
      }
    }

    k >= odds 
  }
}
```