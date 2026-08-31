# [Rust] Learn Rust Everyday

**Author:** Yushi_Lu
**Votes:** 1
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/502373/](https://leetcode.com/problems/to-lower-case/solutions/502373/)

---

```
  pub fn to_lower_case(str: String) -> String {
        let res: String = str.chars().map(|c| {
            if c <= 'Z' && c >= 'A'{
                ((c as u8) + ('a' as u8) - ('A' as u8)) as char
            } else {
                c
            }
        }).collect();
        res
    }
}
```