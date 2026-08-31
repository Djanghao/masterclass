# Rust solution with iterator

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/5706127/](https://leetcode.com/problems/parse-lisp-expression/solutions/5706127/)

---

The `(let` syntax make the logic much more complicated that the function `eval_let` ends up quite large.
# Code
```rust []
use std::collections::HashMap;
use std::iter::Peekable;

impl Solution {
    pub fn evaluate(expression: String) -> i32 {
        let mut stack = Vec::<HashMap<String, i32>>::new();
        Self::eval(&mut expression.chars().peekable(), &mut stack)
    }

    fn eval(bytes: &mut Peekable<impl Iterator<Item=char>>,
    stack: &mut Vec<HashMap<String, i32>>) -> i32 {
        match bytes.next() {
            Some('(') => {
                let val = match bytes.next() {
                    Some('a') => {
                        bytes.next();
                        bytes.next();
                        bytes.next(); // ad(space)
                        let val1 = Self::eval(bytes, stack);
                        let val2 = Self::eval(bytes, stack);
                        val1 + val2
                    }
                    Some('m') => {
                        bytes.next();
                        bytes.next();
                        bytes.next();
                        bytes.next(); // ult(space)
                        let val1 = Self::eval(bytes, stack);
                        let val2 = Self::eval(bytes, stack);
                        val1 * val2
                    }
                    Some('l') => {
                        bytes.next();
                        bytes.next();
                        bytes.next(); // et(space)
                        Self::eval_let(bytes, stack)
                    }
                    opt => unreachable!("invalid expression: {:?}", opt),
                };
                bytes.next(); // (space)
                val
            }
            Some('-') => Self::read_i32(bytes, 0, -1),
            Some(ch) if ch.is_ascii_digit() => 
                Self::read_i32(bytes, ch.to_digit(10).unwrap() as i32, 1),
            Some(ch) if ch.is_ascii_alphabetic() =>
                Self::read_var(bytes, ch.to_string(), stack),
            Some(ch) => unreachable!("invalid char: {}", ch),
            None => unreachable!("unexpected EOS"),
        }
    }

    fn eval_let(bytes: &mut Peekable<impl Iterator<Item=char>>,
    stack: &mut Vec<HashMap<String, i32>>) -> i32 {
        stack.push(HashMap::new());
        let ans = loop {
            match bytes.peek() {
                Some(ch) if ch.is_ascii_alphabetic() => {
                    let mut name = String::new();
                    let opt = loop {
                        match bytes.next() {
                            Some(')') => match stack.last().unwrap().get(&name) {
                                Some(&val) => break Some(val),
                                None => unreachable!("var {} not found!", name),
                            }
                            Some(' ') => {
                                let val = Self::eval(bytes, stack);
                                stack.last_mut().unwrap().insert(name, val);
                                break None;
                            }
                            Some(ch) => name.push(ch),
                            None => unreachable!("unexpected EOS"),
                        }
                    };
                    if let Some(val) = opt {
                        break val;
                    }
                }
                Some(_) => break Self::eval(bytes, stack),
                None => unreachable!("unexpected EOS"),
            }
        };
        stack.pop();
        ans
    }

    fn read_var(bytes: &mut Peekable<impl Iterator<Item=char>>,
    mut name: String, stack: &Vec<HashMap<String, i32>>) -> i32 {
        loop {
            if let Some(ch) = bytes.next() {
                if ch.is_ascii_alphanumeric() {
                    name.push(ch);
                    continue;
                }
            }
            for hash in stack.iter().rev() {
                if let Some(&val) = hash.get(&name) {
                    return val;
                }
            }
            unreachable!("var {} not found!", name)
        }
    }

    fn read_i32(bytes: &mut Peekable<impl Iterator<Item=char>>,
    mut val: i32, parity: i32) -> i32 {
        loop {
            if let Some(ch) = bytes.next() {
                if let Some(x) = ch.to_digit(10) {
                    val = val * 10 + x as i32;
                    continue;
                }
            }
            break val * parity;
        }
    }
}
```