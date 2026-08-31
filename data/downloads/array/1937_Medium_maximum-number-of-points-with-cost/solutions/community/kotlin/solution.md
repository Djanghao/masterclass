# Dynamic Programming

**Author:** dev_lazy25
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/4816296/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/4816296/)

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
    fun maxPoints(points: Array<IntArray>): Long {
        val n = points[0].size

        var currentRowMaxPoints = LongArray(n)

        val inf = 1L shl 60

        for(row in points) {
            val nextRowMaxPoints = LongArray(n)

            var leftMax = -inf
            var rightMax = -inf

            for(j in 0..<n) {
                leftMax = max(leftMax, currentRowMaxPoints[j] + j)
                nextRowMaxPoints[j] = max(nextRowMaxPoints[j], row[j] + leftMax - j)
            }

            for(j in n-1 downTo 0) {
                rightMax = max(rightMax, currentRowMaxPoints[j] - j)
                nextRowMaxPoints[j] = max(nextRowMaxPoints[j], row[j] + rightMax + j)
            }

            currentRowMaxPoints = nextRowMaxPoints
        }
        return currentRowMaxPoints.max()
    }
}
```