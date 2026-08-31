# rust iterators

**Author:** zakharovvi
**Votes:** 4
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/1662959/](https://leetcode.com/problems/license-key-formatting/solutions/1662959/)

---

```
impl Solution {
    pub fn license_key_formatting(s: String, k: i32) -> String {
        s
            .to_ascii_uppercase()
            .replace("-", "")
            .as_bytes()
            .rchunks(k as usize)
            .rev()
            .map(|x| String::from_utf8_lossy(x))
            .collect::<Vec<_>>()
            .join("-")
    }
}
```