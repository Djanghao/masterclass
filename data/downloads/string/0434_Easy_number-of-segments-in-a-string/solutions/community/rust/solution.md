# Rust one line 0ms

**Author:** dlope073
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/1335268/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/1335268/)

---

```
impl Solution {
    pub fn count_segments(s: String) -> i32 {
        s.split(' ').filter(|s| s != &"").count() as i32
    }
}
```