# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4174663/](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4174663/)

---

```scala
import scala.collection.mutable

object Solution {
  def countSubMultisets(nums: List[Int], l: Int, r: Int): Int = {
    val M = 1000000007
    var total = 0
    val cnt = mutable.HashMap.empty[Int, Int].withDefaultValue(0)
    nums.foreach(x => {
      total += x
      cnt(x) += 1
    })
    if (l > total) return 0

    val r1 = r.min(total)
    val f = Array.fill[Int](r1 + 1)(0)
    f(0) = cnt.getOrElse(0, 0) + 1
    cnt.remove(0)

    var sum = 0
    cnt.foreach { case (x, c) =>
      val newF = f.clone()
      sum = math.min(sum + x * c, r1)
      (x to sum).foreach(j => {
        newF(j) = (newF(j) + newF(j - x)) % M
        if (j >= (c + 1) * x) newF(j) = (newF(j) - f(j - (c + 1) * x) + M) % M
      })
      Array.copy(newF, 0, f, 0, newF.length)
    }

    var res = 0
    (l to r1).foreach(i => res = (res + f(i)) % M)
    res
  }
}
```