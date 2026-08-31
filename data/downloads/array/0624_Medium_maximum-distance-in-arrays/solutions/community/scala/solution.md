# scala oneliner for two integers from two different arrays

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5644809/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5644809/)

---

> two integers from two **different** arrays
```scala
object Solution {
  def maxDistance(arrays: List[List[Int]]): Int =
    (for{
      (a,i) <- arrays.map(_.head).zipWithIndex.toList.sorted.take(2)
      (b,j) <- arrays.map(_.last).zipWithIndex.toList.sorted.reverse.take(2)
      if i != j
    } yield { b-a }).max
}
```