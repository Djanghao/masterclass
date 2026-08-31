# Rust: 0ms, Stack-Based Solution

**Author:** seandewar
**Votes:** 6
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/1161699/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/1161699/)

---

```rust
impl Solution {
    pub fn remove_duplicates(s: String, k: i32) -> String {
        s.chars()
            .fold(vec![], |mut s, a| {
                match s.last_mut() {
                    Some((b, n)) if a == *b && *n + 1 == k => { s.pop(); }
                    Some((b, n)) if a == *b => *n += 1,
                    _ => s.push((a, 1)),
                }
                s
            })
            .into_iter()
            .flat_map(|(c, n)| std::iter::repeat(c).take(n as _))
            .collect()
    }
}
```