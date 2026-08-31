# Rust solution

**Author:** BigMih
**Votes:** 6
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/1166125/](https://leetcode.com/problems/goal-parser-interpretation/solutions/1166125/)

---

```
impl Solution {
    pub fn interpret(command: String) -> String {
        let mut res = String::new();
        let mut prev = ' ';

        for c in command.chars() {
            match (c, prev) {
                ('G', _) => res.push(c),
                (')', '(') => res.push('o'),
                (')', 'l') => res.push_str("al"),
                _ => prev = c,
            }
        }
        
        res
    }
}
```