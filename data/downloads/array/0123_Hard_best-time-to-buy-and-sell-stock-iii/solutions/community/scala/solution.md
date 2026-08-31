# Scala

**Author:** Slakah
**Votes:** 2
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/719881/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/719881/)

---

```
object Solution {
    def maxProfit(prices: Array[Int]): Int = {
        if (prices.isEmpty) 0
        else {
            val leftProfits = prices.foldLeft((List.empty[Int], prices.head)) {
                case ((acc, min), price) =>
                    val lastProfit = acc.headOption.getOrElse(0)
                    val profit = lastProfit.max(price - min)
                    val newMin = min.min(price)
                    (profit :: acc, newMin)
            }._1
            
            val rightProfits = prices.foldRight((List.empty[Int], prices.last)) {
                case (price, (acc, max)) =>
                    val lastProfit = acc.headOption.getOrElse(0)
                    val profit = lastProfit.max(max - price)
                    val newMax = max.max(price)
                    (profit :: acc, newMax)
            }._1.reverse
            
            leftProfits.zip(rightProfits).map { case (left, right) => left + right }.max
        }
    }
}
```