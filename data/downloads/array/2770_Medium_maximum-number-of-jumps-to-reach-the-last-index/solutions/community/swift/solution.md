# 💡Swift - Optimal Solution - Dynamic Programming

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/5028485/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/5028485/)

---

# Solution
```swift
class Solution {
    func maximumJumps(_ nums: [Int], _ target: Int) -> Int {
        let n = nums.count
        var dp = Array(repeating: -1, count: n)
        dp[0] = 0
        for i in 0..<n where dp[i] >= 0 {
            for j in (i+1)..<n {
                if abs(nums[j] - nums[i]) <= target {
                    dp[j] = max(dp[j], dp[i] + 1)
                }
            }
        }
        return dp[n - 1]
    }
}
```
# Complexity
- Time: $$O(n^2)$$
- Space: $$O(n)$$