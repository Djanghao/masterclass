# Rust | Simple solution | 1 ms

**Author:** pravesa
**Votes:** 0
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/3171978/](https://leetcode.com/problems/camelcase-matching/solutions/3171978/)

---

# Code
```
impl Solution {
    pub fn camel_match(queries: Vec<String>, pattern: String) -> Vec<bool> {
        let pattern = pattern.as_bytes();

        queries.into_iter().map(|query| {
            let query = query.as_bytes();
            let (mut p, mut q) = (0, 0);

            for &q in query {
                if p < pattern.len() && pattern[p] == q {
                    p += 1;
                } else if q < b'a' {
                    return false;
                }
            }
            p == pattern.len()
        }).collect()
    }
}
```