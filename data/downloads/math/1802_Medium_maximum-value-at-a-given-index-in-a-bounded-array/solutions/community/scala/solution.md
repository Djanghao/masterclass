# Scala Code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/5209429/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/5209429/)

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
object Solution {
    def getSumElements(count: Long, value: Long): Long = {
        value * count - (count * (count + 1)) / 2
    }

    def maxValue(n: Int, index: Int, maxSum: Int): Int = {
        var left = 1L
        var right = maxSum.toLong

        var result = 0

        while (left <= right) {
            val midVal: Int = (left + (right - left) / 2).toInt

            val leftCount = math.min(index.toLong, midVal - 1)
            var leftSum = getSumElements(leftCount, midVal)
            leftSum += math.max(0L, index.toLong - midVal + 1)

            val rightCount = math.min(n - index - 1L, midVal - 1)
            var rightSum = getSumElements(rightCount, midVal)
            rightSum += math.max(0L, n - index - 1L - midVal + 1)

            if (leftSum + rightSum + midVal <= maxSum) {
                result = math.max(result, midVal)
                left = midVal + 1
            } else {
                right = midVal - 1
            }
        }

        result.toInt
    }
}

```