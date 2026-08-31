# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/3497666/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/3497666/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maxProfit(k: Int, prices: Array[Int]): Int = {
      if (k >= prices.length / 2) prices.sliding(2).map(m=> math.max(0, m.last - m.head)).sum
      else {
        val profits = Array.fill(k + 1)(0)
        val buys = Array.fill(k + 1)(Int.MaxValue)
        for (price <- prices)
          for (i <- 1 to k) {
            buys(i) = math.min(buys(i), price - profits(i - 1))
            profits(i) = math.max(profits(i), price - buys(i))
          }
        profits(k)
      }
    }
}
```