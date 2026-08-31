# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1178963/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1178963/)

---

Swift solution
```
class Solution {
    func maxProfit(_ inventory: [Int], _ orders: Int) -> Int {
        let inventory = inventory.sorted(by: { $0 > $1 })
        var c = inventory.count, i = 0, cur = inventory[i], result = 0, orders = orders
        while orders > 0 {
            while i < c && inventory[i] == cur { i += 1 }
            let next = i == c ? 0 : inventory[i]
            let maxHeight = cur - next
            let maxCount = i * maxHeight
            let (height, remainder) = orders < maxCount ? (orders / i, orders % i) : (maxHeight, 0)
            let count = min(orders, maxCount)
            result += (2 * cur - height + 1) * height * i / 2 + (cur - height) * remainder
            orders -= count
            cur = next
        }
        return result % 1_000_000_007
    }
}
```