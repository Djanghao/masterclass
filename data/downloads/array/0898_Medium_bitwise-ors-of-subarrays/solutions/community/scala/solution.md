# scala onliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/5785960/](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/5785960/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def subarrayBitwiseORs(arr: Array[Int]): Int = 
    arr.iterator.scanLeft(Set.empty[Int]){case (aSet,a) =>
      aSet.map(_ | a) + a
    }.drop(1).reduceLeft(_ ++ _).size
}
```