# Simple Python Solution

**Author:** whissely
**Votes:** 9
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/790679/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/790679/)

---

```
class Solution:
    # Time: O(1)
    # Space: O(1)
    def queensAttacktheKing(self, queens: List[List[int]], king: List[int]) -> List[List[int]]:
        queen_set = {(i, j) for i, j in queens}
        res = []
        
        for dx, dy in [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]:
            x, y = king[0], king[1]
            while 0 <= x < 8 and 0 <= y < 8:
                x += dx
                y += dy
                if (x, y) in queen_set:
                    res.append([x, y])
                    break
        return res
```