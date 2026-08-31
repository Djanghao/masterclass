# Scala, simple dp

**Author:** user8076uV
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-the-array/solutions/4333105/](https://leetcode.com/problems/restore-the-array/solutions/4333105/)

---



# Code
```
object Solution {
  def numberOfArrays(s: String, k: Int): Int = {
  import scala.collection.mutable
  val solutions = mutable.Map.empty[(Int, Int), Int]
  val digits = s.map(_.getNumericValue)
  val n = s.length
  val m = 1000000007
  def value(i: Int, j: Int): BigInt = BigInt(s.substring(j, i+1))
  
  def f(i: Int, j: Int): Int =
    solutions.getOrElseUpdate((i,j),

      if (s(j) == '0' || value(i, j) > k) 0
      else if (i == n-1) 1
      else {
          val noSplit = f(i + 1, j)
          val split = f(i + 1, i + 1)
          (noSplit + split) % m
      }

    )
  
  f(0, 0)
  }

}

```