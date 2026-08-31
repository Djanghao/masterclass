# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5657410/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5657410/)

---

```scala
object Solution {
  var DEBUG = false
  //DEBUG = true
  def waysToSplitArray(nums: Array[Int]): Int =
    ( nums.iterator.scanLeft(0L)(_ + _)
      zip
      nums.reverseIterator.scanLeft(0L)(_ + _).toList.reverse
    ).drop(1).take(nums.size-1).count{case (a,b) => a>=b}
}
```