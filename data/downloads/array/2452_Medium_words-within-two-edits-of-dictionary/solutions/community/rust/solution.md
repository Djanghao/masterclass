# Rust

**Author:** aynp
**Votes:** 0
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/4456823/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/4456823/)

---

# Code
```
impl Solution {
    fn calculate_dist(s1: &str, s2: &str) -> usize {
        let mut dist = 0;
        for (c1, c2) in s1.chars().zip(s2.chars()) {
            if c1 != c2 {
                dist += 1;
            }
        }
        dist
    }

    pub fn two_edit_words(queries: Vec<String>, dictionary: Vec<String>) -> Vec<String> {
        queries
            .into_iter()
            .filter(|s| {
                dictionary
                    .iter()
                    .find(|d| {
                        let dist = Solution::calculate_dist(s, d);
                        dist <= 2
                    })
                    .is_some()
            })
            .collect()
    }
}
```