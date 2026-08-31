# Python very simple solution - sort and enumerate each number O(mn log mn) time

**Author:** celisun
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/2956786/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/2956786/)

---

# Intuition


# Approach
Just sort all the numbers and enumerate each on by one, and increment the number to record from number 1. Each time, we check if this number is by far the largest in the same row and same col recorded. if it is larger, update the largest number in that row and column and increment the number to record to the destination matrix.

# Complexity
- Time complexity:
$$ O(MN log MN)$$ M, N is # row and columns becuase we sort all the numbers in the matrix

- Space complexity:
$$ O(MN) + O(M + N)$$  the dicionary records the max number for each row and colmn, besides we record all the numbers along within its positions after sorting

# Code
```
class Solution(object):
    def minScore(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: List[List[int]]
        """
        m, n = len(grid), len(grid[0])
        rows, cols = {}, {}
        nums = sorted([grid[i][j], (i, j)] for i in range(m) for j in range(n))
        res = [[0] * n for __ in range(m)]
        for n, (i, j) in nums:
            cur = 1
            if i in rows and rows[i] < n:
                cur = max(cur, rows[i] + 1)
                
            if j in cols and cols[j] < n:
                cur = max(cur, cols[j] + 1)
            rows[i] = cur
            cols[j] = cur
            res[i][j] = cur
        return res

```