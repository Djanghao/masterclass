# Scala Solution, beats 100%

**Author:** ransin11
**Votes:** 0
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4431409/](https://leetcode.com/problems/buy-two-chocolates/solutions/4431409/)

---

# Intuition
Take the sum of min value and min of remaining array elements and then compare with "money"

# Approach
Take the sum of min value and min of remaining array elements and then compare with "money"

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
object Solution {
  def buyChoco(prices: Array[Int], money: Int): Int = {

    val totalChocoPrice = prices.min + prices.diff(Array(prices.min)).min

    if (totalChocoPrice <= money) {
      money - totalChocoPrice
    }
    else
      money
  }
}
```