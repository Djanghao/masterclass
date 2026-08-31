# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/5087424/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/5087424/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxProfit(_ prices: [Int], _ fee: Int) -> Int {
        var free = 0
        var hold = -prices[0]
        for price in prices {
            let tmp = free
            free = max(free, hold + price - fee)
            hold = max(hold, tmp - price)
        }
        return free
    }
}
```