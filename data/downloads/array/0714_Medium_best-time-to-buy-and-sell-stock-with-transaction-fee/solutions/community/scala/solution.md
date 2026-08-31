# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3670809/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3670809/)

---

```
object Solution {
  def maxProfit(prices: Array[Int], fee: Int): Int =
    prices.iterator.drop(1).foldLeft((0, -prices.head)){case ((free,hold),price) =>
      (free max(hold + price - fee)) -> (hold max (free - price))
    }._1
}
```