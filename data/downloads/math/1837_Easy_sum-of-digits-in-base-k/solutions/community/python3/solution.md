# [Python3] self-explained

**Author:** ye15
**Votes:** 14
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1175067/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1175067/)

---


```
class Solution:
    def sumBase(self, n: int, k: int) -> int:
        ans = 0
        while n: 
            n, x = divmod(n, k)
            ans += x
        return ans 
```