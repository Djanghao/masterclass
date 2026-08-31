# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/3034808/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/3034808/)

---

```
class Solution {
    func fillCups(_ amount: [Int]) -> Int {
        
        var am = amount
        var res = 0
        
        while am.reduce(0, +) > 0 {
            am = am.sorted()
            am[1] = max(0, am[1] - 1)
            am[2] = max(0, am[2] - 1)
            res += 1
        }
        
        return res
    }
}
```