# Rust | 1ms | 1-liner

**Author:** JSusi
**Votes:** 13
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6004042/](https://leetcode.com/problems/string-compression-iii/solutions/6004042/)

---

# Code
```rust []
impl Solution {
    pub fn compressed_string(word: String) -> String {
        word.into_bytes()
            .chunk_by(|a, b| a == b)
            .flat_map(|chunk| chunk.chunks(9).flat_map(|c| [(c.len() as u8 + b'0') as char, chunk[0] as char]))
            .collect()
    }
}
```