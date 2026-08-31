# Python 3   || w/ some explanation   ||   T/S: 89% / 89%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/3253898/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/3253898/)

---

Here's the plan:

- We construct a prefix sum of 4-tuples, writing over`grid`as we go. For each cell, we determine `(up2, up5, left2, right5)`, the accummulated factors of two and five for the up-direction and the left-direction respectively.

- We use the transformed`grid`to determine for each cell the count of zeros over the four paths: up-left, down-left, up-right, down-right.
- We determine the max zeros for each cell along the four paths, and then determine the overall max from those cell maxs.
```
class Solution:
    def maxTrailingZeros(self, grid: list[list[int]]) -> int:

        m, n = len(grid)+1, len(grid[0])+1
        grid = [[(0,0,0,0)]*n]+[[(0,0,0,0)]+row for row in grid]

        def pref(row: int,col: int)-> tuple:        # <-- prefix for each cell
        
            val = grid[row][col]
            for f2 in range(19):
                if val%2: break
                val//= 2
   
            for f5 in range(6):
                if val%5: break
                val//= 5
        
            (u2, u5, _,_), (_,_, l2, l5) = grid[row-1][col], grid[row][col-1]
            return (f2 + u2, f5 + u5, f2 + l2, f5 + l5)
        
        def countZeros(r: int,c: int)-> int:        #  <--Count the zeros    
            up2   ,up5    = grid[r][c][0],grid[r][c][1]
            down2 ,down5  = grid[m-1][c][0]-grid[r-1][c][0],grid[m-1][c][1]-grid[r-1][c][1]
            
            left2 ,left5  = grid[r][c-1][2],grid[r][c-1][3]
            right2,right5 = grid[r][n-1][2]-grid[r][c][2],grid[r][n-1][3]-grid[r][c][3] 

            return max(min(up2+left2 ,up5+left5 ), min(down2+left2 ,down5+left5 ),
                       min(up2+right2,up5+right5), min(down2+right2,down5+right5))

        for r in range(1,m):
            for c in range(1,n):grid[r][c] = pref(r,c)

        return max(countZeros(r,c) for c in range(1,n) for r in range(1,m))
```
[https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/submissions/1286570286/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/submissions/1286570286/)

I could be wrong, but I think that time complexity is *O*(*N*) (wnere*N* is *mn* and space complexity is probably *O*(*N*) but maybe *O*(1). I'm just not sure.

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `m*n`.
