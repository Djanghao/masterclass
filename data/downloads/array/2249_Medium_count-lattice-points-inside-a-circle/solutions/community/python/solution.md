# [Python] 128 ms beat 100%

**Author:** user5232oA
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1977167/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/1977167/)

---

Given the constraint, all points are witnin the first quadrant with `x <= 200, y<= 200`. Therefore, we'll just record the intervals on each `x` coordinate. Then we'll just merge the intervals for each `x` coordinate.
```
class Solution:
    def countLatticePoints(self, circles: List[List[int]]) -> int:
        intervals = [[] for _ in range(201)]
        for x, y, r in circles:
            for i in range(-r, r + 1):
                d = math.floor(math.sqrt(r**2 - i**2))
				# Add [start, 0] and [end, 1] to the list of intervals.
                intervals[x + i].append([y - d, 0])
                intervals[x + i].append([y + d, 1])
        res = 0

        for l in intervals:
            if l:
                l.sort()
				# count of open intervals.
                count = 0
                for i, ind in l:
                    if count == 0:
                        s = i
                    if ind == 0:
                        count += 1
                    else:
                        count -= 1
                        if count == 0:
                            res += i - s + 1
        return res
```