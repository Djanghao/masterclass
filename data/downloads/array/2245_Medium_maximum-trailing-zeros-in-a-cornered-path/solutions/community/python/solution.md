# 7 lines Python / NumPy

**Author:** StefanPochmann
**Votes:** 20
**Link:** [https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/1959385/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/1959385/)

---

Perfect opportunity to practice NumPy. Gets accepted in ~2200 ms, seems relatively fast. Actual time is about 900 ms, judge overhead is ~1300 here. See benchmark in the comments.
```
import numpy as np

class Solution:
    def maxTrailingZeros(self, grid: List[List[int]]) -> int:
        A = np.array(grid)
        def cumdivs(d):
            D = sum(A % d**i == 0 for i in range(1, 10))
            return D.cumsum(0) + D.cumsum(1) - D
        return max(np.minimum(cumdivs(2), cumdivs(5)).max()
                   for _ in range(4)
                   if [A := np.rot90(A)])
```
My helper function `cumdivs` first computes divisibility by divisor 2 or 5, as that's the factors we need to get zeros: It counts for each value in the grid how often it is divisible by divisor `d`. I try up to 9 times, since 2<sup>9</sup>=512 is the largest possible (since the numbers are guaranteed to not exceed 1000). Then it computes and combines the cumulative sums of the divisibilities on both axes (and subtracts each value's divisibility in order to not double-count it).

That only covers one pair of directions. So I do it four times, rotating the matrix by 90 degrees in between.