# [Python3] median 4-line

**Author:** ye15
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1513319/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1513319/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/933e9b50b2532374ab8252f431da84b6675663a8) for solutions of weekly 262.
```
class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        vals = [x for row in grid for x in row]
        if len(set(val%x for val in vals)) > 1: return -1 # impossible
        median = sorted(vals)[len(vals)//2] # O(N) possible via "quick select"
        return sum(abs(val - median)//x for val in vals)
```