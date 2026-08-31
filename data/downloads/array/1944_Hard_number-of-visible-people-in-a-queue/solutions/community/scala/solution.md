# scala mutable monostack

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5695753/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5695753/)

---

Because immutable solution does not satisfy memory constrains
```scala []
object Solution {
  def canSeePersonsCount(heights: Array[Int]): Array[Int] = {
    val ans = Array.ofDim[Int](heights.length)
    val stack = Array.ofDim[Int](heights.length)
    stack(0) = heights.last
    heights.reverseIterator.drop(1).foldLeft((heights.length-2,1)) {
        case ((idx,stackSz),height) =>
          lazy val cnt = Iterator.range(stackSz-1,-1,-1).takeWhile(stack(_) < height).length
          lazy val stackSz1 = stackSz-cnt
          ans(idx) = cnt + (stackSz-cnt).sign
          stack(stackSz1) = height
          (idx-1, stackSz1+1)
      }
    ans
  }
}
```