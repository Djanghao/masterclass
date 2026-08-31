# Simple solution (4 lines) using regular expressions

**Author:** jedmeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/3801334/](https://leetcode.com/problems/ternary-expression-parser/solutions/3801334/)

---

# Code
```
function parseTernary(expression: string): string {
    while(expression.length > 1) {
        expression = expression.replace(/([TF])\\?([TF0-9]):([TF0-9])(?!\\?)/, (_, a, t, f) => a === 'T' ? t : f);
    }

    return expression;
};
```