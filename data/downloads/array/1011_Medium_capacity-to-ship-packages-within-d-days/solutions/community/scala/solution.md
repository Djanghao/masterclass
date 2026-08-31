# FP Scala Binary Search

**Author:** bobojon2ov
**Votes:** 1
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/1946107/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/1946107/)

---

```
object Solution {
def shipWithinDays(weights: Array[Int], days: Int): Int = {
    def binarysearch(l: Int, r: Int, ans: Int): Int = {
      if (l <= r) {
        val mid = l + (r - l) / 2
        if (isAvaible(weights, mid, days)) binarysearch(l, mid - 1, mid)
        else binarysearch(mid + 1, r, ans)
      } else ans
    }
    def isAvaible(weights: Array[Int], mid: Int, days: Int): Boolean = {
      val (count_day, _) = weights.foldLeft(1, 0) { case ((cnt, sum), e) =>
        val x = sum + e
        if (x > mid) (cnt + 1, e)
        else (cnt, x)
      }
      count_day <= days
    }
    val (sum, max) = weights.foldLeft(0, 0) { case ((s, m), e) =>
      (s + e, math.max(m, e))
    }
    if (weights.length == days) max
    else {
      binarysearch(max, sum, 0)
    }
  }
}
```