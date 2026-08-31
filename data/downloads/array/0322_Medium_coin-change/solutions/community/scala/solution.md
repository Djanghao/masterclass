# Scala solution with dynamic programming and recursion

**Author:** dustin10
**Votes:** 4
**Link:** [https://leetcode.com/problems/coin-change/solutions/328749/](https://leetcode.com/problems/coin-change/solutions/328749/)

---

```
  object Solution {
    import scala.collection.mutable
    def coinChange(coins: Array[Int], amount: Int): Int = {
      val solutions: mutable.Map[Int, Int] = mutable.Map[Int, Int]()

      def coinChange(amount: Int): Int = {
        if (amount < 0) -1
        else if (amount == 0) 0
        else {
          solutions.getOrElse(amount, {
            val results: Array[Int] = coins
              .reverse
              .map((value: Int) => {
                coinChange(amount - value) + 1
              })
              .filter(_ > 0)

            solutions(amount) =
              if (results.isEmpty) -1
              else results.min

            solutions(amount)
          })
        }
      }

      coinChange(amount)
    }
  }
```