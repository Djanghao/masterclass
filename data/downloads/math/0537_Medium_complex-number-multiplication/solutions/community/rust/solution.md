# Rust solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/1423431/](https://leetcode.com/problems/complex-number-multiplication/solutions/1423431/)

---

```rust
impl Solution {
    pub fn complex_number_multiply(num1: String, num2: String) -> String {
        let n = [num1, num2]
            .iter()
            .map(|s| {
                s.trim_end_matches('i')
                    .split('+')
                    .filter_map(|s| s.parse::<i32>().ok())
                    .collect::<Vec<_>>()
            })
            .collect::<Vec<_>>();
        format!(
            "{}+{}i",
            n[0][0] * n[1][0] - n[0][1] * n[1][1],
            n[0][0] * n[1][1] + n[0][1] * n[1][0]
        )
    }
}
```