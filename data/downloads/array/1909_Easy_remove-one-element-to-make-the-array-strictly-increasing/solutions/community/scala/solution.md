# foldLeft

**Author:** xrtm000
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/4934494/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/4934494/)

---

# Code
```
object Solution {
  def canBeIncreasing(nums: Array[Int]): Boolean =
    nums
      .foldLeft((Option.empty[Int], Option.empty[Int], Option.empty[Int])) { case (acc @ (removed, aOpt, bOpt), c) =>
        if (removed.contains(-1))
          acc
        else
          (aOpt, bOpt) match {
            case (None, None) =>
              (None, None, Some(c))
            case (None, Some(prev)) =>
              (None, Some(prev), Some(c))
            case (Some(a), Some(b)) =>
              if (a < b && b < c)
                (removed, Some(b), Some(c))
              else if (a < c && removed.isEmpty)
                (Some(b), Some(a), Some(c))
              else if (a < b && removed.isEmpty)
                (Some(c), Some(a), Some(b))
              else if (b < c && removed.isEmpty)
                (Some(a), Some(b), Some(c))
              else
                (Some(-1), None, None)
            case _ => ???    
          }
      }
      ._1
      .forall(_ > -1)
}
```