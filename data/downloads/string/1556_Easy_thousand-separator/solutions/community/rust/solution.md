# Rust long fp-solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/1234939/](https://leetcode.com/problems/thousand-separator/solutions/1234939/)

---

```
impl Solution {
    pub fn thousand_separator(n: i32) -> String {
        n.to_string()
            .chars()
            .collect::<Vec<_>>()
            .rchunks(3)
            .rev()
            .map(|v| v.iter().collect::<String>())
            .collect::<Vec<_>>()
            .join(".")
    }
}
```