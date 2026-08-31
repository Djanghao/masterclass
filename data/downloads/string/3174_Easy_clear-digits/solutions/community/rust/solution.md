# simple solution using rust

**Author:** iamdipankarpaul
**Votes:** 0
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5328015/](https://leetcode.com/problems/clear-digits/solutions/5328015/)

---

```
impl Solution {
    pub fn clear_digits(s: String) -> String {
        let mut stack: Vec<char> = Vec::new();
    
    for char in s.chars() {
        if char.is_digit(10) {
            if !stack.is_empty() {
                stack.pop();
            }
        } else {
            stack.push(char);
        }
    }
    
    stack.iter().collect()
    }
}
```