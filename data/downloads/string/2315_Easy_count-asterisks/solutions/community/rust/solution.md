# Rust one-liner

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/2200493/](https://leetcode.com/problems/count-asterisks/solutions/2200493/)

---

Two similar versions
```
impl Solution {
    pub fn count_asterisks(s: String) -> i32 {
        s.split('|')
            .enumerate()
            .filter(|&(i, _)| i % 2 == 0)
            .flat_map(|(_, s)| s.chars())
            .filter(|&c| c == '*')
            .count() as _
    }
}
```

```
impl Solution {
    pub fn count_asterisks(s: String) -> i32 {
        s.split('|')
            .enumerate()
            .filter_map(|(i, s)| if i % 2 == 0 { Some(s.chars()) } else { None })
            .flatten()
            .filter(|&c| c == '*')
            .count() as _
    }
}
```