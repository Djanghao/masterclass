# Rust 0ms-4ms

**Author:** ObliqueMotion
**Votes:** 47
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/333761/](https://leetcode.com/problems/zigzag-conversion/solutions/333761/)

---

![image](./images/0.png)


```rust
impl Solution {
    pub fn convert(s: String, num_rows: i32) -> String {
        let mut zigzags: Vec<_> = (0..num_rows)
            .chain((1..num_rows-1).rev())
            .cycle()
            .zip(s.chars())
            .collect();
        zigzags.sort_by_key(|&(row, _)| row);
        zigzags.into_iter()
            .map(|(_, c)| c)
            .collect()
    }
}
```