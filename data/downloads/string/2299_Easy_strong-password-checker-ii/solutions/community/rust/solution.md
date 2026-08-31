# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/2143560/](https://leetcode.com/problems/strong-password-checker-ii/solutions/2143560/)

---

```
impl Solution {
    pub fn strong_password_checker_ii(password: String) -> bool {
        if password.len() < 8 {
            return false;
        }

        let mut res = 0;
        let mut prev_char = ' ';
        for c in password.chars() {
            match c == prev_char {
                true => return false,
                _ if c.is_ascii_lowercase() => res |= 0b1,
                _ if c.is_ascii_uppercase() => res |= 0b10,
                _ if c.is_ascii_digit() => res |= 0b100,
                _ => res |= 0b1000, // "!@#$%^&*()-+"
            }
            prev_char = c;
        }
        res == 0b1111
    }
}
```