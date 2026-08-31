# KOTLIN and JAVA solution using Kadane algo

**Author:** anlk
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/6053548/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/6053548/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition
A circular array allows subarrays to wrap around. The problem can be solved in two parts:

- Maximum Subarray Without Wrap: Use Kadane\u2019s Algorithm to find the maximum sum of a standard (non-circular) subarray.
- Maximum Subarray With Wrap: Calculate the total array sum, then subtract the minimum subarray sum (computed with a variation of Kadane\u2019s Algorithm). This gives the maximum sum for a subarray that wraps around the array.

Kadane\u2019s Algorithm uses dynamic programming. It keeps track of the maximum sum encountered so far and the maximum sum ending at the current position.

# Approach
- Compute the maximum subarray sum using Kadane\u2019s Algorithm.
- Compute the minimum subarray sum using Kadane\u2019s Algorithm on the negated array.
- Calculate the total array sum.
- Compute the wrapped sum as total_sum - min_sum.
- The result is the maximum of max_sum (non-wrap) and wrapped_sum.


# Complexity
- Time complexity: $$O(n)$$ Kadane\u2019s Algorithm runs in linear time for both maximum and minimum subarray sums.

- Space complexity: $$O(1)$$ Only constant extra space is used.

# Code
```Kotlin []
class Solution {
    fun maxSubarraySumCircular(nums: IntArray): Int {
        var totalSum = 0
        var maxSum = Int.MIN_VALUE
        var minSum = Int.MAX_VALUE
        var currentMax = 0
        var currentMin = 0

        for (num in nums) {
            totalSum += num

            // Kadane's for max subarray sum
            currentMax = maxOf(num, currentMax + num)
            maxSum = maxOf(maxSum, currentMax)

            // Kadane's for min subarray sum
            currentMin = minOf(num, currentMin + num)
            minSum = minOf(minSum, currentMin)
        }

        // Handle case where all elements are negative
        if (maxSum < 0) {
            return maxSum
        }

        // Return the maximum of non-wrapped and wrapped subarray sums
        return maxOf(maxSum, totalSum - minSum)
    }
}
```

```Java []
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int totalSum = 0, maxSum = Integer.MIN_VALUE, minSum = Integer.MAX_VALUE;
        int currentMax = 0, currentMin = 0;

        for (int num : nums) {
            totalSum += num;

            // Kadane's for max subarray sum
            currentMax = Math.max(num, currentMax + num);
            maxSum = Math.max(maxSum, currentMax);

            // Kadane's for min subarray sum
            currentMin = Math.min(num, currentMin + num);
            minSum = Math.min(minSum, currentMin);
        }

        // Handle case where all elements are negative
        if (maxSum < 0) {
            return maxSum;
        }

        // Return the maximum of non-wrapped and wrapped subarray sums
        return Math.max(maxSum, totalSum - minSum);
    }
}
```