# Rust solution

**Author:** BigMih
**Votes:** 27
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/1975028/](https://leetcode.com/problems/valid-anagram/solutions/1975028/)

---

Solution with ```HashMap``` and ```chars``` can be used if the inputs contain Unicode characters.
For lowercase English letters, we can use `Vec` and `bytes` - this is a much faster solution.
```
impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut map = std::collections::HashMap::new();
        s.chars().for_each(|c| *map.entry(c).or_insert(0) += 1);
        t.chars().for_each(|c| *map.entry(c).or_insert(0) -= 1);
        map.into_values().all(|v| v == 0)
    }
}
```