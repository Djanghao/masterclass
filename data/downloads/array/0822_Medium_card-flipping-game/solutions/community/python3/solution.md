# Python3 simple solution using a for() loop

**Author:** jb07
**Votes:** 2
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/530999/](https://leetcode.com/problems/card-flipping-game/solutions/530999/)

---

```
class Solution:
    def flipgame(self, fronts: List[int], backs: List[int]) -> int:
        """
        O(n) time complexity: n is length of fronts
        O(n) space complexity
        """
        same = {x for i, x in enumerate(fronts) if x == backs[i]}
        res = 9999
        for i in range(len(fronts)):
            if fronts[i] not in same: res = min(res, fronts[i])
            if backs[i] not in same: res = min(res, backs[i])
        return res % 9999
```