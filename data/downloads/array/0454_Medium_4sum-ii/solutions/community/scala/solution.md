# Scala solution

**Author:** dustin10
**Votes:** 1
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/350444/](https://leetcode.com/problems/4sum-ii/solutions/350444/)

---

Find combinations in which A+B = C+D
```
  object Solution {
    def fourSumCount(A: Array[Int], B: Array[Int], C: Array[Int], D: Array[Int]): Int = {
      val aPlusB: Map[Int, Int] = (for {
        i <- A
        j <- B
      } yield i + j).groupBy(identity).mapValues(_.length)

      val cPlusD: Map[Int, Int] = (for {
        i <- C
        j <- D
      } yield i + j).groupBy(identity).mapValues(_.length)

      aPlusB
        .map(tuple => {
          val (value: Int, count: Int) = tuple
          cPlusD.getOrElse(-value, 0) * count
        })
        .sum
    }
  }
  ```