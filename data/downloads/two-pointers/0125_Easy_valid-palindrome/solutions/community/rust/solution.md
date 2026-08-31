# Rust Iterator Solution

**Author:** lawrencek0
**Votes:** 21
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/526271/](https://leetcode.com/problems/valid-palindrome/solutions/526271/)

---

```
impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let mut iter = s
            .chars()
            .filter(|c| c.is_alphanumeric())
            .map(|c| c.to_ascii_lowercase());

        iter.clone().eq(iter.rev())
    }
}
```