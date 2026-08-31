# Rust DP solution

**Author:** sugyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/1021158/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/1021158/)

---

```rust
impl Solution {
    pub fn count_vowel_strings(n: i32) -> i32 {
        let mut v = [1; 5];
        for _ in 1..n {
            for i in 1..5 {
                v[i] += v[i - 1];
            }
        }
        v.iter().sum()
    }
}
```