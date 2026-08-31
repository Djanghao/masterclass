# [Rust] pattern matching without extra allocation

**Author:** leetcodebot168
**Votes:** 33
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/374718/](https://leetcode.com/problems/roman-to-integer/solutions/374718/)

---

- With only 2.3MiB memory usage and 100% ranking
- Only use pattern guard expression (MatchArmGuard)

```rust
impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        s.chars().rfold(0, |acc, c| {
            acc + match c {
                'I' if acc >= 5 => -1,
                'I' => 1,
                'V' => 5,
                'X' if acc >= 50 => -10,
                'X' => 10,
                'L' => 50,
                'C' if acc >= 500 => -100,
                'C' => 100,
                'D' => 500,
                'M' => 1000,
                _ => 0,
            }
        })
    }
}
```