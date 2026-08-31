# Rust | One-liner

**Author:** wallicent
**Votes:** 2
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/2735340/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/2735340/)

---

```
impl Solution {
    pub fn have_conflict(event1: Vec<String>, event2: Vec<String>) -> bool {
        event1[0] <= event2[1] && event1[1] >= event2[0]
    }
}
```