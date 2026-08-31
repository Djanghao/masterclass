# [Python] beats 98% with explanation

**Author:** auwdish
**Votes:** 2
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/667097/](https://leetcode.com/problems/ternary-expression-parser/solutions/667097/)

---

**Basic Idea**
Base Case: for arguments 'T' 'F' '1' '2' ... N return input
Else: Evaluate left or right side of the expression based on T or F

**How do we find inner expressions?**
Same as validate parentheses problem
`?` is same as opening bracket
`:` is same as closing bracket
When question mark counter reaches 0 we have found the matching `:` for the current `?`

```python
class Solution:
    def parseTernary(self, expression: str) -> str:
        if expression.isnumeric() or expression in ('T', 'F'):
            return expression
        
        question_marks = 1
        is_true = expression[0] == 'T'
        
        for i in range(2, len(expression)):
            char = expression[i]
            if char == '?':
                question_marks += 1
            elif char == ':':
                question_marks -= 1
            if question_marks == 0:
                inner_expression = expression[2:i] if is_true else expression[i + 1:]
                return self.parseTernary(inner_expression)
        
        raise ValueError('Invalid Ternary Expression')
```