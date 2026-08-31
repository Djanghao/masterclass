# Easy Rust Solution

**Author:** ediklil
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1793710/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1793710/)

---

```
impl Solution {
    pub fn most_words_found(sentences: Vec<String>) -> i32 {
        sentences
        .iter()
        .map(|s| s.split_whitespace().count())
        .max()
        .unwrap() as i32
    }
}
```