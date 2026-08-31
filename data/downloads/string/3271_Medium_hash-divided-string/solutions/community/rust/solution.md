# chunks.map(fold)

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5947440/](https://leetcode.com/problems/hash-divided-string/solutions/5947440/)

---

```rust []
fn f(x: &[char]) -> char {
    (x.iter().fold(0, |acc, &c| (acc + c as u8 - 'a' as u8)%26 ) + 'a' as u8) as char
}
impl Solution {
    pub fn string_hash(s: String, k: i32) -> String {
        s.chars()
            .collect::<Vec<_>>()
            .chunks(k as usize)
            .map(|x|f(x)).collect::<String>()
    }
}
```