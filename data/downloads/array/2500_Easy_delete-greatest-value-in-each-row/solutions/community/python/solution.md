# Python 3   ||   3 lines,  w/ explanation and example   ||   T/S: 92% / 85%

**Author:** Spaulding_
**Votes:** 20
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2905342/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2905342/)

---

```
class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:

        for i in range(len(grid)): grid[i].sort()   # <-- sort each row

        grid = list(zip(*grid))                     # <-- transpose grid; rows become
                                                    #     cols and cols become rows

        return sum(max(row) for row in grid)        # <-- sum the maxs from each row
                                                    #_________________________________
                                                    #    Example: grid  = [[4,1,2]
                                                    #                      [3,3,1]]

                                                    #  Sort rows: grid  = [[1,2,4]
                                                    #                      [1,3,3]]
                                                    #
                                                    #  Transpose: grid  = [[1,1]  <-- max: 1
                                                    #                      [2,3]  <-- max: 3
                                                    #                      [4,3]] <-- max: 4
                                                    #                                     \u2013\u2013\u2013
                                                    #        Sum:              return \u2013\u2013>  8                          
                                                    
```

[https://leetcode.com/problems/delete-greatest-value-in-each-row/submissions/1290476617/
](https://leetcode.com/problems/delete-greatest-value-in-each-row/submissions/1290476617/
)
I could be wrong, but I think that time is *O*(*MN* log *N*) and space is *O*(*MN*), in which *N* ~ `len(grid)` and *N* ~ `len(grid[0])`.
