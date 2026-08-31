# Scala simple fold left

**Author:** jkalmeij
**Votes:** 4
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/1806308/](https://leetcode.com/problems/summary-ranges/solutions/1806308/)

---

```scala
object Solution {
  val fmtRange = (a: Int, b: Int) => if (a != b) s"$a->$b" else s"$a"

  def ranges(nums: Array[Int]): List[(Int, Int)] =
    nums
      .foldLeft(List.empty[(Int, Int)]) { (acc, v) =>
        acc match {
          case (start, end) :: tail if end + 1 == v => (start, v) :: tail
          case _                                    => (v, v) :: acc
        }
      }
      .reverse

  def summaryRanges(nums: Array[Int]): List[String] = ranges(nums).map(fmtRange.tupled)
}
```