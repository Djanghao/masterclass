# Python DFS + Set

**Author:** eddietseng1129
**Votes:** 91
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/321673/](https://leetcode.com/problems/letter-tile-possibilities/solutions/321673/)

---

```
class Solution(object):
    def numTilePossibilities(self, tiles):
        """
        :type tiles: str
        :rtype: int
        """
        res = set()
        def dfs(path, t):
            if path:
                res.add(path)
            for i in range(len(t)):
                dfs(path+t[i], t[:i] + t[i+1:])
                
        dfs('', tiles)
        return len(res)
```