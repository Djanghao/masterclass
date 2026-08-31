# Solved with the help of LCS with DP - bottom up approach

**Author:** sudhatiwari22
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/5796226/](https://leetcode.com/problems/shortest-common-supersequence/solutions/5796226/)

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
```swift []
class Solution {
    func shortestCommonSupersequence(_ str1: String, _ str2: String) -> String {
        let arr1 = Array(str1)
        let arr2 = Array(str2)

        let m = arr1.count
        let n = arr2.count

        var dp = Array(repeating: Array(repeating: 0, count: n + 1), count: m + 1)
        var superSequence = ""

        for i in 1..<(m + 1) {
            for j in 1..<(n + 1) {
                if arr1[i - 1] == arr2[j - 1] {
                    dp[i][j] = 1 + dp[i - 1][j - 1]
                } else {
                    dp[i][j] = max(dp[i - 1][j],dp[i][j - 1])
                }
            }
        }

        var i = m
        var j = n

        while(i > 0 && j > 0) {
            if arr1[i - 1] == arr2[j - 1] {
                superSequence += String(arr1[i - 1])
                i -= 1
                j -= 1
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                superSequence += String(arr1[i - 1])
                i -= 1
            } else {
                superSequence += String(arr2[j - 1])
                j -= 1
            }
        }

        while(i > 0) {
            superSequence += String(arr1[i - 1])
            i -= 1
        }
        while(j > 0) {
            superSequence += String(arr2[j - 1]) 
            j -= 1
        }

        return String(superSequence.reversed())
    }
}
```