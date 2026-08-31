# Rust 100% 100%

**Author:** kryvokrysenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/1141959/](https://leetcode.com/problems/basic-calculator-iv/solutions/1141959/)

---

I honestly don't know why I did this, but this is a solution in Rust. I spent around 2.5 hours back to back on this.
I don't know parser theory, so some terminology may be not accurate.

The only thing I enjoyed is parsing stream using Rust peek-able iterators. I just love them, they make writing parser almost look like cheating. Look at `parse_tokens`, `parse_member`, `parse_operator` and `parse_spaces` - this is where all fun parsing and tokenization happens. Rest is just stupid grinding to get the math right.

```
use std::collections::HashMap;
use core::iter::Peekable;
use std::hash::{Hash, Hasher};
use std::cmp::Reverse;

impl Solution {
    pub fn basic_calculator_iv(expression: String, evalvars: Vec<String>, evalints: Vec<i32>) -> Vec<String> {
        let mut constants = HashMap::new();
        
        for (name, value) in evalvars.into_iter().zip(evalints.into_iter()) {
            constants.insert(name, value);
        }
        
        let mut iter = expression.chars().peekable();
        let mut it = &mut iter;

        
        let tokens = parse_tokens(it);
        
        let eval_result = eval(tokens.as_slice(), &constants);
        
        eval_result.output()
    }
}

fn parse_tokens<I: Iterator<Item = char>>(it: &mut Peekable<I>) -> Vec<Token> {
    // variable operator variable operator variable
    
    
    let mut tokens = vec![];
    
    let member = parse_member(it).unwrap();
    tokens.push(member);

    while let Some(op) = parse_operator(it) {
        tokens.push(Token::Op(op));
        let member = parse_member(it).unwrap();
        tokens.push(member);
    } 

    tokens
}

fn parse_member<I: Iterator<Item = char>>(it: &mut Peekable<I>) -> Option<Token> {
    parse_spaces(it);

    if it.peek().copied() == Some('(') {
        it.next();
        let tokens = parse_tokens(it);
        Some(Token::Group(tokens))
    } else {
        let mut variable = String::new();
        while let Some(c) = it.peek().copied() {
            if c.is_alphanumeric() {
                variable.push(c);
                it.next();
            } else {
                break;
            }
        }

        if variable.is_empty() {
            None
        } else {
            Some(Token::Var(variable))
        }
    }
}

fn parse_operator<I: Iterator<Item = char>>(it: &mut Peekable<I>) -> Option<char> {
    parse_spaces(it);
    
    if it.peek().copied() == Some(')') {
        it.next();
        None
    } else {
        if let Some(c) = it.peek().copied() {
            if c == '+' || c == '-' || c== '*' {
                it.next();
                Some(c)
            } else {
                None
            }
        } else {
            None
        }
    }
}

fn parse_spaces<I: Iterator<Item = char>>(it: &mut Peekable<I>) {
    while it.peek().copied() == Some(' ') {
        it.next();
    }
}

fn eval(tokens: &[Token], constants: &HashMap<String, i32>) -> Polynomial {
    if tokens.len() == 1 {
        eval_single(&tokens[0], constants)
    } else {
        let mut members = vec![];
        let mut operators = vec![];
        
        for i in 0..tokens.len() {
            if i % 2 == 0 {
                members.push(eval_single(&tokens[i], constants));
            } else {
                if let Token::Op(c) = tokens[i] {
                    operators.push(c);
                } else {
                    panic!()
                }
            }
        }

        let mut new_members = vec![];
        let mut new_operators = vec![];
        
        for op in ['*', '-', '+'].into_iter() {
            {
                let mut it_mem = members.drain(..);
                let mut it_op = operators.drain(..);

                new_members.push(it_mem.next().unwrap());

                while let (Some(mem), Some(c)) = (it_mem.next(), it_op.next()) {
                    if c == *op {
                        let a = new_members.pop().unwrap();
                        let b = mem;

                        let res = match op {
                            '*' => Polynomial::mult(&a, &b),
                            '+' => Polynomial::add(&a, &b, false),
                            '-' => Polynomial::add(&a, &b, true),
                            _ => panic!()
                        };

                        new_members.push(res);
                    } else {
                        new_members.push(mem);
                        new_operators.push(c);
                    }

                }
            }

            std::mem::swap(&mut members, &mut new_members);
            std::mem::swap(&mut operators, &mut new_operators);

        }

        assert!(operators.is_empty());
        assert!(members.len() == 1);

        members.into_iter().next().unwrap()

    }
}

fn eval_single(token: &Token, constants: &HashMap<String, i32>) -> Polynomial {
    match token {
        Token::Var(variable) => {
            let constant = constants.get(variable).copied();
            let num: Option<i32> = variable.parse().ok();
            
            let mut poly = Polynomial::new();
            
            if let Some(num) = num.or(constant) {
                let mono = Monomial::new();
                poly.set_member(mono, num);
            } else {
                let mut mono = Monomial::new();
                mono.set_member(variable.clone(), 1);
                poly.set_member(mono, 1);
            }
            
            poly
        },
        Token::Group(tokens) => {
            eval(tokens.as_slice(), constants)
        },
        _ => { panic!() }
    }
}

#[derive(Debug, Eq, PartialEq, Clone)]
struct Monomial{
    members: HashMap<String, i32>,
}


impl Monomial {
    fn new() -> Self {
        Self {
            members: HashMap::new(),
        }
    }
    
    fn set_member(&mut self, name: String, coefficient: i32) {
        if coefficient == 0 {
            return;
        }

        let ret = self.members.insert(name, coefficient);
        assert!(ret.is_none());
    }
    
    fn multiply(m1: &Monomial, m2: &Monomial) -> Self {
        let mut result = m1.clone();
        
        for (variable, coefficient) in m2.members.iter() {
            let cnt = result.members.entry(variable.clone()).or_insert(0);
            *cnt+= coefficient;
        }
        
        result
    }
    
    fn output(&self) -> (i32, Vec<String>, String) {
        let mut degree = 0;
        let mut vars = vec![];
        let mut result = String::new();
        
        let mut members: Vec<_> = self.members.iter().collect();
        members.sort();
        
        for (var, coeff) in members {
            for _ in 0..*coeff {
                vars.push(var.clone());

                result.push('*');
                result.push_str(var);
            }
            degree += coeff;
        }
        
        (degree, vars, result)
    }

}

impl Hash for Monomial {
    fn hash<H: Hasher>(&self, state: &mut H) {
        let mut pairs: Vec<_> = self.members.iter().collect();
        pairs.sort();
        
        for (k,v) in pairs {
            k.hash(state);
            v.hash(state);
        }
    }
}



#[derive(Debug, Clone)]
struct Polynomial {
    members: HashMap<Monomial, i32>,
}

impl Polynomial {
    fn new() -> Self {
        Self {
            members: HashMap::new(),
        }
    }
    
    fn set_member(&mut self, member: Monomial, coefficient: i32) {
        if coefficient == 0 {
            return;
        }
        let ret = self.members.insert(member, coefficient);
        assert!(ret.is_none());
    }
    
    fn add(p1: &Polynomial, p2: &Polynomial, subtract: bool) -> Polynomial {
        let mut result = p1.clone();
        
        let mut op = if subtract {-1} else {1};
        
        for (mono, coefficient) in p2.members.iter() {
            let cnt = result.members.entry(mono.clone()).or_insert(0);
            *cnt+= op * coefficient;
            
            if *cnt == 0 {
                result.members.remove(mono);
            }
        }
        
        result
    }
    
    fn mult(p1: &Polynomial, p2: &Polynomial) -> Polynomial {
        let mut result = Self::new();
        
        let p1: Vec<_> = p1.members.iter().collect();
        let p2: Vec<_> = p2.members.iter().collect();
        
        for (m1, coeff1) in p1.iter() {
            for (m2, coeff2) in p2.iter() {
                let m = Monomial::multiply(m1, m2);
                let coeff = *coeff1 * *coeff2;
                
                let mut p = Self::new();
                p.set_member(m, coeff);
                
                result = Self::add(&result, &p, false);
            }
        }
        
        result
    }
    
    fn output(&self) -> Vec<String> {
        let mut parts = vec![];
        
        for (mono, coeff) in self.members.iter() {
            let (degree, vars, mut out) = mono.output();
            out = coeff.to_string() + &out;
            
            parts.push((Reverse(degree), vars, out));
        }
        
        parts.sort();
        
        parts.into_iter().map(|(_, _, out)| out).collect()
    }
}

#[derive(Debug, Eq, PartialEq)]
enum Token {
    Var (String),
    Op(char),
    Group(Vec<Token>)
}
```