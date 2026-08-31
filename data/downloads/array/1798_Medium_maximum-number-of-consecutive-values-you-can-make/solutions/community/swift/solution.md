# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/3408232/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/3408232/)

---

```
class Solution {
    func getMaximumConsecutive(_ coins: [Int]) -> Int {
        
        let coins = coins.sorted()
        var current = 0

        for coin in coins {
            guard coin <= current + 1 else { break }
            current += coin
        }

        return current + 1
    }
}
```