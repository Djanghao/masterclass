# [Python] 2 Excellent DP Solutions with explanation

**Author:** 101leetcode
**Votes:** 4
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/696256/](https://leetcode.com/problems/paint-house-ii/solutions/696256/)

---

```
class Solution:
    def minCostII(self, costs: List[List[int]]) -> int:
        ## RC ##
        ## APPROACH : BRUTEFORCE - DP ##
        ## Similar to leetcode : Minimum Falling Path Sum II ##
        
		## TIME COMPLEXITY : O(MxNxM) ##
		## SPACE COMPLEXITY : O(1) ##

        if not costs: return 0
        M = len(costs)
        N = len(costs[0])
        for i in range(1, M):
            for j in range(N):
                costs[i][j] = costs[i][j] + min(costs[i-1][:j] + costs[i-1][j+1:])
        return min(costs[-1])
        
        ## APPROACH : DP - OPTIMIZED ##
        ## LOGIC ##
        ## 1. Instead of finding the Minimum everytime, you can save 2 minimums from the prev row initially
        ## 2. while going through j loop, you can directly use first minimum if the first minimum column and current column are not same.
        ## 3. If the first minimum and current column are same THEN ONLY use second minimum
        
		## TIME COMPLEXITY : O(MxN) ##
		## SPACE COMPLEXITY : O(1) ##

        if not costs : return 0
        for i in range(1, len(costs)):
            mins = heapq.nsmallest(2, costs[i - 1])
            for j in range(len(costs[0])):
                costs[i][j] += mins[1] if costs[i - 1][j] == mins[0] else mins[0]
        return min(costs[-1])
```