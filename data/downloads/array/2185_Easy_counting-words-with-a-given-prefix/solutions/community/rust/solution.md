# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1804393/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1804393/)

---

```
impl Solution {
    pub fn prefix_count(words: Vec<String>, pref: String) -> i32 {
        words.iter().filter(|word| word.starts_with(pref.as_str())).count() as _
    }
}
```