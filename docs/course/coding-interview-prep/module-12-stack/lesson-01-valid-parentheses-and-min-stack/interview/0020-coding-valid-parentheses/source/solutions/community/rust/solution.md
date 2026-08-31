# Rust 0ms

**Author:** ajcarvajal
**Votes:** 77
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/500491/](https://leetcode.com/problems/valid-parentheses/solutions/500491/)

---

```
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack = Vec::new();
        for i in s.chars() {
            match i {
                '{' => stack.push('}'),
                '(' => stack.push(')'),
                '[' => stack.push(']'),
                '}'|')'|']' if Some(i) != stack.pop() => return false,
                _ => (),
            }
        }   
        return stack.is_empty();
    }
}
```