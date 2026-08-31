# Rust

**Author:** Mohsennz
**Votes:** 11
**Link:** [https://leetcode.com/problems/simplify-path/solutions/1671723/](https://leetcode.com/problems/simplify-path/solutions/1671723/)

---

```rust
    pub fn simplify_path(path: String) -> String {
        format!(
            "/{}",
            path.split('/')
                .filter(|&x| x != "" && x != ".")
                .fold(vec![], |mut acc, item| {
                    if item == ".." { acc.pop(); } 
                    else { acc.push(item); }
                    acc
                })
                .join("/")
        )
    }
```