# Rust: 0ms - Expand Centers (Short - Declarative Style)

**Author:** seandewar
**Votes:** 3
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/1129687/](https://leetcode.com/problems/palindromic-substrings/solutions/1129687/)

---

```
impl Solution {
    pub fn count_substrings(s: String) -> i32 {
        let s = s.into_bytes();
        let count = |i, j| {
            ((0..=i).rev())
                .zip(j..s.len())
                .try_fold(0, |a, (i, j)| if s[i] == s[j] { Ok(a + 1) } else { Err(a) })
                .unwrap_or_else(|a| a)
        };
        (0..s.len()).map(|i| count(i, i) + count(i, i + 1)).sum()
    }
}
```