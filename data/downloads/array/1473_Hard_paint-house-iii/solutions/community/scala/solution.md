# scala recursion solution

**Author:** Anamorphism
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/676511/](https://leetcode.com/problems/paint-house-iii/solutions/676511/)

---

```
object Solution {
  def minCost(
      houses: Array[Int],
      cost: Array[Array[Int]],
      m: Int,
      n: Int,
      target: Int
  ): Int = {
    val memo =
      scala.collection.mutable.HashMap[(Int, Int, Int), Int]()
    def helper(
        houses: Array[Int],
        cost: Array[Array[Int]],
        m: Int,
        n: Int,
        target: Int,
        i: Int,
        prev: Int,
        neighbourCount: Int
    ): Int = {
      if (i == m) {
        if (neighbourCount == target) {
          0
        } else {
          Int.MaxValue
        }
      } else {
        memo.get((i, prev, neighbourCount)) match {
          case Some(v) => v
          case None => {
            if (houses(i) == 0) {
              val r = (0 until n)
                .map(j => {
                  val v = helper(
                    houses,
                    cost,
                    m,
                    n,
                    target,
                    i + 1,
                    j + 1,
                    if (prev == j + 1) neighbourCount
                    else neighbourCount + 1
                  )
                  if (v == Int.MaxValue) {
                    Int.MaxValue
                  } else {
                    v + cost(i)(j)
                  }
                })
                .min
              memo.put((i, prev, neighbourCount), r)
            } else {
              memo.put(
                (i, prev, neighbourCount),
                helper(
                  houses,
                  cost,
                  m,
                  n,
                  target,
                  i + 1,
                  houses(i),
                  if (prev == houses(i)) neighbourCount else neighbourCount + 1
                )
              )
            }
            memo((i, prev, neighbourCount))
          }
        }
      }
    }
    val result = helper(houses, cost, m, n, target, 0, -1, 0)
    if (result == Int.MaxValue) {
      -1
    } else {
      result
    }

  }
}

```