# Scala

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3681295/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3681295/)

---

```
object Solution {
  def minCost(nums: Array[Int], cost: Array[Int]): Long = {

    def costFor(x: Int): Long = nums.zip(cost).foldLeft(0L) {
      case (acc, (n, c)) => acc + Math.abs(n - x).toLong * c
    }

    @annotation.tailrec def search(l: Int, r: Int): Int = if (l == r) l else {
      val mid = (l + r) / 2
      if (costFor(mid) <= costFor(mid + 1)) search(l, mid)
      else search(mid + 1, r)
    }

    costFor(search(nums.min, nums.max))
  }
}
```