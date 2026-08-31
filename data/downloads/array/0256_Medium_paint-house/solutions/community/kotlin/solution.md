# [Kotlin] recursive memoized solution

**Author:** drulabs
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house/solutions/5232414/](https://leetcode.com/problems/paint-house/solutions/5232414/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
kepp a track of the prev paint and find the min cost

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: **__O(n x 4)__**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:**__O(n x 4) + recursion stack space__**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minCost(
        costs: Array<IntArray>,
        prev: Int = -1,
        index: Int = 0,
        memo: Array<IntArray> = Array(costs.size) { IntArray(4) { -1 } }
    ): Int {
        if (index == costs.size) return 0

        if(memo[index][prev+1] != -1)
            return memo[index][prev+1]
        
        var minCost = Int.MAX_VALUE

        for (i in 0..2) {
            val currentCost = if (prev == -1 || prev != i)
                            costs[index][i] + minCost(costs, i, index + 1, memo)
                        else
                            Int.MAX_VALUE
            minCost = minOf(minCost, currentCost)
        }
        memo[index][prev+1] = minCost
        return minCost
    }
}
```