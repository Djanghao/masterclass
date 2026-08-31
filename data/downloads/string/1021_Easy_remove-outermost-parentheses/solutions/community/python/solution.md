# Easy to understand Python with comments

**Author:** cglotr
**Votes:** 46
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/319686/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/319686/)

---

```Python
class Solution:
    def removeOuterParentheses(self, S: str) -> str:
        res = ''
        stack = []
        
        # basket is used to store previous value
        basket = ''
        
        for p in S:
            if p == '(':
                stack.append(p)
            else:
                stack.pop()
            basket += p
            
            # if the stack is empty it means we have a valid
            # decomposition. remove the outer parentheses
            # and put it in the result/res. make sure to
            # clean up the basket though!
            if not stack:
                res += basket[1:-1]
                basket = ''
                
        return res
```