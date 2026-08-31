# Efficient Scala solution

**Author:** tumakha
**Votes:** 5
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/852097/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/852097/)

---

```scala
/**
 * @author Yuriy Tumakha
 */
  def maxProfit(prices: Array[Int]): Int =
    prices.foldLeft((Int.MaxValue, 0)) {
      case ((minPrice, maxProfit), price) => (minPrice min price, maxProfit max (price - minPrice))
    }._2
```