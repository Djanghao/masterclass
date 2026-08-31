# Simple Brute Force Python O(n^2)

**Author:** gauau
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4600685/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4600685/)

---

The distance between house `l` and `r` is `min(r - l, abs(x - l) + abs(r - y) + 1)` (either go `l` -> `r` or `l` -> `x` -> `y` -> `r`, whichever shorter)
Then 2 for loop brute force for each pair of houses `l` and `r`
```
class Solution:
    def countOfPairs(self, n: int, x: int, y: int) -> List[int]:
        x, y = min(x, y), max(x, y)
        ans = [0]*n
        for l in range(1, n + 1):
            for r in range(l + 1, n + 1):
                d = self.minDistance(l, r, x, y)
                ans[d - 1] += 2
        return ans
    
    def(self, l, r, x, y):
        return min(r - l, abs(x - l) + abs(r - y) + 1)
```