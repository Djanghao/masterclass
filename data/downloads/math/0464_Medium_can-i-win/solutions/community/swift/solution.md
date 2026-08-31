# My Swift solution beats 100% runtime & memory

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/can-i-win/solutions/927222/](https://leetcode.com/problems/can-i-win/solutions/927222/)

---

My Swift solution
```
class Solution {
    func canIWin(_ maxChoosableInteger: Int, _ desiredTotal: Int) -> Bool {
        if Int(Double(maxChoosableInteger) * Double(1 + maxChoosableInteger) / 2.0) < desiredTotal { return false }
        var dp = [Int: Bool]()
        func helper(_ total: Int, _ state: Int) -> Bool {
            if let savedResult = dp[state] { return savedResult }
            var result = false
            for i in stride(from: maxChoosableInteger, through: 1, by: -1) where ((state >> i) & 1) == 0 {
                if i >= total { result = true }
                result = result || !helper(total - i, state | (1 << i))
                if result { break }
            }
            dp[state] = result
            return result
        }
        return helper(desiredTotal, 0)
    }
}
```