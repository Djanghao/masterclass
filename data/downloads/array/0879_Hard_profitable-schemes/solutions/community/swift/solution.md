# easy solution in swift

**Author:** imrandeepm
**Votes:** 0
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/3441726/](https://leetcode.com/problems/profitable-schemes/solutions/3441726/)

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
    func profitableSchemes(_ n: Int, _ minProfit: Int, _ group: [Int], _ profit: [Int]) -> Int {
     let mod = 1_000_000_007
     let len = group.count
    
     var dp = Array(repeating: Array(repeating: 0, count: minProfit + 1), count: n + 1)
     for i in 0...n {
        dp[i][0] = 1
      }
    
    for i in 0..<len {
        let g = group[i]
        let p = profit[i]
        
        for j in stride(from: n, through: g, by: -1) {
            for k in stride(from: minProfit, through: 0, by: -1) {
                dp[j][k] = (dp[j][k] + dp[j - g][max(0, k - p)]) % mod
            }
        }
    }
    
    return dp[n][minProfit]
    }
}
```