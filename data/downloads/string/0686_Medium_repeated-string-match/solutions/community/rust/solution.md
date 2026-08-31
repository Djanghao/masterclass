# Rust with string .repeat().find()

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/3795801/](https://leetcode.com/problems/repeated-string-match/solutions/3795801/)

---

# Code
```
impl Solution {
    pub fn repeated_string_match(a: String, b: String) -> i32 {
        // +2 to handle all scenarios of matching.
        let x = b.len() / a.len() + 2;
        match a.repeat(x).find(&b) {
            None => -1,
            // (x - 1) / y + 1 works like (x as f64 / y as f64).ceil()
            // without conversion to f64.
            Some(i) => ((i + b.len() - 1) / a.len()) as i32 + 1,
        }
    }
}
```