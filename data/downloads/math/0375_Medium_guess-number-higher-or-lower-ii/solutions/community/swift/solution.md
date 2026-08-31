# Simple solution in swift which beats 100.00% of users with Swift

**Author:** RakeshYadavLeetcode
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/4854507/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/4854507/)

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
class Solution {
    func getMoneyAmount(_ n: Int) -> Int {
        var dp: [[Int]] = Array(repeating: Array(repeating: -1, count: n + 1), count: n + 1)
        return self.solveUsingRecursion(1, n, &dp)
    }

    func solveUsingRecursion(_ start: Int, _ end: Int, _ dp: inout [[Int]]) -> Int {
        if start >= end {
            return 0
        }

        if dp[start][end] != -1 {
            return dp[start][end]
        }

        var ans: Int = Int.max
        for i in start...end {
            ans = min(ans, i + max(self.solveUsingRecursion(start, i - 1, &dp), self.solveUsingRecursion(i+1, end, &dp)))
        }

        dp[start][end] = ans
        return dp[start][end]
    }
}
```