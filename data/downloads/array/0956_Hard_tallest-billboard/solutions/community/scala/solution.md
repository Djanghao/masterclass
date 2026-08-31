# Scala foldLeft

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/3677130/](https://leetcode.com/problems/tallest-billboard/solutions/3677130/)

---

```
object Solution {
  def tallestBillboard(rods: Array[Int]): Int = {
    rods.foldLeft(Map(0 -> 0)) { case (tallestForDiff, rod) =>
      tallestForDiff.toSeq.flatMap { case (diff, height) =>
        Seq(
          (diff, height), // not using rod
          (diff + rod, height + rod), // using for taller
          (Math.abs(diff - rod), Math.max(height, (height - diff) + rod)) // using for shorter
        )
      }.groupMapReduce(_._1)(_._2)(Math.max) // keep tallest for each diff
    }(0)
  }
}

```