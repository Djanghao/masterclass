# [Python] Simple DP Solution, In Place

**Author:** 101leetcode
**Votes:** 15
**Link:** [https://leetcode.com/problems/paint-house/solutions/695363/](https://leetcode.com/problems/paint-house/solutions/695363/)

---

```
class Solution:
    def minCost(self, costs: List[List[int]]) -> int:
        ## RC ##
        ## APPROACH : DP ##
        
		## TIME COMPLEXITY : O(N) ##
		## SPACE COMPLEXITY : O(1) ##

        n = len(costs)
        if(n==0) : return 0
        for i in range(1,n):
            costs[i][0] += min(costs[i-1][1],costs[i-1][2])
            costs[i][1] += min(costs[i-1][0],costs[i-1][2])            
            costs[i][2] += min(costs[i-1][1],costs[i-1][0])            
        return min(costs[-1])
```
PLEASE UPVOTE IF YOU LIKE MY SOLUTION