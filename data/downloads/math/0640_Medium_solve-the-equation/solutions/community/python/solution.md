# Python 3 | Simulation, Math | Explanations

**Author:** idontknoooo
**Votes:** 2
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/1318772/](https://leetcode.com/problems/solve-the-equation/solutions/1318772/)

---

### Explanation
- Intuition: Simulation seems good enough, why not just simulate the process? 
- Simulate following process:
	- Find factor of `x (x1`) and constant (`c1`) on the left side of the equation
	- Find factor of `x (x1)` and constant (`c2`) on the right side of the equation
	- Get result based on description and Mathematics
- See comments below for more detail
### Implementation
```
class Solution:
    def solveEquation(self, equation: str) -> str:
        left, right = equation.split('=')
        def simplify(s):
            x_cnt, c_cnt, cur, sign = 0, 0, '', 1
            for c in s + '+':             # adding `+` to process the last term of `s`, since sign is a trigger 
                if c in '-+':             # use sign as a trigger
                    if not cur:           # handle edge case: leading `-` (e.g. "-x=-1")
                        sign = -1 if s[0] == '-' else 1
                    elif cur[-1] == 'x':  # if `cur` is a term of `x`
                        x_cnt += sign * (int(cur[:-1]) if cur[:-1] else 1)
                    else:                 # if `cur` is a constant term
                        c_cnt += sign * int(cur)
                    sign, cur = 1 if c == '+' else -1, '' # get new `sign` & reset `cur`
                else: cur += c            # other situation, append char to `cur`
            return x_cnt, c_cnt           # return #_of_x and #_of_constant 
        (x1, c1), (x2, c2) = simplify(left), simplify(right)
        if c2-c1 == x1-x2 == 0: return 'Infinite solutions'
        elif x1-x2 == 0: return 'No solution'
        else: return f'x={(c2-c1)//(x1-x2)}'
```