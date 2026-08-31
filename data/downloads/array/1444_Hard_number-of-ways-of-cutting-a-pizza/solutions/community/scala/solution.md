# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3363544/](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3363544/)

---

# Code
```
object Solution {
    def ways(pizza: Array[String], k: Int): Int = {
// Find the number of rows and columns in the pizza
    val rows = pizza.length
    val cols = pizza(0).length()

    // Initialize an apples array to store the number of apples in each sub-pizza
    val apples = Array.ofDim[Int](rows + 1, cols + 1)

    // Initialize a dp array to store the number of ways to cut the pizza into k pieces
    val dp = Array.ofDim[Int](k, rows, cols)

    // Calculate the number of apples in each sub-pizza
    for (row <- rows - 1 to 0 by -1) {
      for (col <- cols - 1 to 0 by -1) {
        // The number of apples in a sub-pizza is the sum of the number of apples in the sub-pizza below it, the sub-pizza to the right of it, and the sub-pizza to the bottom-right of it, minus the double-counted apples in the sub-pizza to the bottom-right of it
        apples(row)(col) = (if (pizza(row).charAt(col) == 'A') 1 else 0) +
          apples(row + 1)(col) + apples(row)(col + 1) - apples(row + 1)(col + 1)

        // If there is at least one apple in the sub-pizza, there is one way to cut the pizza into one piece (i.e., the entire pizza)
        dp(0)(row)(col) = if (apples(row)(col) > 0) 1 else 0
      }
    }

    // Initialize a mod variable to keep track of the modulo
    val mod = 1000000007

    // Calculate the number of ways to cut the pizza into k pieces
    for (remain <- 1 until k) {
      for (row <- 0 until rows) {
        for (col <- 0 until cols) {
          // Cut the pizza vertically and give the left part to a person
          for (next_row <- row + 1 until rows) {
            if (apples(row)(col) - apples(next_row)(col) > 0) {
              dp(remain)(row)(col) += dp(remain - 1)(next_row)(col)
              dp(remain)(row)(col) %= mod
            }
          }

          // Cut the pizza horizontally and give the upper part to a person
          for (next_col <- col + 1 until cols) {
            if (apples(row)(col) - apples(row)(next_col) > 0) {
              dp(remain)(row)(col) += dp(remain - 1)(row)(next_col)
              dp(remain)(row)(col) %= mod
            }
          }
        }
      }
    }

    // Return the number of ways to cut the pizza into k pieces
    dp(k - 1)(0)(0)
    }
}
```