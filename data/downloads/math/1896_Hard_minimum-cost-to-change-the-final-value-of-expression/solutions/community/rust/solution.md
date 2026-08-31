# Reverse Polish Notation conversion and evaluation

**Author:** base0x10
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/3580526/](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/3580526/)

---

# Intuition

Just as there's a set of rules for evaluating the result of binary expressions like `a|b`, we can find the rules for determining the minimum cost to flip the value of `a|b`.  These rules depend on the cost to flip the value `a` or `b`, as well as, sometimes, the values of `a` and `b`.  

Because at least some of the time, we\u2019ll need to evaluate the entire expression tree, we should find a fast/simple/correct way to evaluate the entire expression.  

Using reverse polish notation, we get an expression that preserves the same order that subexpressions are evaluated, but with a straightforward evaluation procedure.

# Approach

Convert the expression into reverse polish notation.  This expression will only contain our operators `|` and `&` and the literals `0` and `1`.  We could use a string here, but instead I use a vec of `Symbols` to make things easier to follow later.

Reverse polish notation conversion could be done by parsing the expression into a tree, and then running a post-order traversal on the tree.  The Shunting Yards algorithm runs a single pass over the input, keeping a stack of the left-parenthesis and operators that we\u2019ve seen but not yet written to the output.  

> Note: This stack is the same as you would get if you first constructed a parse tree, and kept a stack of parents through a post-order traversal.


Next we need a function to evaluate each expression, both in terms of the result value, and the cost to flip that result value.  The result truth table is simple, but we need to figure out the rules for combining minimum costs.  These aren\u2019t too difficult:
* Changing a literal from `0` to `1` or `1` to `0` always costs 1.
* For `0&1`, changing the operator will change the result, so the cost is 1.
* For `a&b`, if both `a` and `b` are `1`, we can change either value, so we take the minimum cost between `a` and `b`.
* For `a&b`, if they are both `0`, we\u2019ll need to either change both, or change the operator and one of the value.  So we take the minimum cost between `a` and `b` plus one to change the operator. 

The logic for OR is _nearly_ identical.  

To finish the program, we just evaluate the expression from left to right.  We keep a stack of literals that we haven\u2019t evaluated along with the cost to flip each one.  When we are finished, the stack has a single binary value, and a single minimum cost to flip it which we return.  

# Complexity
- Time complexity:
$$O(N)$$ where $$N$$ is the number of symbols in the input expression.  

The shunting yards conversion into RPN processes does a constant amount of work for each symbol in the input.  A symbol might go directly into the output, or it might first be placed in the operators stack, but once it leaves the operators stack, it is never touched again.  

A similar logic applies to evaluating the RPN expression. We put each literal into the stack only once, and evaluate it only once.  We do produce and operate on intermediary results.  But there is only one intermediary result per operator symbol.

- Space complexity:
$$O(N)$$ where $$N$$ is the number of symbols in the input expression.  

Both the RPN conversion and the evaluation steps have multiple vectors that are used as stacks.  However none of these vectors can have more than one element present at any time corresponding to one symbol in the input.  


# Code
```
impl Solution {
    pub fn min_operations_to_flip(expression: String) -> i32 {
        // Convert to reverse polish notation with only symbols 0, 1, |, &
        let rpn = shunting_yards(expression);

        // Evaluate the rpn expression
        // Use typical binary logic rules for the value part
        // but also special rules to propagate the minimum cost to change each value
        // 
        // e.g. for the expression "a_sub_expr | b_sub_expr"
        // if a != b the cost is one to change '|' => '&'
        // if a == b == 0 the cost is min(a, b) since we can change either side
        // etc...
        let mut eval_stack = vec![];
        for e in rpn.iter() {
            match e {
                Symbol::Literal(l) => {
                    eval_stack.push((*l, 1));
                }
                Symbol::And | Symbol::Or => {
                    let ((a, a_cost), (b, b_cost)) =
                        (eval_stack.pop().unwrap(), eval_stack.pop().unwrap());
                    let value = eval(*e, a, b);
                    let cost = eval_cost(*e, a, b, a_cost, b_cost);
                    eval_stack.push((value, cost));
                }
            }
        }
        let (_, total) = eval_stack.pop().unwrap();
        return total;
    }
}

fn eval(op: Symbol, a: bool, b: bool) -> bool {
    match op {
        Symbol::Or => a || b,
        Symbol::And => a && b,
        _ => panic!("Not a valid symbol to treat as an operator"),
    }
}

fn eval_cost(op: Symbol, a: bool, b: bool, a_cost: i32, b_cost: i32) -> i32 {
    if a != b {
        return 1;
    };
    let min_cost = if a_cost < b_cost { a_cost } else { b_cost };
    match (op, a) {
        (Symbol::And, true) => min_cost,
        (Symbol::And, false) => min_cost + 1,
        (Symbol::Or, true) => min_cost + 1,
        (Symbol::Or, false) => min_cost,
        _ => panic!("Not a valid symbol to treat as an operator"),
    }
}

#[derive(Clone, Copy)]
enum Symbol {
    Literal(bool),
    And,
    Or,
}

// Convert into Reverse Polish Notation
fn shunting_yards(expression: String) -> Vec<Symbol> {
    let mut ops = vec![];
    let mut out = vec![];
    let mut input = expression.chars();

    while let Some(e) = input.next() {
        match e {
            '0' => {
                out.push(Symbol::Literal(false));
            }
            '1' => {
                out.push(Symbol::Literal(true));
            }
            '|' | '&' => {
                while ops.last().filter(|&e| e != &'(').is_some() {
                    let op = match ops.pop() {
                        Some('|') => Symbol::Or,
                        Some('&') => Symbol::And,
                        _ => panic!("Invalid symbol in operator stream"),
                    };
                    out.push(op);
                }
                ops.push(e);
            }
            '(' => {
                ops.push(e);
            }
            ')' => {
                // Take values from operator stack onto output stack
                // Until operator stack has a left paran at the top
                while ops.last() != Some(&'(') {
                    let op = match ops.pop() {
                        Some('|') => Symbol::Or,
                        Some('&') => Symbol::And,
                        _ => panic!("Invalid symbol in operator stream"),
                    };
                    out.push(op);
                }
                // Discard left paran to match current right paran
                ops.pop();
            }
            _ => panic!("Invalid character in input expression"),
        }
    }
    for e in ops.into_iter() {
        let op = match e {
            '|' => Symbol::Or,
            '&' => Symbol::And,
            _ => panic!("Invalid symbol in operator stream"),
        };
        out.push(op);
    }
    return out;
}
```