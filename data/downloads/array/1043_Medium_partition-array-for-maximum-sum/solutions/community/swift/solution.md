# [Accepted] + Beats 100% Runtime

**Author:** ProbablyLost
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4673023/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4673023/)

---

# Code
```
class Solution {
    func maxSumAfterPartitioning(_ arr: [Int], _ k: Int) -> Int {
        // Initialize an array to store maximum sums at each index
        var dp = Array(repeating: 0, count: arr.count + 1)

        for i in 1...arr.count {
            var maxVal = 0
            var j = 1

            // Iterate through the current partition to find the maximum value
            while j <= min(i, k) {
                maxVal = max(maxVal, arr[i - j])
                // Update the maximum sum at index i using the calculated value
                dp[i] = max(dp[i], dp[i - j] + maxVal * j)
                j += 1
            }
        }

        // Return the maximum sum after partitioning
        return dp.last!
    }
}

```