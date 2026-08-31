# [Python] Top down spaghetti solution - Authentic like Italian cuisine

**Author:** Loop4aWhile
**Votes:** 3
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/3770746/](https://leetcode.com/problems/paint-house-iii/solutions/3770746/)

---

# Intuition
We first need to understand the idea of having neighborhoods. It the most basic sense, it's the number of color switch between different neighbors plus 1.

For example, `houses = [1, 2, 2, 1, 1]`, number of `color` switchs are `2`, and we have `3` neighborhoods.

# Approach
<!-- Describe your approach to solving the problem. -->

Similar to other paint house problem, with a few conditions to check for the `houses` that had already been painted. Also we need to introduce a new variable `group` to count the number of time that we have different `colors` between neighbor.



# Code
```
class Solution:
    def minCost(self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int) -> int:

        @cache
        def dp(i, j, group):
            if i == len(cost) and group == target: return 0
            if i >= len(cost): return float("inf")
            if group > target: return float("inf")

            res = float("inf")
            if not houses[i]:
                for color in range(1, n + 1):
                    if j != color:
                        res = min(res, dp(i + 1, color, group + 1) + cost[i][color - 1])
                    else:
                        res = min(res, dp(i + 1, color, group) + cost[i][color - 1])
            else:
                color = houses[i]
                res = dp(i + 1, color, group + 1) if j != color else dp(i + 1, color, group)

            return res

        res = dp(0, -1, 0)
        return -1 if res == float("inf") else res
```