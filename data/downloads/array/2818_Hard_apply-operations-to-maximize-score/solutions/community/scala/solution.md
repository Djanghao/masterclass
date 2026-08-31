# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/4137567/](https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/4137567/)

---

``` scala
import scala.collection.mutable

object Solution {
  private val M = (1e9 + 7).toLong
  private val MX = (1e5 + 1).toInt
  private val omega = Array.ofDim[Int](MX)

  (2 until MX).foreach(i => if (omega(i) == 0) (i until MX by i).foreach(j => omega(j) += 1))

  def maximumScore(nums: List[Int], k: Int): Int = {
    val arr = nums.toArray
    val n = arr.length
    val left = Array.fill(n)(0)
    val right = Array.fill(n)(n)
    val st = mutable.Stack[Int](-1)

    arr.indices.foreach(i => {
      while (st.size > 1 && omega(arr(st.top)) < omega(arr(i))) right(st.pop()) = i
      left(i) = st.top
      st.push(i)
    })

    val ids = Array.tabulate(n)(identity)
    val sortedIds = ids.sortWith((i, j) => arr(j) - arr(i) < 0)

    var res = 1L
    var remainingK = k
    sortedIds.foreach(i => {
      val tot = (i - left(i)).toLong * (right(i) - i)
      if (tot >= remainingK) {
        res = res * pow(arr(i), remainingK) % M
        return res.toInt
      }
      res = res * pow(arr(i), tot.toInt) % M
      remainingK -= tot.toInt
    })
    res.toInt

  }

  private def pow(x: Long, n: Int): Long = {
    var res = 1L
    var base = x
    var exp = n
    while (exp > 0) {
      if (exp % 2 > 0) res = res * base % M
      base = base * base % M
      exp /= 2
    }
    res
  }
}
```