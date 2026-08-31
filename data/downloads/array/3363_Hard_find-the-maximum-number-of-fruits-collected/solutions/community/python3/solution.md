# Python3 || 12 lines, recursion dp  || T/S: 76% / 64%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solutions/6080053/](https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solutions/6080053/)

---

Here's the plan:
1. We compute the sum of the diagonal.
1. We compute the optimum answer for the upper triangle with recursive function dp.
 1. We compute the optimum answer for the lower triangle by transposing `fruits` (making the lower triangle into an upper triangle) and using dp again.
 
1. We return the sum of the results of 1-3 above as the solution.


```python3 []
class Solution:
    def maxCollectedFruits(self, fruits: List[List[int]]) -> int:   

        @lru_cache(9000)
        def dp(row: int, col: int)-> int:

            if 0 <= col < row < n:                                  
                return fruits[row][col] + max(dp(row-1, col+1),
                                              dp(row  , col+1),
                                              dp(row+1, col+1))
            return 0


        n = len(fruits)
        diag = sum(map(lambda x:fruits[x][x], range(n)))    # <= 1)

        upper = dp(n - 1, 0)                                # <= 2)

        dp.cache_clear()                                    # <= 3)
        fruits = list(zip(*fruits))                         # 
                                                            # 
        lower = dp(n - 1, 0)                                # 

        return diag + upper + lower                         # <= 4)
```
[https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/submissions/1462776522/](https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/submissions/1462776522/)

I could be wrong, but I think that time complexity is *O*(*N* ^2) and space complexity is *O*(*N* ^2), in which *N* ~ `len(fruits)`.