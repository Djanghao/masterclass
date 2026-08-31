# Rust solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/1451915/](https://leetcode.com/problems/shifting-letters/solutions/1451915/)

---

```rust
impl Solution {
    pub fn shifting_letters(s: String, shifts: Vec<i32>) -> String {
        s.bytes()
            .zip(&shifts)
            .scan(
                shifts.iter().fold(0, |acc, &x| (acc + x) % 26),
                |state, (u, &shift)| {
                    let s = *state as u8;
                    *state = (*state - shift).rem_euclid(26);
                    Some((b'a' + (u - b'a' + s) % 26) as char)
                },
            )
            .collect()
    }
}
```