# swift solution using dp

**Author:** teenuburi
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3423769/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3423769/)

---



# Code
```
class Solution {
    func numWays(_ words: [String], _ target: String) -> Int {
        var words = Array(words)
        var target = Array(target)
        var n = words[0].count
        var m = target.count

        var dp = [Int](repeating: 0, count: m+1)
        dp[0] = 1

        var count = [[Int]](repeating: [Int](repeating: 0, count: 26), count: n)

        for word in words {
            for (i, char) in word.enumerated() {
                count[i][Int(char.asciiValue!) - 97] += 1
            }
        }
        for i in 0...n-1 {
            for j in stride(from: m-1, through: 0, by: -1) {
                dp[j+1] += dp[j]*(count[i][Int(target[j].asciiValue!) - 97])%1000000007
                dp[j+1] = dp[j+1]%1000000007
            }
        }
        return dp[m]
    }
}
```