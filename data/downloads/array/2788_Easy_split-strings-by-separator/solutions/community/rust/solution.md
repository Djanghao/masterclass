# 3ms beats 100%

**Author:** therepka
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/5106221/](https://leetcode.com/problems/split-strings-by-separator/solutions/5106221/)

---

# Code
```
impl Solution {
    pub fn split_words_by_separator(words: Vec<String>, separator: char) -> Vec<String> {
        let mut res = Vec::new();

        for word in words {
            word.split(separator).for_each(|w| {
                if w != "" {
                    res.push(w.to_string());
                }
            });
        }

        res
    }
}
```