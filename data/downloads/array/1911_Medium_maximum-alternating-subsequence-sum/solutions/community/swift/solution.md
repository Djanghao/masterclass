# DP | Recursion - Memo | Top Down

**Author:** vikashiiitb
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/4644604/](https://leetcode.com/problems/maximum-alternating-subsequence-sum/solutions/4644604/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
class Solution {\r
    \r
    func solve(_ idx: Int,_ isEven: Bool,_ nums: [Int],_ dp: inout [[Int]]) -> Int {\r
        if idx >= nums.count {\r
            return 0\r
        }\r
\r
        var col = isEven ? 0 :1\r
        if dp[idx][col] != -1 {\r
            return dp[idx][col]\r
        }\r
\r
        var skip = solve(idx + 1, isEven, nums, &dp)\r
        var val = nums[idx]\r
        if !isEven {\r
            val = -val\r
        }\r
        var take = solve(idx + 1, !isEven, nums, &dp) + val\r
        dp[idx][col] = max(take, skip)\r
        return dp[idx][col]\r
    }\r
\r
    func maxAlternatingSum(_ nums: [Int]) -> Int {\r
        var dp = Array(repeating: Array(repeating: -1, count: 2), count: nums.count)\r
        return solve(0, true, nums, &dp)\r
    }\r
}\r
```