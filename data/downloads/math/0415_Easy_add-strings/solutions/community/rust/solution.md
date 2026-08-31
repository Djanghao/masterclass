# Rust solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/add-strings/solutions/1392743/](https://leetcode.com/problems/add-strings/solutions/1392743/)

---

```rust
impl Solution {
    pub fn add_strings(num1: String, num2: String) -> String {
        let mut num1 = num1.bytes().rev();
        let mut num2 = num2.bytes().rev();
        let mut v = Vec::with_capacity(num1.len().max(num2.len()) + 1);
        let mut carry = false;
        loop {
            let n1 = num1.next().map(|u| u - b'0');
            let n2 = num2.next().map(|u| u - b'0');
            if n1.is_none() && n2.is_none() && !carry {
                break;
            }
            let d = if carry { 1 } else { 0 } + n1.unwrap_or_default() + n2.unwrap_or_default();
            carry = d > 9;
            v.push((b'0' + d % 10) as char);
        }
        v.iter().rev().collect()
    }
}
```