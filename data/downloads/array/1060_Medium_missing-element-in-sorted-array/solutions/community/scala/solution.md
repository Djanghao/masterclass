# scala binary search

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/4687184/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/4687184/)

---

# Code
```
object Solution {
  private def missingElementsBeforeIndex(index: Int, nums: Array[Int]): Int = {
    nums(index) - nums(0) - index
  }

  def missingElement(nums: Array[Int], k: Int): Int = {
    var left = 0
    var right = nums.length - 1
    while (left <= right) {
      val mid = left + (right - left) / 2

      if (missingElementsBeforeIndex(mid, nums) < k) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    k + nums(0) + right
  }
}


```