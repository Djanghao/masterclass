# Rust simple solution

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404783/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/1404783/)

---

```
impl Solution {
    pub fn num_of_strings(patterns: Vec<String>, word: String) -> i32 {
        patterns
            .iter()
            .filter(|&pattern| word.contains(pattern))
            .count() as _
    }
}
```