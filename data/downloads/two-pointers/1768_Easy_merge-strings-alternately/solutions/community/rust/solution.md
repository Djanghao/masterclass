# rust iterators

**Author:** zakharovvi
**Votes:** 14
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/2710288/](https://leetcode.com/problems/merge-strings-alternately/solutions/2710288/)

---

```
impl Solution {
    pub fn merge_alternately(word1: String, word2: String) -> String {
        word1
            .chars()
            .zip(word2.chars())
            .flat_map(|(c1, c2)| [c1, c2])
            .chain(word1.chars().skip(word2.len()))
            .chain(word2.chars().skip(word1.len()))
            .collect()
    }
}
```