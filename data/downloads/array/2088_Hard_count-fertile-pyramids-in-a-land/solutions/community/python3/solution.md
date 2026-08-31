# Python 3 || count, invert, count again  || T/S: 99% / 94%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/5634189/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/solutions/5634189/)

---


```
class Solution:
    def countPyramids(self, grid: List[List[int]], ans = 0) -> int:

        def count()-> None:
            nonlocal ans
            prev_row = grid[0]

            for row in grid[1:]:
                curr_row = row[::]

                for j in range(1, len(grid[0])-1):
                
                    if curr_row[j] == 0: continue

                    curr_row[j] = min(prev_row[j-1:j+2])
                    ans+= curr_row[j]
                    curr_row[j]+= 1

                prev_row = curr_row

            return


        count()
        grid = grid[::-1]
        count()

        return ans
```
[https://leetcode.com/problems/count-fertile-pyramids-in-a-land/submissions/1355102429/](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/submissions/1355102429/)

I could be wrong, but I think that time complexity is *O*(*MN*) and space complexity is *O*(*N*), in which *M*, *N* ~ `m`, `n`.