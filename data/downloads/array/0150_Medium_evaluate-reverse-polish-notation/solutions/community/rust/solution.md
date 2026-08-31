# Rust simple solution

**Author:** sugyan
**Votes:** 10
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/490442/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/490442/)

---

```rust
impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut stack: Vec<i32> = Vec::new();
        for token in tokens.iter() {
            if let Ok(n) = token.parse() {
                stack.push(n);
            } else {
                let rhs = stack.pop().unwrap();
                let lhs = stack.pop().unwrap();
                match token.as_str() {
                    "+" => stack.push(lhs + rhs),
                    "-" => stack.push(lhs - rhs),
                    "*" => stack.push(lhs * rhs),
                    "/" => stack.push(lhs / rhs),
                    _ => {}
                }
            }
        }
        stack[0]
    }
}
```

more shortly:

```rust
impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        tokens.iter().fold(Vec::new(), |mut stack, x| {
            if let Ok(x) = x.parse() {
                stack.push(x);
            } else if let (Some(rhs), Some(lhs)) = (stack.pop(), stack.pop()) {
                stack.push(match x.as_str() {
                    "+" => lhs + rhs,
                    "-" => lhs - rhs,
                    "*" => lhs * rhs,
                    "/" => lhs / rhs,
                    _ => unreachable!(),
                })
            }
            stack
        })[0]
    }
}
```