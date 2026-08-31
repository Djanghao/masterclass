# Python DP Solution, Without Bitmasking, commented

**Author:** hemantdhamija
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/2735962/](https://leetcode.com/problems/maximize-grid-happiness/solutions/2735962/)

---

```
class Solution:
    def getMaxGridHappiness(self, m: int, n: int, introvertsCount: int, extrovertsCount: int) -> int:
        introvertStart, extrovertStart, introvertDelta, extrovertDelta = 120, 40, -30, 20
        # this contains all the possible changes for introvert nad extrovert happiness
        # when they have neighbors versus when they have no neighbors
        fine = [[0, 0, 0], [0, 2 * introvertDelta, introvertDelta + extrovertDelta], [0, introvertDelta + extrovertDelta, 2 * extrovertDelta]]
        
        @cache
        def dp(idx: int, row: int, introvertsCount: int, extrovertsCount: int) -> int:
            if idx == -1: 
                return 0
            # Our current position and all possible happiness
            curRow, curCol, ans = idx // n, idx % n, []
            # 1 -> have an introvert as neighbor to current position
            # 2 -> have an extrovert as neighbor to current postion
            # 3-> have no neighbors
            neighbors = [(1, introvertsCount - 1, extrovertsCount, introvertStart), (2, introvertsCount, extrovertsCount - 1, extrovertStart), (0, introvertsCount, extrovertsCount, 0)]
            # here, we calculae all possible values for happiness for the cases
            # mentioned above
            for val, dIntrovert, dExtrovert, gain in neighbors:
                happiness = 0
                if dIntrovert >= 0 and dExtrovert >= 0:
                    # find the total happiness in the current case
                    happiness = dp(idx - 1, (val,) + row[:-1], dIntrovert, dExtrovert) + gain
                    if curCol < n - 1: 
                        happiness += fine[val][row[0]]  #right neighbor
                    if curRow < m - 1: 
                        happiness += fine[val][row[-1]] #down neighbor
                # append the current happiness in the list
                ans.append(happiness)
            # Return the maximum possible happiness
            return max(ans)
        
        if m < n: m, n = n, m
        return dp(m * n - 1, tuple([0] * n), introvertsCount, extrovertsCount)
```