# Minimum Cost to Connect Two Groups of Points

**Author:** Ansh1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/5894813/](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/5894813/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
DP Initialization:
Initially, no points are connected, so the cost is 0 for the starting state dp[0][0].

DP Transitions:
For each point in the first group, for each possible connection to the second group, update the DP state by considering the minimum cost to add the connection.

Final State:
After processing all points in the first group, we need to ensure that all points in the second group are connected (which is ensured by examining the bitmask 111...111 for size2 bits).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(size1 * (1 << size2) * size2) since we are iterating over all possible subsets of group 2 and performing transitions for each subset.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(size1 * (1 << size2)) for the DP table.

# Code
```python []
import sys

class Solution(object):
    def connectTwoGroups(self, cost):
        """
        :type cost: List[List[int]]
        :rtype: int
        """
        size1, size2 = len(cost), len(cost[0])
        
        # dp[i][mask]: minimum cost to connect first i points of group1 and `mask` points of group2
        dp = [[sys.maxsize] * (1 << size2) for _ in range(size1 + 1)]
        dp[0][0] = 0
        
        # Minimum cost to connect each point in group2, in case we need to cover extra points later
        min_cost_to_point_in_group2 = [min(cost[i][j] for i in range(size1)) for j in range(size2)]
        
        for i in range(size1):
            for mask in range(1 << size2):
                if dp[i][mask] == sys.maxsize:
                    continue
                # Try to connect point i from group 1 to every point in group 2
                for j in range(size2):
                    new_mask = mask | (1 << j)  # Connect group1[i] to group2[j]
                    dp[i + 1][new_mask] = min(dp[i + 1][new_mask], dp[i][mask] + cost[i][j])
        
        # Connect extra points from group 2 if needed
        final_cost = sys.maxsize
        for mask in range(1 << size2):
            current_cost = dp[size1][mask]
            for j in range(size2):
                if not (mask & (1 << j)):
                    current_cost += min_cost_to_point_in_group2[j]
            final_cost = min(final_cost, current_cost)
        
        return final_cost

```