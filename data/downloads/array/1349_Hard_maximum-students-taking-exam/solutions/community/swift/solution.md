# swift version of most voted answer

**Author:** umam
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/2854502/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/2854502/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
https://leetcode.com/problems/maximum-students-taking-exam/solutions/503686/a-simple-tutorial-on-this-bitmasking-problem/

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m * 4^n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m * 2^n)

# Code
```
class Solution {
    func maxStudents(_ seats: [[Character]]) -> Int {
        let m = seats.count
        let n = seats[0].count

        var validRows: [Int] = .init(repeating: 0, count: m)

        for i in 0..<m {
            for j in 0..<n {
                validRows[i] = (validRows[i] << 1) + (seats[i][j] == "." ? 1 : 0)
            }
        }

        var stateSize = 1 << n
        var dp: [[Int]] = .init(repeating: .init(repeating: -1, count: stateSize), count: m)

        var ans = 0

        for i in 0..<m {
            for j in 0..<stateSize {
                if (((j & validRows[i]) == j) && ((j & (j >> 1)) == 0)) {
                    if (i == 0) {
                        dp[i][j] = j.nonzeroBitCount
                    } else {
                        for k in 0..<stateSize {
                            if ((j & (k >> 1)) == 0 && ((j >> 1) & k) == 0 && dp[i-1][k] != -1)  {
                                dp[i][j] = max(dp[i][j], dp[i-1][k] + j.nonzeroBitCount);
                            }
                        }
                    }
                     ans = max(ans, dp[i][j]);
                }
            }
        }
        return ans
    }
}
```