# Python (Simple DP)

**Author:** rnotappl
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-paths-with-max-score/solutions/2959439/](https://leetcode.com/problems/number-of-paths-with-max-score/solutions/2959439/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def pathsWithMaxScore(self, board):
        matrix = []

        for i in board:
            matrix += [list(i)]

        m, n, mod = len(matrix), len(matrix[0]), 10**9+7

        @lru_cache(None)
        def dfs(i,j):
            if i >= m or j >= n or matrix[i][j] == "X":
                return (float("-inf"),0)

            if i == m-1 and j == n-1:
                return (0,1)

            op1 = dfs(i+1,j)
            op2 = dfs(i,j+1)
            op3 = dfs(i+1,j+1)

            score = int(matrix[i][j]) if matrix[i][j] != "E" else 0

            count, prev_score = 0, max(op1[0],op2[0],op3[0])

            if op1[0] == prev_score:
                count += op1[1]
            if op2[0] == prev_score:
                count += op2[1]
            if op3[0] == prev_score:
                count += op3[1]

            return (score + prev_score,count%mod)

        
        res = dfs(0,0)

        return [max(res[0],0),res[1]]

        
        
```