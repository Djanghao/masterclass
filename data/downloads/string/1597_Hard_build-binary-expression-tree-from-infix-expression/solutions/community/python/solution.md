# Python Solution, Similar to Basic Calculator

**Author:** user8666R
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/944215/](https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression/solutions/944215/)

---


```
pr = {'*': 1, '/': 1, '+': 2, '-': 2, ')': 3, '(': 4}

class Solution(object):
    def apply(self, numSt, opSt):
        right = numSt.pop()
        left = numSt.pop()
        return Node(opSt.pop(), left, right)
    def expTree(self, s):
        numSt, opSt = [], []
        i = 0
        while (i < len(s)):
            c = s[i]
            i += 1
            if c.isnumeric(): numSt.append(Node(c))
            else:                
                if c in '(': opSt.append('(')
                else:
                    while(len(opSt) > 0 and pr[c] >= pr[opSt[-1]]):
                        numSt.append(self.apply(numSt, opSt))
                    if (c == ')'): opSt.pop() # Now what remains is the closing bracket ')'
                    else: opSt.append(c)
        while(len(opSt) > 0): numSt.append(self.apply(numSt, opSt))
        return numSt.pop()
```