# scala pure functional and faster than 100%

**Author:** vitrun
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/283632/](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/283632/)

---


```scala
object Solution {
  def search(nums: Array[Int], target: Int): Int = {
    if (nums.isEmpty) -1 else search(nums, target, 0, nums.length - 1)
  }

  def search(nums: Array[Int], target: Int, l: Int, r: Int): Int = {
    if (l > r) -1 else {
      val m = (l + r) / 2
      if (nums(m) == target) m else if (nums(l) <= nums(m) && include(target, nums(l), nums(m)) ||
        nums(m) <= nums(r) && !include(target, nums(m), nums(r))
      ) {
        search(nums, target, l, m - 1)
      } else search(nums, target, m + 1, r)
    }
  }

  def include(target: Int, l: Int, r: Int): Boolean = l <= target && target <= r
}
```
