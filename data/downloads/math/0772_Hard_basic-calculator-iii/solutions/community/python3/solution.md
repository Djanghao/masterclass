# shortest solution in python3

**Author:** meowthecat
**Votes:** 13
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/475112/](https://leetcode.com/problems/basic-calculator-iii/solutions/475112/)

---

```
from collections import deque
class Solution:
    def calculate(self, s: str) -> int:
        q=deque(s.replace(' ',''))
        return self.helper(q)
    
    def helper(self,q):
        stack = []
        num=''
        sign='+'
        
        while q:
            x=q.popleft()
            if x=='(':
                num=self.helper(q)
            if x.isnumeric():
                num += x
            if not x.isnumeric() or not q:
                if sign =='+':
                    stack.append(int(num or 0))
                elif sign =='-':
                    stack.append(-1*int(num or 0))
                elif sign == '*':
                    stack.append(stack.pop()*int(num) )
                elif sign == '/':
                    stack.append(int(stack.pop()/int(num)))
                sign = x
                num = ''
            if x== ')':
                break
        
        return sum(stack)
	```