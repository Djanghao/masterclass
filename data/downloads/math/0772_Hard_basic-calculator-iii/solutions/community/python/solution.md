# Python solution based on parser grammer

**Author:** byshen
**Votes:** 18
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/1151204/](https://leetcode.com/problems/basic-calculator-iii/solutions/1151204/)

---

It is much easier to  implement the solution if you build the BNF grammar.

inspired by https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/discuss/864596/Python-Standard-parser-implementation

```
class Solution:
    def calculate(self, s: str) -> int:
        """
        s := expr 
        expr = term  | term [+ -] term
        term = factor | factor [* /] factor 
        factor = digit | '(' expr ')'
        digit = [0..9]
        """
        def parse_factor(dq):
            if dq[0].isdigit():
                curr = 0
                while dq and dq[0].isdigit():
                    curr = curr* 10 + int(dq[0])
                    dq.popleft()
                return curr
            else:
                dq.popleft()
                tmp = parse_expr(dq)
                dq.popleft()
                return tmp
            
        def parse_term(dq):
            lhs = parse_factor(dq)
            while dq and dq[0] in ['*', '/']:
                op = dq.popleft()
                rhs = parse_factor(dq)
                lhs = lhs * rhs if op == '*' else int(lhs/rhs) # for this case "(0-3)/4"
            return lhs
        
        def parse_expr(dq):
            lhs = parse_term(dq)
            while dq and dq[0] in ['+', '-']:
                op = dq.popleft()
                rhs = parse_term(dq)
                lhs = lhs + rhs if op == '+' else lhs - rhs
            return lhs
    
        dq = deque(list(s))
        return parse_expr(dq)
```