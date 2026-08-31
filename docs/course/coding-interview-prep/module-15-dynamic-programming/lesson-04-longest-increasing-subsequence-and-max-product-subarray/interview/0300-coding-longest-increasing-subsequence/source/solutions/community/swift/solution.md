# ACCEPTED: Easy to understand approach with DP O(n²) swift

**Author:** teenuburi
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/3357009/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/3357009/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n\xB2)

- Space complexity:
O(n)

# Code
```
class Solution {
    func lengthOfLIS(_ nums: [Int]) -> Int {
        var maximum = 1
        var dp = [Int](repeating: 1, count: nums.count) 
        // start form end of array and keep track of LIS for ith element
        for i in stride(from: nums.count-1, through: 0, by: -1) {
            var item = nums[i]
            if i == nums.count-1 {
                continue
            }
            var maxm = 0 
            // if any element is grater than current then LIS will be 1 + LIS of that element
            for j in i+1...nums.count-1 { 
                // (find maximum for all upcoming elements )
                if item < nums[j] {
                    maxm = max(dp[j], maxm)
                }
            }
            dp[i] = max(maxm+1, 1) 

            maximum = max(maximum, dp[i])
        }
        return maximum
    }
}
```