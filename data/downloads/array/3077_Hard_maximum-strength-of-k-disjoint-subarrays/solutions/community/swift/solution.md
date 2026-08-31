# 💡Swift - Optimal Solution - Dynamic Programming + Two Pointers

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4851329/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4851329/)

---

# Algorithm

$strength = s[1] * k - s[2] * (k - 1) + s[3] * (k - 2) + ... + s[k] * 1$

In simple terms, we can split this formula into parts using components, where each component is represented by:

$component = sum[i] * (-1)^i *(x - i)$ (0-indexed), where $i$ represents the index of the subarray.

With that understanding, let's define the DP matrix as follows. $dp(i,j)$ represents the maximum achievable strength when splitting the original array into $i$ disjoint subarrays up to index $j$. NOTE: This is not always possible. For instance, a subrange of the array cannot be split into more subarrays than its length.

To understand how to define the DP, we need to find the subarray at each index of the current row of DP that maximizes $dp[i][j]$. This occurs when the previous components $dp[i-1][j]$ and the current one result in the maximum sum. However, there's no need to iterate over the entire array to find the best possible index to split the space between the start of the original array and index $j$, as this split location moves in one direction only. We'll use the variables $left$ and $right$ to represent the subarray of the array where the current component resides. Now, we define the DP as follows:

$dp[i][right + 1] = max(dp[i][right], sum * x + dp[i-1][left])$

# Solution
```swift
class Solution {
    func maximumStrength(_ nums: [Int], _ k: Int) -> Int {
        let n = nums.count
        var prevDP = Array(repeating: 0, count: n + 1)
        for i in 0..<k {
            let x = (k - i) * (i % 2 == 0 ? 1 : -1)
            var dp = Array(repeating: Int.min, count: n + 1)
            var left = i
            var sum = 0
            for right in left..<n {
                if prevDP[right] > sum * x + prevDP[left] {
                    left = right
                    sum = 0
                }
                sum += nums[right]
                dp[right + 1] = max(dp[right], sum * x + prevDP[left])
            }
            prevDP = dp
        }
        return prevDP[n]
    }
}
```
# Complexity
- Time: $$O(n \\cdot k)$$
- Space: $$O(n)$$