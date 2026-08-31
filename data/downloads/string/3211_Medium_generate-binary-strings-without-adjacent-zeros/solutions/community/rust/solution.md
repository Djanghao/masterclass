# recursion

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/6011755/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/6011755/)

---

```rust []
impl Solution {
    pub fn f(n: i32) -> Vec<String> {
        match n {
            1 => vec!["0".to_string(), "1".to_string()],
            _ => {
                let mut r = vec![];
                for x in &Self::f(n-1) {
                    let mut y = x.clone();
                    y.push('1');
                    r.push(y);
                    if &x[x.len()-1..] == "1" {
                        y = x.clone();
                        y.push('0');
                        r.push(y)
                    }
                }
                r
                }
        }
    }
    
    pub fn valid_strings(n: i32) -> Vec<String> {
        Self::f(n)
    }
}
```