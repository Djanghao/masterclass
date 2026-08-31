# Time - O(t*n). Space - O(t).

**Author:** barabash
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4223080/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4223080/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(t*n)$$

- Space complexity:
$$O(t)$$

# Code
```
class Solution {
    func lengthOfLongestSubsequence(_ nums: [Int], _ target: Int) -> Int {
        var dp = [1] + Array(repeating: 0, count: target)
        nums.forEach { num in
            for i in stride(from: target, through: num, by: -1) where dp[i - num] > 0 {
                dp[i] = max(dp[i], dp[i - num] + 1)
            }
        }
        return dp[target] > 0 ? dp[target] - 1 : -1
    }
}
```