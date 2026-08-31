# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/3616347/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/3616347/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def finalPrices(prices: Array[Int]): Array[Int] = {
      val n = prices.length
      val stack = scala.collection.mutable.Stack[Int]()
      val res = Array.fill(n)(0)
      for (i <- 0 until n) {
        while (stack.nonEmpty && prices(stack.top) >= prices(i)) {
          val j = stack.pop()
          res(j) = prices(j) - prices(i)
        }
        stack.push(i)
      }
      while (stack.nonEmpty) {
        val j = stack.pop()
        res(j) = prices(j)
      }
      res
    }
}
```