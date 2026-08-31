# Go clean solution beats 100% runtime

**Author:** singhsaubhik
**Votes:** 28
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2048073/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2048073/)

---

```
func maxProfit(prices []int) int {
    var profit = 0
    var minPrice = prices[0]
    
    for i := 1; i < len(prices); i++ {
        // If we find any price which is lower than the current minPrice
        // update the minPrice
        if prices[i] < minPrice {
            minPrice = prices[i]
        } else if (prices[i] - minPrice) > profit {
            // If diff of current stock with minPrice is greater
            // update the profit
            profit = prices[i] - minPrice
        }
    }
    
    return profit
}
```