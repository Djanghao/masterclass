# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/2943411/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/2943411/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        var reset = 0
        var held = Int.min
        var sold = Int.min

        for price in prices {
            let prevSold = sold

            sold = held + price
            held = max(reset - price, held)
            reset = max(reset, prevSold)
        }

        return max(reset, sold)
    }
}
```