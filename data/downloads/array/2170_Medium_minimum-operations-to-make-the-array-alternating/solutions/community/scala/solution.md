# scala twoliner, count and compare two most frequent odds / evens

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/5932331/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/5932331/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def minimumOperations(nums: Array[Int]): Int = {
  lazy val fs = List(0,1).map(List.range(_,nums.length,2).map(nums)
    .groupMapReduce(identity)(_ => 1)(_ + _)
    .toList.sortBy(- _._2).take(2))
  nums.length - (if(nums.length == 1) 1
    else if(fs.head.head._1 != fs.last.head._1) fs.map(_.head).map(_._2).sum
    else List(0,1).map(i => 
      fs(i).head._2 + fs(1-i).drop(1).headOption.map(_._2).getOrElse(0)).max)
  }
}

```