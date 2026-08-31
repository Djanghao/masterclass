# 736: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 4
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/4190523/](https://leetcode.com/problems/parse-lisp-expression/solutions/4190523/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The solution uses a recursive approach to evaluate the expression. Here's how it's structured:

Parsing the expression: Split the given expression into its constituent parts or tokens.
Evaluating the expression: Recursively process the expression based on the type of operation (add, multiply, or let).

Objective: Split the string e into individual tokens.
How: By checking the number of open and close parentheses. We only split on spaces that are outside of any nested expression.

```
def parse(e: str) -> list[str]:
    tokens, s, parenthesis = [], '', 0

    for c in e:
        if c == '(':
            parenthesis += 1
        elif c == ')':
            parenthesis -= 1
            
        if parenthesis == 0 and c == ' ':
            tokens.append(s)
            s = ''
        else:
            s += c

    if s: 
        tokens.append(s)
    
    return tokens
```
Objective: Evaluate the string expression e given its current variable scope prevScope.
How:
If e is a number or a single variable, return its value.
If e is an "add" or "multiply" operation, recursively evaluate its operands.
If e is a "let" operation, update the current variable scope and evaluate the last expression in its body.

```
def evaluate_expression(e: str, prevScope: dict) -> int:
    if e[0].isdigit() or e[0] == '-':
        return int(e)
    if e in prevScope:
        return prevScope[e]

    scope = prevScope.copy()
    nextExpression = e[e.index(' ') + 1:-1]
    tokens = parse(nextExpression)

    if e[1] == 'a':
        return evaluate_expression(tokens[0], scope) + evaluate_expression(tokens[1], scope)
    if e[1] == 'm':
        return evaluate_expression(tokens[0], scope) * evaluate_expression(tokens[1], scope)

    for i in range(0, len(tokens) - 2, 2):
        scope[tokens[i]] = evaluate_expression(tokens[i + 1], scope)

    return evaluate_expression(tokens[-1], scope)
```
Kick off the recursive evaluation with an empty scope.
```
return evaluate_expression(expression, {})
```

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```
class Solution:
    def evaluate(self, expression: str) -> int:

        def parse(e: str) -> list[str]:
            tokens, s, parenthesis = [], '', 0

            for c in e:
                if c == '(':
                    parenthesis += 1
                elif c == ')':
                    parenthesis -= 1
                    
                if parenthesis == 0 and c == ' ':
                    tokens.append(s)
                    s = ''
                else:
                    s += c

            if s: 
                tokens.append(s)
            
            return tokens

        def evaluate_expression(e: str, prevScope: dict) -> int:
            if e[0].isdigit() or e[0] == '-':
                return int(e)
            if e in prevScope:
                return prevScope[e]

            scope = prevScope.copy()
            nextExpression = e[e.index(' ') + 1:-1]
            tokens = parse(nextExpression)

            if e[1] == 'a':
                return evaluate_expression(tokens[0], scope) + evaluate_expression(tokens[1], scope)
            if e[1] == 'm':
                return evaluate_expression(tokens[0], scope) * evaluate_expression(tokens[1], scope)

            for i in range(0, len(tokens) - 2, 2):
                scope[tokens[i]] = evaluate_expression(tokens[i + 1], scope)

            return evaluate_expression(tokens[-1], scope)

        return evaluate_expression(expression, {})
```