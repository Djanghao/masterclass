# 100% runtime , dp

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house/solutions/6044234/](https://leetcode.com/problems/paint-house/solutions/6044234/)

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
```scala []
object Solution {
  def minCost(costs: Array[Array[Int]]): Int = {
    val n=costs.length
    val memo = Array.fill(n, 3)(-1)
    Math.min(min(costs, memo, 0, 0),
      Math.min(min(costs, memo, 0, 1), min(costs, memo, 0, 2)))
  }

  private def min(costs: Array[Array[Int]], memo: Array[Array[Int]], idx: Int, color: Int): Int = {
    if (idx == costs.length) 0
    else if (memo(idx)(color) != -1) memo(idx)(color)
    else {
      memo(idx)(color) = color match {
        case 0 => costs(idx)(0) + Math.min(min(costs, memo, idx + 1, 1), min(costs, memo, idx + 1, 2))
        case 1 => costs(idx)(1) + Math.min(min(costs, memo, idx + 1, 0), min(costs, memo, idx + 1, 2))
        case 2 => costs(idx)(2) + Math.min(min(costs, memo, idx + 1, 1), min(costs, memo, idx + 1, 0))
      }
      memo(idx)(color)
    }
  }
}
```