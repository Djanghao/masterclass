# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/3367737/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/3367737/)

---

```
class Solution {
    func getDescentPeriods(_ prices: [Int]) -> Int {
        
        var cnt = [Int: Int]()
        var cur = 0
        var prv = -1

        for p in prices {
            if p == prv - 1 {
                cur += 1
            }
            else {
                if cur > 1 { cnt[cur, default: 0] += 1 }
                cur = 1
            }
            prv = p
        }

        if cur > 1 { cnt[cur, default: 0] += 1 }

        return prices.count + cnt
            .map { $0.value * (1..<$0.key).reduce(0, +) }
            .reduce(0, +)
    }
}
```