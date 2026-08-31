# [Swift] DP Readable Solution

**Author:** NicolasCombe5555
**Votes:** 2
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/1139090/](https://leetcode.com/problems/ones-and-zeroes/solutions/1139090/)

---

##### dp[i][j] = maximum number of subsets I can take while having *i zeroes* and *j ones*
```swift
final class Solution {
    // O(m*n*w) time | O(m*n) space
    func findMaxForm(_ strs: [String], _ m: Int, _ n: Int) -> Int {
        var dp = Array(
            repeating: Array(repeating: 0, count: n+1),
            count: m+1
        )
        
        for word in strs {
            let ones = word.filter { $0 == "1" }.count
            let zeroes = word.filter { $0 == "0" }.count
            
            for i in stride(from: m, through: zeroes, by: -1) {
                for j in stride(from: n, through: ones, by: -1){
                    dp[i][j] = max(dp[i][j], dp[i-zeroes][j-ones]+1)
                }
            }
        }
        
        return dp[m][n]
    }
}
```