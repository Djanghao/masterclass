# Scala solution with dynamic programming

**Author:** dustin10
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/372853/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/372853/)

---

```
  /**
    * Use dynamic programming and use memoization to figure out max sum at A[i] as this sub problem will occur many times.
    * At each step we figure out if it is best to use a partition of 1, 2, ... k
    */
  object Solution {
    import scala.collection.mutable
    def maxSumAfterPartitioning(A: Array[Int], K: Int): Int = {
      val solutions: mutable.Map[Int, Int] = mutable.Map.empty[Int, Int]

      def maxSumAfterPartitioning(index: Int): Int = {
        if (index >= A.length) 0
        else {
          solutions.getOrElse(index, {
            solutions(index) = Range(K, 0, -1)
              .map(K => {
                val items: Array[Int] = A.slice(index, index + K)
                (items.length * items.max) + maxSumAfterPartitioning(index + items.length)
              })
              .max

            solutions(index)
          })
        }
      }

      maxSumAfterPartitioning(0)
    }
  }
```