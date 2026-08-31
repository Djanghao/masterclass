# Rust with match and filter

**Author:** hablaba
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/1210918/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/1210918/)

---

Pretty simple:

```
pub fn count_matches(items: Vec<Vec<String>>, rule_key: String, rule_value: String) -> i32 {
        let keyIndex = match &rule_key[..] {
            "type" => 0,
            "color" => 1,
            "name" => 2,
            _ => return 0
        };

        items
            .iter()
            .filter(|item| item[keyIndex] == rule_value)
            .count() as i32
    }
	```