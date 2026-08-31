# Dyanamic Programming with Memoization

**Author:** gatear
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/5087478/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/5087478/)

---

# Intuition
The DP state consists of remaining budget and position on the timeline.

The state evolves the following way
- buy now only if possible and go to next stock price
- skip now and go to next stock price

Return from recursive function only when we went through all prices.

`go` returns the max sell outcome so we need to subtract the allocated budget in order to get the max profit

```total selled - total budget = total profit```

# Code
```
object Solution {
  
  def maximumProfit(present: Array[Int], future: Array[Int], budget: Int): Int = {
    val memo =
      Array.ofDim[Int](present.length, budget + 1)

    def go(i: Int, remaining: Int): Int =
      if (i == present.length)
        remaining
      else if (memo(i)(remaining) != 0)
        memo(i)(remaining)
      else {
        memo(i)(remaining) =
          if (present(i) <= remaining) {
            math.max(
              go(i + 1, remaining - present(i)) + future(i),
              go(i + 1, remaining)
            )
          } else
            go(i + 1, remaining)

        memo(i)(remaining)
      }

    if (present.nonEmpty)
      math.max(go(0, remaining = budget) - budget, 0)
    else
      0
  }
}
```