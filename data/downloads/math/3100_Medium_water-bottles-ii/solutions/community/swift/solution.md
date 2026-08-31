# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/4994155/](https://leetcode.com/problems/water-bottles-ii/solutions/4994155/)

---

```
class Solution {
    func maxBottlesDrunk(_ numBottles: Int, _ numExchange: Int) -> Int {
        
        var full = numBottles
        var price = numExchange
        var drank = 0

        while full >= price {
            drank += price
            full -= price - 1
            price += 1
        }

        return drank + full
    }
}
```