# Python 3 || 5 lines, sets || T/S: 96% / 67%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5162662/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5162662/)

---

Here's the plan:

1. We first check whether any neighbors in the first row of `grid` are equal. If so, `grid` flunks the second requirement in the description, so we return `False`. If not, we cannot draw a conclusion other than the test in 2) below will fail if two neighbors in subsequent rows are equal.

2. We map each column to a set; the column passes the first requirement  in the description if the length of each set is one.
```
class Solution:
    def satisfiesConditions(self, grid: List[List[int]]) -> bool:

        for a,b in pairwise(grid[0]):
            if a == b: return False

        for s in list(map(set, zip(*grid))): 
            if len(s) != 1: return False

        return True
```
[https://leetcode.com/problems/check-if-grid-satisfies-conditions/submissions/1259124282/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/submissions/1259124282/)

I could be wrong, but I think that time complexity is *O*(*MN*) and space complexity is *O*(*N*), in which *M* ~ `len(grid[0])` and *N* ~ `len(grid)`.