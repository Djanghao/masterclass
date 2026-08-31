# scala binary search solution

**Author:** Ilyakrasnyak
**Votes:** 1
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/1645779/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/1645779/)

---

```
object Solution {
def peakIndexInMountainArray(arr: Array[Int]): Int = {
  def loop(left: Int, right: Int): Int = {
    val mid = (left + right) / 2
    arr(mid) match {
      case v if v < arr(mid + 1)                     => loop(mid + 1, right)
      case v if v > arr(mid + 1) && v > arr(mid - 1) => mid
      case _                                         => loop(left, mid)
    }
  }
  loop(0, arr.length - 1)
}
}
```