# [Scala] self-referential lazy sequence

**Author:** nizhnik
**Votes:** 5
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1017811/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1017811/)

---

```scala
object Solution {
  lazy val seq: LazyList[Int] = LazyList(0, 1, 1) #::: seq.tail.zip(seq.drop(2)).flatMap { case (a, b) => Array(a + b, b) }
  def getMaximumGenerated(n: Int): Int = seq.take(n + 1).max
}
```