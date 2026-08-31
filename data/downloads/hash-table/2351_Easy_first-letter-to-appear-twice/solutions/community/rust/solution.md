# rust 2 line

**Author:** Sanzenin_Aria
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/3119060/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/3119060/)

---

```
impl Solution {
    pub fn repeated_character(s: String) -> char {
        let mut st = std::collections::HashSet::new();
        s.chars().find(|&c| !st.insert(c)).unwrap()
    }
}
```