# Swift solution faster than 51.16% XD

**Author:** yusatrtru
**Votes:** 1
**Link:** [https://leetcode.com/problems/coin-change-ii/solutions/752380/](https://leetcode.com/problems/coin-change-ii/solutions/752380/)

---

```swift
class Solution {
    func change(_ amount: Int, _ coins: [Int]) -> Int {
        if coins.count == 0 && amount == 0 { return 1 }
        if amount == 0 {
            if amount < coins[0] { return 1 }
        }
            
        var dp = Array(repeating: 0, count: amount + 1)
        dp[0] = 1
        
        for coin in coins {
            if coin > amount { break }   
            for i in coin...amount {
                dp[i] = dp[i] + dp[i - coin]    
            }
        }
        print(dp)
        return dp[amount]
    }
}
```