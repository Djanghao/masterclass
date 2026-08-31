# O(mn) DP

**Author:** dekail
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052482/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052482/)

---

# Intuition
This question can be simplified as: Choosing value for each column such that no adjacent column has the same value.

So we just need to collect the value occurance of each column, try different value for each column and pick the smallest changes. This is DP.


# Complexity
- Time complexity:
$$O(m\\cdot n)$$

# Code
```
class Solution:
    def minimumOperations(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        
        # count the number of each column
        count = [[0 for _ in range(10)] for _ in range(n)]
        
        for i in range(m):
            for j in range(n):
                count[j][grid[i][j]] += 1
        
        # dp(j, prv): the minimun changes at column j and the right column value is prv
        @cache
        def dp(j, prv_value):
            # if we reach the last column, return 0 as we do not need to pick value.
            if j == -1:
                return 0
            
            result = inf
            # iterate all 10 values
            for val in range(10):
                # can't choose the same value as right hand
                if val != prv_value:
                    # column j has 'count[j][val]' val, so we need to change the remaining values to val, m - count[j][val]
                    result = min(result, m - count[j][val] + dp(j - 1, val))
            return result
        
        return dp(n - 1, -1)
```