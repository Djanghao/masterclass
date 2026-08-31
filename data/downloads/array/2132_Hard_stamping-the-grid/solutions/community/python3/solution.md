# two 2d prefix sums

**Author:** MaxOrgus
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-grid/solutions/5450932/](https://leetcode.com/problems/stamping-the-grid/solutions/5450932/)

---

Two corner cases should be checked at the very first:

Should there be no 0 in the grid at all, return True (I don't even know why ...)

Or if the stamp is even larger than the size, we return False directly. 

Next we deal with the trivial cases.

We first check whether each empty cell can serve as the right lower corner of the stamp -- that is, we check whether the stamp with h,w as the size to its upper left contains any 1s. This can be done by maintaining the 2d presum of all 1s seen so far -- and by subtracting the psums to the left and to the upper beyond the scope we get the 1s in the area we want.

We record the possibilty of 'whether this cell can serve as the right lower corner of a stamp' in a new matrix 'MARKED'.

Then we do the second round, this time going from the lower right corner of the whole grid.

We check whether there is any 1s in the MARKED in a stamp with h,w as the size to the lower right of each empty cell. If no, no stamps can contain this cell, we directly return False. The checking could be done in a similar manner discribed above using 2s presums, but reversely.

When all empty cells pass the check, return True


# Code
```
class Solution:
    def possibleToStamp(self, grid: List[List[int]], stampHeight: int, stampWidth: int) -> bool:
        m = len(grid)
        n = len(grid[0])
        s = 0
        for i in range(m):
            for j in range(n):
                s += grid[i][j]
        if s == m*n:return True

        if stampHeight > m or stampWidth > n:
            return False
            
        mark = [[0 for i in range(n)] for j in range(m)]
        psum = [[0 for i in range(n+1)] for j in range(m+1)]
        for i in range(m):
            for j in range(n):
                psum[i+1][j+1] = grid[i][j] + psum[i][j+1]+psum[i+1][j] - psum[i][j]
                possible = False
                if i+1 >= stampHeight and j+1 >= stampWidth:
                    if psum[i+1][j+1] - psum[i+1][j+1-stampWidth] - psum[i+1 -stampHeight][j+1] + psum[i+1 -stampHeight][j+1-stampWidth] == 0:
                        possible = True
                mark[i][j] = int(possible)
        psum2 = [[0 for i in range(n+1)] for j in range(m+1)]
        for i in range(m-1,-1,-1):
            for j in range(n-1,-1,-1):
                psum2[i][j] = mark[i][j] + psum2[i][j+1]+psum2[i+1][j] - psum2[i+1][j+1]
                if grid[i][j] == 1:
                    continue
                possible = False
                seen = psum2[i][j]
                if i + stampHeight <= m:
                    seen -= psum2[i+stampHeight][j]
                if j + stampWidth <= n:
                    seen -= psum2[i][j+stampWidth]
                if  i + stampHeight <= m and j + stampWidth <= n:
                    seen += psum2[i+stampHeight][j+stampWidth]
                if seen < 1:return False


        return True
```