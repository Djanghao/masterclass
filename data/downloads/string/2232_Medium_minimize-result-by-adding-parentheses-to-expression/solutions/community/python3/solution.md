# Python Solution using 2 Pointers Brute Force

**Author:** anCoderr
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1931004/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1931004/)

---

*Since the given maximum size is only 10, we can easily cover all possible options without TLE. Thus we use 2 pointers to cover all options.*

**STEPS**
1. Traverse two pointers `l` & `r`. **L** pointer goes from 0 to **plus_index** and **R** pointer goes from **plus_index+1** to **N**. **plus_index** is the index of '+' in the expression. The **L** pointer is the position of '(' and **R** is for ')'.
2. Use f string formatting to generate a expression. 
3. Use evaulate function to get the result of the following expression.
4. If the new result is better than the old one, then update otherwise continue.
 
**NOTE** 
\u27A1\uFE0F**The `evaluate` function basically converts "23(44+91)2" into  "23 X (44+91) X 2" without ever having any * sign in the edges(used strip methods for that). `eval()` is a library function that evaluates a mathematical expression given in string form.**
\u27A1\uFE0F **`ans` is a list of 2 values, first is the smalles result of any expression and second is the expression itself.**

**CODE**
```
class Solution:
    def minimizeResult(self, expression: str) -> str:
        plus_index, n, ans = expression.find('+'), len(expression), [float(inf),expression] 
        def evaluate(exps: str):
            return eval(exps.replace('(','*(').replace(')', ')*').lstrip('*').rstrip('*'))
        for l in range(plus_index):
            for r in range(plus_index+1, n):
                exps = f'{expression[:l]}({expression[l:plus_index]}+{expression[plus_index+1:r+1]}){expression[r+1:n]}'
                res = evaluate(exps)
                if ans[0] > res:
                    ans[0], ans[1] = res, exps
        return ans[1]
```