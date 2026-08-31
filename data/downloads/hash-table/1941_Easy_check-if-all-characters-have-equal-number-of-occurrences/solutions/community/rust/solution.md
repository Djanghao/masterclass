# [Rust] early return

**Author:** tarsisexistence
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1654383/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/1654383/)

---

```
impl Solution {
    pub fn are_occurrences_equal(s: String) -> bool {
        let mut map = std::collections::HashMap::new();

        for c in s.chars() {
            *map.entry(c).or_insert(0) += 1;

        }

        let mut prev: Option<&i32> = None;

        for (_, v) in map.iter() {
            if prev.is_some() && prev.unwrap() != v {
                return false;
            }

            prev = Some(v);
        }

        true
    }
}
```