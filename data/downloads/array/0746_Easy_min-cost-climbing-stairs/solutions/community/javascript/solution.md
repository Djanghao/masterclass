# 4 Lines Code 😁 || Super Easy || Hell Easy || 🎃🥙

**Author:** Ashok2252
**Votes:** 99
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/2590009/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/2590009/)

---

## Just have a look at Logic inspite of language in which it is written :P

```
If you like the code please do Upvote. Upvoting someone doesn't cost anything and motivates the other person to go and grind on LeetCode. Peace \u262E
```
```
I will highly request you to please take a moment and try it with pen and paper :D
```

# Code : 

```
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int n = cost.length ;
        for(int i=2 ; i<n ; i++){
            cost[i] = Math.min(cost[i-1] , cost[i-2]) + cost[i];
        }
        return Math.min(cost[n-1] , cost[n-2]);
    }
}
```

# Time Complexity : O(N)

# Space Complexity : O(1)
