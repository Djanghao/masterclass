# Python 3 || 7 lines, Counters, w/ explanation || T/S: 99% / 45%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4818606/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4818606/)

---

Here's the plan:

1. We determine the values on the *Y* (except the center) and store them in `y`.

1. We store the counts of `y` in `ctr1` and add in the center value to `ctr1`.
2. We determine the values outside the *Y* and store them in `ctr2`.
3. We return the optimum solution from the six possibilities.

```
class Solution:
    def minimumOperationsToWriteY(self, grid: List[List[int]]) -> int:
        
        n  = len(grid)   
        n2 = n//2

        y = ((grid[i][i], grid[n-i-1][n2],          #  <-- 1)
                grid[i][n-i-1]) for i in range(n2)) # 

        ctr1 = Counter(chain(*y))                   #  <-- 2)
        ctr1[grid[n2][n2]]+= 1                      #

        ctr2 = Counter(chain(*grid)) - ctr1         #  <-- 3)

        return n*n - max(                           #  <-- 4)
                ctr1[0]+ctr2[1], ctr1[1]+ctr2[0],
                ctr1[0]+ctr2[2], ctr1[2]+ctr2[0], 
                ctr1[1]+ctr2[2], ctr1[2]+ctr2[1])
```
[https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/submissions/1192988466/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/submissions/1192988466/)

I could be wrong, but I think that time complexity is *O*(*N*^2) and space complexity is *O*(*N*^2), in which *N* ~ `n`.