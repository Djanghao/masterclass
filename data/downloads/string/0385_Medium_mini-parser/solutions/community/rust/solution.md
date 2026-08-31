# 0ms with simple recursive code

**Author:** Tomyyy-1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/mini-parser/solutions/5825434/](https://leetcode.com/problems/mini-parser/solutions/5825434/)

---



# Code
```rust []
impl Solution {
    pub fn deserialize(s: String) -> NestedInteger {
        if s.starts_with("[") {
            let mut parts = Vec::new();
            let mut acc = String::new();
            let mut count = 0;
            for c in s
                .strip_prefix("[").unwrap()
                .strip_suffix("]").unwrap()
                .chars() {
                    if count == 0 && c == ',' {
                        parts.push(acc);
                        acc = String::new();
                        continue;   
                    }
                    match c {
                        '[' => count += 1,
                        ']' => count -= 1,
                        _ => {}
                    }
                    acc.push(c);
            }
            parts.push(acc);
                
            NestedInteger::List( parts.iter()
                .filter(|s| !s.is_empty())
                .map(|s| Self::deserialize(s.to_string()))
                .collect())
        } else {
            NestedInteger::Int(s.parse().unwrap())
        }
    }
}
```