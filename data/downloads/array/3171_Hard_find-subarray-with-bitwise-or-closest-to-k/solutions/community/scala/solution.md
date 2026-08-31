# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/6030482/](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/6030482/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def minimumDifference(nums: Array[Int], k: Int): Int =
    nums.iterator.drop(1).foldLeft(((nums.head-k).abs,Set(nums.head))){
      case ((mn,aSet),num) =>
        (aSet.map(_ | num) + num).pipe(bSet =>
        (bSet.map(x => (x-k).abs).min min mn, bSet)
      )}._1
}
```