# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/5450159/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/5450159/)

---

```
object Solution {
  def longestEqualSubarray(nums: List[Int], k: Int): Int =
    nums.to(Vector).zipWithIndex.groupMap(_._1)(_._2).values.map { a =>
      a.size - a.indices.drop(1).foldLeft(0) { case (lo, hi) =>
        if (a(hi) - a(lo) - k <= hi - lo) lo else lo + 1
      }
    }.max
}
```