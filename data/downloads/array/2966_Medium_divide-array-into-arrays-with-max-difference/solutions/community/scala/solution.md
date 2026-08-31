# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/5485835/](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/5485835/)

---

```scala
object Solution {
  def divideArray(nums: Array[Int], k: Int): Array[Array[Int]] =
    lazy val x3 = nums.sorted.grouped(3).to(Array)
    if(x3.forall(a => (a.last-a.head)<=k)) x3 else Array()
}
```