# Scala O(mn^2)

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/2039350/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/2039350/)

---

```
object Solution {
  def numSubmat(mat: Array[Array[Int]]): Int = {
    val m = mat.length
    val n = mat.headOption.map(_.length).getOrElse(0)

    val rowCumSums = mat.map(_.scan(0)(_ + _))

    Iterator
      .range(0, n)
      .flatMap(j => Iterator.range(j + 1, n + 1).map(j -> _))
      .flatMap { case (from, until) =>
        def it = Iterator.range(0, m).filter(i => rowCumSums(i)(until) - rowCumSums(i)(from) != until - from)
        Iterator(0).concat(it.map(_ + 1)).zip(it.concat(Iterator(m)))
      }
      .map { case (from, until) => until - from }
      .map(k => k * (k + 1) / 2)
      .sum
  }
}
```