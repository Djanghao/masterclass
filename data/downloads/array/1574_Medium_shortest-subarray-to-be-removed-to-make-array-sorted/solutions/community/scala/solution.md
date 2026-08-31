# scala O(n) solution. shortest contiguous subsequence to be removed

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6051324/](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6051324/)

---

```scala []
object Solution {
  def findLengthOfShortestSubarray(arr: Array[Int]): Int = {
    val pxfEnd = Iterator.range(1,arr.length)
      .map(i => arr(i)-arr(i-1) -> i).takeWhile(_._1>=0)
      .to(LazyList).lastOption.map(_._2).getOrElse(0)
    val sfxStart = Iterator.range(arr.length-2,-1,-1)
      .map(i => arr(i+1)-arr(i) -> i).takeWhile(_._1>=0)
      .to(LazyList).lastOption.map(_._2).getOrElse(arr.length-1)
    Iterator.range(0,pxfEnd+1).scanLeft(sfxStart,sfxStart){
      case ((_,j),i) =>
        lazy val j1 = Iterator.range(j max (i+1), arr.length)
          .dropWhile(arr(i) > arr(_)).take(1).to(List)
          .headOption.getOrElse(arr.length)
        (j1-i-1,j1)
    }.map(_._1).min
  }
}
```