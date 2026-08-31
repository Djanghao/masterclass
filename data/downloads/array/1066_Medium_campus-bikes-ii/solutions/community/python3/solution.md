# Python (Simple Backtracking + DP)

**Author:** rnotappl
**Votes:** 2
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/4487439/](https://leetcode.com/problems/campus-bikes-ii/solutions/4487439/)

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
    def assignBikes(self, workers, bikes):
        n, m, dp = len(workers), len(bikes), {}

        def mdist(a,b):
            return abs(a[0]-b[0]) + abs(a[1]-b[1])

        def backtrack(i,visited):
            if i == n:
                return 0 

            if tuple(visited) in dp:
                return dp[tuple(visited)]

            min_val = float("inf")

            for j in range(m):
                if visited[j] == True: continue
                visited[j] = True
                min_val = min(min_val,mdist(workers[i],bikes[j])+backtrack(i+1,visited))
                visited[j] = False

            dp[tuple(visited)] = min_val 

            return dp[tuple(visited)]

        visited = [False]*m

        return backtrack(0,visited)





        
        
        
        
```