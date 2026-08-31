# Rust one liner

**Author:** thatguywithdrip
**Votes:** 22
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/2350136/](https://leetcode.com/problems/palindrome-number/solutions/2350136/)

---

```
impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        return x.to_string().chars().rev().eq(x.to_string().chars())
    }
}
```