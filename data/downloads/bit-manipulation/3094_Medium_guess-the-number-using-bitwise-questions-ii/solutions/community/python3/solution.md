# Python - one line

**Author:** Ante_
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4934835/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4934835/)

---

# Code
```
class Solution:
    def findNumber(self):
        return reduce(lambda a, b: a | b,[1 << i  for i in range(30) if commonBits(1 << i) > commonBits(1 << i)])        
```