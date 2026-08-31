# [scala] - foldRight

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/2410721/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/2410721/)

---

```scala
def minimumReplacement(nums: Array[Int]): Long = {
  val (_, cnt) = nums.foldRight((Int.MaxValue, 0L)) { case (el, (min, acc)) =>
    if(el <= min) (el, acc)
    else {
      val ratio = el / min + (if(el % min == 0) 0 else 1)
      (el / ratio, acc + ratio - 1)
    }
  }
  cnt
}
```