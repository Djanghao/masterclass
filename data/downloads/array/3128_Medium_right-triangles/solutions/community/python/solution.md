# Python 3 || 5 lines, transpose || T/S: 97% / 33%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5080324/](https://leetcode.com/problems/right-triangles/solutions/5080324/)

---

Here's the plan:

- We determine the count of 1s for each row and each column in `grid`.
- We iterate through the grid and calculate, for which each 1,  the number of right triangles for which that 1 is the right-angle vertex (*RAV*).

- We do this calculation by considering each 1 in the *RAV*'s column as a possible acute-angle vertex in the same vertical line as the *RAV*, and considering each 1 in the *RAV*'s row as a possible acute-angle vertex in the same horizontal line as the *RAV*. The number of triangles with this *RAV* is therefore `(rowCnt[i]-1) * (colCnt[j]-1)`.
```
class Solution:
    def numberOfRightTriangles(self, grid: List[List[int]], ans = 0) -> int:

        rowCnt = list(map(sum, grid))
        colCnt = list(map(sum, zip(*grid)))

        for i,j in product(range(len(grid)), range(len(grid[0]))):
            ans+= grid[i][j] * (rowCnt[i]-1) * (colCnt[j]-1)

        return ans
```
[https://leetcode.com/problems/right-triangles/submissions/1243421791/](https://leetcode.com/problems/right-triangles/submissions/1243421791/)

I could be wrong, but I think that time complexity is *O*(*MN*) and space complexity is *O*(*M* + *N*), in which *M* ~ `len(grid)` and *N* ~ `len(grid[0])`.