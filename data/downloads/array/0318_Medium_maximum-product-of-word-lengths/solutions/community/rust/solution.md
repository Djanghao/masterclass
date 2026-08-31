# Rust solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/1233716/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/1233716/)

---

```rust
impl Solution {
    pub fn max_product(words: Vec<String>) -> i32 {
        let v = words
            .iter()
            .map(|word| {
                word.as_bytes()
                    .iter()
                    .fold(0_u32, |acc, x| acc | 1 << (x - b'a'))
            })
            .collect::<Vec<_>>();
        let mut answer = 0;
        for i in 0..words.len() - 1 {
            for j in i + 1..words.len() {
                if v[i] & v[j] == 0 {
                    answer = answer.max(words[i].len() * words[j].len())
                }
            }
        }
        answer as i32
    }
}
```