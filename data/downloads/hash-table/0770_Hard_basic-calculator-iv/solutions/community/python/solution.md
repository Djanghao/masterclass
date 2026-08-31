# [Python] Using dict & Recursion (100% faster, without additional classes)

**Author:** jtjun
**Votes:** 9
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/1229666/](https://leetcode.com/problems/basic-calculator-iv/solutions/1229666/)

---

**Key idea**
- Representing a parenthese `( )` by a `list`.
	`1 + (2 + 3) -> [1, +, [2, +, 3]]`
- Representing a expression by `dict`.
	`2x + y + 3 -> {x: 2, y: 1, 1: 3}`
- Convert each val to `dict`.
```python
	[x, +, 1, +, [2, * x, +, y] * [x, +, 3, *, z]]
	-> [{x: 1}, +, {1: 1}, [{x: 1}, *, {1: 2}, + {y: 1}], *, [{x: 1}, + {1: 3}, *, {z: 1}]]
```
- Compute two `dict`s to calculate expression. 
 ```python
	[{x: 1}, +, {1: 1}, [{x: 1}, *, {1: 2}, + {y: 1}], *, [{x: 1}, + {1: 3}, *, {z: 1}]] #parenthese first
	-> [{x: 1}, +, {1: 1}, [{x: 2}, + {y: 1}], *, [{x: 1}, + {z: 3}]]  #multiply first
	-> {x:1, 1:1}, +, {x:2, y:1} * {x:1, z:3}]
	-> [{x:1, 1:1}, +, {x*x: 2, x*y:1, x*z: 6, y*z: 3}]
	-> [{x*x: 2, x*y:1, x*z: 6, y*z: 3, x:1, 1:1}}]
```


**1st. mapping `eval` and split the `exprs`.**
Mapping `var` to `int` using dict.
`evmap = dict((v, i) for v, i in zip(evalvars, evalints))`

Split the `exprs` using *stack*.
```python
        def split(i: int,  stack: list) -> int: 
			""" split the exprs using stack and recursion
			"3 * ((2 - 1) + 10)" -> ["3", "*", [["2", "-", "1"], "+", "10"]]
			(A list represents a parenthese.)
			
			@parm
				i: current index of exprs
				stack: current stack to save result
			@return
				i: next index to search
			"""
            while i < len(exprs):
                if exprs[i] == ')': return i
                elif exprs[i] == '(':
                    stack.append([])
                    i = split(i+1, stack[-1]) # return from exprs[i] == ')'
                elif exprs[i] in '+-*':
                    stack.append(exprs[i])
                elif exprs[i] != ' ':
                    if not stack or stack[-1] in '+-*': stack.append('') # for next variable
                    stack[-1] += exprs[i] # '' -> '1' -> '12'
                i += 1
            return i
```

**2nd. Compute each part using `dict`.**
Thanks to second key idea, we can *add* or *multyply* two `expression` easily!
```python
        def add(a: dict, b: dict, sub: bool) -> dict:
			""" Add two expressions, using dict.
			(2x + y + 2) + (-x + 3z) = x +y + 3z + 2
			
			{"x": 2, "y": 1, 1: 2} + {"x": -1, "z": 3}
				-> {"x": 1, "y": 1, "z": 3, 1: 2}
			@parm
				a: a expression
				b: another expression
			@return
				a: result expression
			"""
            for y in b:
                if y not in a: a[y] = 0
                a[y] += b[y] * (-1 if sub else 1)
            return a
```

```python        
        def mul(a: dict, b: dict) -> dict:
			""" Multiply two expressions using dict.
			(2x + y) * (x + 3z) = 2x^2 +xy + 6xz + 3yz
			
			{"x": 2, "y": 1} * {"x":1, "z": 3}
				-> {"x*x": 2, "x*y": 1, "x*z": 6, "y*z": 3}
			@parm
				a: a expression
				b: another expression
			@return
				a: result expression
			"""
            c = defaultdict(int)
            for x, y in product(a.keys(), b.keys()):
                if x == 1 or y == 1: z = x * y
                else: z = '*'.join(sorted((x+'*'+y).split('*')))
                c[z] += a[x] * b[y]
            return c
```

**3rd. Calculate expression.**
- parenthese first. (recursion)
- multiply first.

```python        
        def calc(expr: list) -> dict:
			""" Caclulate expression using dict
			with mul(dict, dict) and add(dict, dcit, bool)
			- convert each val to dict
			["x", "+", "y", "*", "2"] -> [{"x": 1}, "+", {"y": 1}, "*", {1: 2}]
			- multiply two dict
			[{"y": 1}, "*", {1: 2}] -> [{"y": 2}]
			[{"x": 1}, "*", {"y": 2}] -> [{"x*y": 2}]
			- add two dict
			[{"x": 2}, "+", {"x": 3}] -> [{"x": 5}]
			
			@parm
				expr: result of split(int, list)
			@return
				res: flatted dict
			"""
            i = 1
            while i < len(expr):
                if expr[i] == '*': # multiply first
                    expr[i-1:i+2] = [mul(calc([expr[i-1]]), calc([expr[i+1]]))]
                else: i += 2 #odd index is operator.
            while len(expr) > 1:
				# then add (substract)
                expr[0:3] = [add(calc([expr[0]]), calc([expr[2]]), expr[1] == '-')]
            
			#at result, len(expr) == 1
            if isinstance(expr[0], list): return calc(expr[0])
            if isinstance(expr[0], str):
                if expr[0].isdigit(): return {1: int(expr[0])}
                elif expr[0] in evmap: return {1: evmap[expr[0]]}
                return {expr[0]: 1}
            return expr[0] # dict
```

**Final Code**

<img width="720" src="https://assets.leetcode.com/users/images/87f76953-c7b5-4cfb-bdb7-c59d46c45c87_1628596914.680996.png"/>

``` python
from collections import defaultdict
from itertools import product

class Solution:
    def basicCalculatorIV(self, exprs: str, evalvars: List[str], evalints: List[int]) -> List[str]:
        evmap = dict((v, i) for v, i in zip(evalvars, evalints))
		
        def split(i: int, stack: list) -> int:
            while i < len(exprs):
                if exprs[i] == ')': return i
                elif exprs[i] == '(':
                    stack.append([])
                    i = split(i+1, stack[-1]) 
                elif exprs[i] in '+-*':
                    stack.append(exprs[i])
                elif exprs[i] != ' ':
                    if not stack or stack[-1] in '+-*': stack.append('')
                    stack[-1] += exprs[i]
                i += 1
            return i
        
        def calc(expr: list) -> dict:
            i = 1
            while i < len(expr):
                if expr[i] == '*':
                    expr[i-1:i+2] = [mul(calc([expr[i-1]]), calc([expr[i+1]]))]
                else: i += 2
            while len(expr) > 1:
                expr[0:3] = [add(calc([expr[0]]), calc([expr[2]]), expr[1] == '-')]
            
            if isinstance(expr[0], list): return calc(expr[0])
            if isinstance(expr[0], str):
                if expr[0].isdigit(): return {1: int(expr[0])}
                elif expr[0] in evmap: return {1: evmap[expr[0]]}
                return {expr[0]: 1}
            return expr[0]
        
        def mul(a: dict, b: dict) -> dict:
            c = defaultdict(int)
            for x, y in product(a.keys(), b.keys()):
                if x == 1 or y == 1: z = x * y
                else: z = '*'.join(sorted((x+'*'+y).split('*')))
                c[z] += a[x] * b[y]
            return c
        
        def add(a: dict, b: dict, sub: bool) -> dict:
            for y in b:
                if y not in a: a[y] = 0
                a[y] += b[y] * (-1 if sub else 1)
            return a
        
        expr = list()
        split(0, expr)
        res = calc(expr)
		
        ans = list()
        for v in sorted(res.keys(), key=lambda v: (isinstance(v, int), -str(v).count('*'), str(v))):
            if res[v]: ans.append(str(res[v]) + ('' if v == 1 else ('*' + v)))
        return ans
```
