# Easy python solution: recursive approach

**Author:** shubham_1307
**Votes:** 25
**Link:** [https://leetcode.com/problems/count-and-say/solutions/2716511/](https://leetcode.com/problems/count-and-say/solutions/2716511/)

---

```
class Solution:
    def countAndSay(self, n: int) -> str:
        if n==1:
            return "1"
        x=self.countAndSay(n-1)
        s=""
        y=x[0]
        ct=1
        for i in range(1,len(x)):
            if x[i]==y:
                ct+=1
            else:
                s+=str(ct)
                s+=str(y)
                y=x[i]
                ct=1
        s+=str(ct)
        s+=str(y)
        return s
```