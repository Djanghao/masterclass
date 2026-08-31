# This is dynamic programming approach for this problem.

**Author:** lehaulm007
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5661044/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5661044/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is how can i approach, from this recursion formula newMax_a = max(pre_maxB[before two days] + cur_a, pre_maxA[before one day] + cur_a). Similarly, appling on B.
# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic pro or recursion with memorization

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution:
    def maxEnergyBoost(self, energyDrinkA, energyDrinkB):
        n = len(energyDrinkA)
        
        dpA = [0 for _ in range(n)]
        dpB = [0 for _ in range(n)]
        
        dpA[0] = energyDrinkA[0]
        dpB[0] = energyDrinkB[0]
        dpA[1] = dpA[0] + energyDrinkA[1]
        dpB[1] = dpB[0] + energyDrinkB[1]

        # Dynamic approach with recursion formula
        for i in range(2, n):
            dpA[i] = max(dpB[i - 2] + energyDrinkA[i], dpA[i - 1] + energyDrinkA[i])
            dpB[i] = max(dpA[i - 2] + energyDrinkB[i], dpB[i - 1] + energyDrinkB[i])
        return max(dpA[n - 1], dpB[n - 1])
        
```