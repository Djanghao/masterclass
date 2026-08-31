# ✅ 3 Line Code Very Easy C++ Solution ✅

**Author:** fiit_bhairav
**Votes:** 514
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/3092987/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/3092987/)

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
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n=cost.size();
        for(int i=2;i<n;i++)
        {
            cost[i]+=min(cost[i-1],cost[i-2]);
        }
        return min(cost[n-1],cost[n-2]);
    }
};
```
![leetcode upvote.jpg](./images/0.jpeg)
