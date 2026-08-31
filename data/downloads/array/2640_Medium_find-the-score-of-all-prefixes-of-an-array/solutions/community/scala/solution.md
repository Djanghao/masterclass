# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/5318979/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/5318979/)

---

```scala
object Solution {
  def findPrefixScore(nums: Array[Int]): Array[Long] =
    (nums.iterator zip (nums.toList.scanLeft(0)(_ max _).drop(1)))
      .map{case (a,b) => a+b }
      .scanLeft(0L)(_ + _).drop(1).toArray
}
```