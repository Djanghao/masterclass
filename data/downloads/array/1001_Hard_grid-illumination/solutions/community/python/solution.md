# Python Clean Short Code

**Author:** infinute
**Votes:** 15
**Link:** [https://leetcode.com/problems/grid-illumination/solutions/242991/](https://leetcode.com/problems/grid-illumination/solutions/242991/)

---

We use four dictionaries to store the information of the lamps. For a lamp `(x, y)`, 
* the row `x` will be lit; 
* the column `y` will be lit; 
* the diagonal `x - y` will be lit; (please not that lamp [0, 0], [4, 4], and [100, 100] are identical in terms of the diagonal)
* the antidigonal `x + y` will be lit. (similarly, [5, 4], [3, 6], and [6, 3] are identical in terms of the antidiagonal)

The keys in `row, col, diag, andi` represent rows/columns/diags/antidiags, and the corresponding values represent how many lamps can light the rows/columns/diags/antidiags. For instance, if `lamps = [[0, 0], [4, 4]]`, the main diag will be lit and `diag[0] = 2`. If we remove the lamp at `[0, 0]`, it will be `diag[0] = 1`, which means there still is one lamp that can light the diag.

Given a location `[x, y]`, just check if any of `row[x], col[y], diag[x - y], andi[x + y]` is non-zero. When turning off the lights, just update the four dictionaries.
```
from collections import defaultdict
class Solution:
    def gridIllumination(self, N: int, lamps: List[List[int]], queries: List[List[int]]) -> List[int]:
        lamps = {(light[0], light[1]) for light in lamps}
        row, col, diag, andi = defaultdict(int), defaultdict(int), defaultdict(int), defaultdict(int)
        for x, y in lamps:
            row[x] += 1; col[y] += 1; diag[x - y] += 1; andi[x + y] += 1
        res = []
        for x, y in queries:
            res.append(int(row[x] + col[y] + diag[x - y] + andi[x + y] > 0))
            for i in range(x - 1, x + 2):
                for j in range(y - 1, y + 2):
                    if (i, j) in lamps:
                        lamps.remove((i, j))
                        row[i] -= 1; col[j] -= 1; diag[i - j] -= 1; andi[i + j] -= 1
        return res
```