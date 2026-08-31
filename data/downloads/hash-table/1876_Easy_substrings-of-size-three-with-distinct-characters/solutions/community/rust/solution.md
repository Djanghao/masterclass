# Rust 0ms solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1239445/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1239445/)

---

```
impl Solution {
    pub fn count_good_substrings(s: String) -> i32 {
        let sb = s.as_bytes();
        sb.iter().enumerate().skip(2).fold(0, |res, (ind, b)| {
            res + (*b != sb[ind - 1] && *b != sb[ind - 2] && sb[ind - 1] != sb[ind - 2]) as i32
        })
    }
}
```