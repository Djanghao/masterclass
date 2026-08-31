# Swift, recursion +memo

**Author:** TatianaVol
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3568988/](https://leetcode.com/problems/stone-game-iii/solutions/3568988/)

---


# Code
```
class Solution {

    var stoneValue: [Int] = []
    var count: Int = 0
    var dp: [Int?] = []

    func stoneGameIII(_ stoneValue: [Int]) -> String {
        
        self.count = stoneValue.count
        self.stoneValue = stoneValue + [0, 0]

        dp = Array(repeating: nil, count: count + 1)
        let result = recurse(0)
        
        return result == 0 ? "Tie" : (result > 0 ? "Alice" : "Bob")
    }

    func recurse(_ i: Int) -> Int {
        
        if i >= count { return 0 }

        if let value = dp[i] { return value }

        dp[i] = max(
            stoneValue[i] - recurse(i + 1),
            stoneValue[i] + stoneValue[i + 1] - recurse(i + 2),
            stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - recurse(i + 3)
        )

        return dp[i]!
    }
}
```