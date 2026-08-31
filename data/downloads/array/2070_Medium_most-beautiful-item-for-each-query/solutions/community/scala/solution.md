# Scala, sort both arrays, no binary search, 127ms

**Author:** VPuuska
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6037735/](https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6037735/)

---

# Code
```scala []
object Solution {
  def maximumBeauty(
      items: Array[Array[Int]],
      queries: Array[Int]
  ): Array[Int] = {
    val res = Array.ofDim[Int](queries.length)

    val its = items.sortBy(_(0))
    val qs = queries.zipWithIndex.sorted

    var curr = 0
    var ind = 0
    for (q, i) <- qs do
      while ind < its.length && its(ind)(0) <= q do
        curr = curr max its(ind)(1)
        ind += 1
      res(i) = curr

    res
  }
}

```