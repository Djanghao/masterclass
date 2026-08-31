# Kotlin with time complexity O(N) and space complexity O(1)

**Author:** jasonechiu
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/3448880/](https://leetcode.com/problems/maximum-subarray/solutions/3448880/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For the fisrt sight, the question is about sum of subArray, it is easy to think of the prefix sum. However the array contains the negative numbers which are not good for max sum. We combine the two intuition "prefix sum" and "negative". If the prefix sum is negative, which is not help the max sum. So whenever the prefix sum is negative, we reset the prefix sum as current num.
# Approach
<!-- Describe your approach to solving the problem. -->
```
prefixSum = if (prefixSum < 0) num else (prefixSum + num)
maxSum = Math.max(maxSum, prefixSum)
```
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun maxSubArray(nums: IntArray): Int {
        var maxSum = nums[0]
        var prefixSum = 0
        for (num in nums) {
            prefixSum = if (prefixSum < 0) num else (prefixSum + num)
            maxSum = Math.max(maxSum, prefixSum)
        }
        return maxSum
    }
}
```