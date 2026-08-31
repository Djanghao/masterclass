# Quick rust solution

**Author:** PlanarGraph
**Votes:** 7
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/499553/](https://leetcode.com/problems/keyboard-row/solutions/499553/)

---

```
impl Solution {
    pub fn find_words(words: Vec<String>) -> Vec<String> {
        let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
        
        words.into_iter()
            .filter(|s| {
                rows.iter()
                    .fold(false, |b, &row| {
                        b || s.to_lowercase().chars().all(|c| row.contains(c))
                    })
            }).collect()
    }
}
```