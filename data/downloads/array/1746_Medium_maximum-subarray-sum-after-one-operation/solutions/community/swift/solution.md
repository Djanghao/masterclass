# Swift solution as per hint provided

**Author:** Prasann_1433
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/4336544/](https://leetcode.com/problems/maximum-subarray-sum-after-one-operation/solutions/4336544/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(2n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    func maxSumAfterOperation(_ nums: [Int]) -> Int {
        var dp1 = Array(repeating: 0, count: nums.count)
        var dp = Array(repeating: dp1, count: 2)

        dp[0][0] = nums[0]
        dp[1][0] = nums[0] * nums[0]

        var maxSum = nums[0] * nums[0]

        for i in 1..<nums.count {

            dp[0][i] = max(nums[i], nums[i] + dp[0][i - 1])
        }

        for i in 1..<nums.count {
            dp[1][i] = max(nums[i] * nums[i], nums[i] * nums[i] + dp[0][i - 1], nums[i] + dp[1][i - 1])
            maxSum = max(maxSum, dp[1][i])
        }

        return maxSum
    }
}
```