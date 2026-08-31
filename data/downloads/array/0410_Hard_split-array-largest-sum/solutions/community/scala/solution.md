# using binary search

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/5866897/](https://leetcode.com/problems/split-array-largest-sum/solutions/5866897/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(NlogS)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```scala []
object Solution {
  def splitArray(nums: Array[Int], k: Int): Int = {
    val right = nums.sum
    val left = nums.max
    findOPtimal(left, right, nums, k)
  }

  private def findOPtimal(left: Int, right: Int, nums: Array[Int], k: Int): Int = {
    if (left < right) {
      val mid = left + (right - left) / 2
      val splits = countSplits(mid, nums)
      if (splits > k) findOPtimal(mid + 1, right, nums, k)
      else findOPtimal(left, mid, nums, k)
    } else right
  }

  private def countSplits(sum: Int, nums: Array[Int]) = {
    nums.foldLeft(0, 0) {
      case ((splits, currentSum), num) =>
        if (currentSum + num > sum)(splits + 1, num)
        else (splits, currentSum + num)
    }._1 + 1
  }
}
```