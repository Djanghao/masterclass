# Python 3   ||   12 lines,  iteration and dict  ||   T/S: 77% / 99%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/3318060/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/3318060/)

---

```
class Solution:
    def checkValidGrid(self, grid: List[List[int]]) -> bool:

        n, d = len(grid), defaultdict(tuple)
        if n < 5: return n == 1

        notLegal = lambda x, y : {abs(x[0]-y[0]),
                                  abs(x[1]-y[1])} != {1,2}

        for row, col in product(range(n),range(n)):
            d[grid[row][col]] = (row,col)
        
        prev, cnt = (0,0), 1

        while cnt < n*n:
            curr = d[cnt]

            if notLegal(prev,curr):  return False

            cnt+=1
            prev = curr

        return True
```
[https://leetcode.com/problems/check-knight-tour-configuration/submissions/1006491076/](https://leetcode.com/problems/check-knight-tour-configuration/submissions/1006491076/)


I could be wrong, but I think that time complexity is *O*(*N*^2) and space complexity is *O*(*N*^2), in which *N* ~ `n`.