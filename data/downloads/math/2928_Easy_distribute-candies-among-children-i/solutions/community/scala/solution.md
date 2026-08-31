# [scala] - brute force

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4321631/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4321631/)

---

# Code
```
object Solution {
    def distributeCandies(n: Int, limit: Int): Int = {
    val totals =
      for {
        i <- 0 to limit
        j <- 0 to limit
        k <- 0 to limit
      } yield i + j + k

    totals.count(_ == n)
  }
}
```
