# scala recursive + memoization

**Author:** tjwornjs
**Votes:** 2
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/1123774/](https://leetcode.com/problems/perfect-squares/solutions/1123774/)

---

```scala
  var m = Map.empty[Int, Int]

  def numSquares(n: Int): Int = {
    if (n == 0) 0
    else if (n == 1) 1
    else {
      val sqrt = Math.sqrt(n).toInt
      if (sqrt == 1) n
      else {
        if (m.contains(n)) m(n)
        else {
          val result = (for (i <- 1 to sqrt) yield 1 + numSquares(n - i * i)).min
          m += (n -> result)
          result
        }
      }
    }
  }
```