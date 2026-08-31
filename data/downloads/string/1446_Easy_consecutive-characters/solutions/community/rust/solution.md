# Rust solution

**Author:** alex700
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/1626757/](https://leetcode.com/problems/consecutive-characters/solutions/1626757/)

---

```
impl Solution {
    pub fn max_power(s: String) -> i32 {
        s.into_bytes()
            .windows(2)
            .scan(1, |s, x| {
                *s = if x[0] == x[1] { *s + 1 } else { 1 };
                Some(*s)
            })
            .max()
            .unwrap_or(1)
    }
}
```