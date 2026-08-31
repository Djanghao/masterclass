# Simple Solution ✅ Beats 92%

**Author:** ProbablyLost
**Votes:** 1
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4431749/](https://leetcode.com/problems/buy-two-chocolates/solutions/4431749/)

---

# Code
```
class Solution {
    func buyChoco(_ prices: [Int], _ money: Int) -> Int {
        guard prices.count >= 2 else {
            // Handle edge case when there are fewer than 2 prices
            return money >= prices.first ?? 0 ? 0 : money
        }

        var lowestPrice = Int.max
        var secondLowestPrice = Int.max

        for price in prices {
            if price <= lowestPrice {
                secondLowestPrice = lowestPrice
                lowestPrice = price
            } else if price < secondLowestPrice {
                secondLowestPrice = price
            }
        }

        let totalSpent = lowestPrice + secondLowestPrice
        let remainingMoney = money - totalSpent

        return remainingMoney >= 0 ? remainingMoney : money
    }
}

```