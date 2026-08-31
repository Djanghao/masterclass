# Python with observation

**Author:** Vigneswar_A
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/2670777/](https://leetcode.com/problems/find-the-derangement-of-an-array/solutions/2670777/)

---

```
#hint: try to get answers for 2,3,4,5.. and you could see a pattern
class Solution:
    def findDerangement(self, n: int) -> int:
        if n == 1:
            return 0
        
        res = 1
        MOD = 1000000007
        for i in range(2, n):
            res = (res*(i+1) + (1 if i%2 else -1))%MOD
        return res%MOD
                   
```