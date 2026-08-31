# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-ii/solutions/4137352/](https://leetcode.com/problems/beautiful-towers-ii/solutions/4137352/)

---

``` scala
object Solution {
  def maximumSumOfHeights(maxHeights: List[Int]): Long = {
    val n = maxHeights.length
    val arr = maxHeights.toArray
    maxHeights.indices./:(-1L)((mx, idx) => {
      if (idx > 0 && arr(idx) <= arr(idx - 1)) mx
      else if (idx < n - 1 && idx > 0 && arr(idx) < arr(idx + 1)) mx
      else mx.max({
        val (a, _) = (0 until idx).:\\((0L, arr(idx)))(
          (id: Int, u: (Long, Int)) => {
            val (ss, h) = u
            val nh = h.min(arr(id))
            (ss + nh, nh)
          }
        )
        val (b, _) = (idx until n)./:((0L, arr(idx)))(
          (u: (Long, Int), id: Int) => {
            val (ss, h) = u
            val nh = h.min(arr(id))
            (ss + nh, nh)
          }
        )
        a + b
      })
    })
  }
}
```