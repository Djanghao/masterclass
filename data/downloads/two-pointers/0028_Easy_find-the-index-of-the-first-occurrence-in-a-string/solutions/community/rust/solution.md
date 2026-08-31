# Rust | One-liner

**Author:** wallicent
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/2205390/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/2205390/)

---

```
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        haystack.find(&needle).map(|i| i as i32).unwrap_or(-1)
    }
}
```