# Travelling Salesman Problem python

**Author:** ANiSh684
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/5166230/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/5166230/)

---

```
from functools import lru_cache #This is used in order to avoid TLE by implementing memoization

class Solution:
    def shortestSuperstring(self, words):
        def makeadj(words):
            l = len(words)
            adj = [["" for z in range(l)] for x in range(l)]
            for i in range(l):
                for j in range(l):
                    if i != j:
                        x = words[i]
                        y = words[j]
                        max_overlap = 0
                        for k in range(1, min(len(x), len(y)) + 1):
                            if x[-k:] == y[:k]:
                                max_overlap = k
                        adj[i][j] = y[max_overlap:]  # Only keep the non-overlapping part
            return adj

        @lru_cache(None)
        def sss(bits, cur):
            if bits == (1 << n) - 1: 
                return ""
            res = "a" * 240
            for i in range(n):
                if (bits & (1 << i)) == 0:
                    ans = adj[cur][i] + sss(bits | (1 << i), i)
                    if len(res) > len(ans):
                        res = ans
            return res
        
        ans = "a" * 240 
        n = len(words)
        adj = makeadj(words)
        for i in range(n):
            x = words[i] + sss(1 << i, i)
            if len(x) < len(ans):
                ans = x
        return ans
```