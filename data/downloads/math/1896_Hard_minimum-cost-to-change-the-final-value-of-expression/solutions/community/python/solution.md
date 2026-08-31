# Python 3 || One-pass w/ stack, 100% TC, clean & concise

**Author:** zsq007
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/4759285/](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/4759285/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There are three cases for computing the `cost`, and the rest is a regular compiler/parser with a stack.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minOperationsToFlip(self, expression: str) -> int:
        def cost(l: bool, r: bool, op: bool, lCost: int, rCost: int) -> int:

            # 1&0 -> 1|0 -> 1
            # 1|0 -> 1&0 -> 1
            # 0&1 -> 0|1 -> 1
            # 0|1 -> 0&1 -> 1
            # 1&1 -> 0&1 -> min(lCost,rCost)
            # 0|0 -> 1|0 -> min(lCost,rCost)
            # 1|1 -> 1&0 -> min(lCost,rCost)+1
            # 0&0 -> 1|0 -> min(lCost,rCost)+1

            if l^r:     return 1
            if l^op:    return min(lCost, rCost)
            else:       return min(lCost, rCost)+1
            
        stack, curVal, curOp, curCost = [], False, False, 0
        for c in expression:
            if c in '01':
                newVal = (c=='1')
                if curCost:
                    curCost = cost(curVal, newVal, curOp, curCost, 1)
                    if curOp ^ curVal: curVal = newVal
                else:
                    curVal, curCost = newVal, 1
            elif c in '&|':
                curOp = (c=='|')
            elif c == '(':
                stack.append((curVal, curOp, curCost))
                curVal, curOp, curCost = False, False, 0
            elif c == ')':
                prevVal, curOp, prevCost = stack.pop()
                if prevCost:
                    curCost = cost(prevVal, curVal, curOp, prevCost, curCost)
                    if curOp ^ curVal:  curVal = prevVal
        return curCost

```