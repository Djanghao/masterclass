# Rust one-liner

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1353645/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/1353645/)

---

```
impl Solution {
    pub fn generate_the_string(n: i32) -> String {
        std::iter::repeat('a')
            .take((n - 1 + n % 2) as usize)
            .chain(std::iter::once('b').take((1 - n % 2) as usize))
            .collect()
    }
}
```