# [python3] straight forward solution

**Author:** zhanweiting
**Votes:** 10
**Link:** [https://leetcode.com/problems/flip-game/solutions/358954/](https://leetcode.com/problems/flip-game/solutions/358954/)

---

```
class Solution:
    def generatePossibleNextMoves(self, s: str) -> List[str]:
        res = []
        for i in range(len(s)-1):
            if s[i:i+2] == '++':
                res.append(s[:i] + '--' + s[i+2:])
        return res
```