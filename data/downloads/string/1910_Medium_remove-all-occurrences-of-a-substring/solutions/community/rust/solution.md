# ✅ Fast Rust Solution

**Author:** erikrios
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5322198/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5322198/)

---

```
impl Solution {
    pub fn remove_occurrences(s: String, part: String) -> String {
        let mut s = s;
        let mut prev = String::new();

        while prev != s {
            prev = s.clone();
            s = s.replacen(&part, "", 1);
        }

        s
    }
}
```