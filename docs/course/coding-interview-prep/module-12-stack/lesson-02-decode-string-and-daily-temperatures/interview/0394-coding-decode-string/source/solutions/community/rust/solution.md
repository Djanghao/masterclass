# Rust stack solution

**Author:** sugyan
**Votes:** 7
**Link:** [https://leetcode.com/problems/decode-string/solutions/941553/](https://leetcode.com/problems/decode-string/solutions/941553/)

---

```rust
impl Solution {
    pub fn decode_string(s: String) -> String {
        let mut stack: Vec<(usize, String)> = Vec::new();
        let (mut n, mut str) = (0, String::new());
        for c in s.chars() {
            match c {
                '[' => {
                    stack.push((n, str.clone()));
                    n = 0;
                    str.clear();
                }
                ']' => {
                    if let Some(last) = stack.pop() {
                        str = last.1 + str.repeat(last.0).as_str();
                    }
                }
                '0'..='9' => n = n * 10 + (c as u8 - b'0') as usize,
                c => str.push(c),
            }
        }
        str
    }
}
```