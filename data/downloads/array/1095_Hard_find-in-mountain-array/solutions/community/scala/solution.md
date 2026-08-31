# beats 100% runtime , memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/5869426/](https://leetcode.com/problems/find-in-mountain-array/solutions/5869426/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
O(logn) where n is total length of mountain array
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```scala []
/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     def get(index: Int): Int = {}
 *     def length(): Int = {}
 * }
 */

object Solution {
  def findInMountainArray(value: Int, mountainArr: MountainArray): Int = {
    val peekIdx = findPeek(0, mountainArr.length() - 1, mountainArr)
    // println(s"peek idx $peekIdx")
    val left = findInLeftSide(0, peekIdx, mountainArr, value)
    // println(s"left  $left")
    if (left != -1) left
    else findInRightSide(peekIdx + 1, mountainArr.length() - 1, mountainArr, value)
  }

  private def findPeek(left: Int, right: Int, mountainArray: MountainArray): Int = {
    if (left == right) right
    else {
      val mid = (left + right) / 2
    //   println(s"mid $mid")
      if (mountainArray.get(mid) > mountainArray.get(mid + 1))
        findPeek(left, mid, mountainArray)
      else findPeek(mid+1, right, mountainArray)
    }
  }

  private def findInLeftSide(left: Int, right: Int, mountainArray: MountainArray, value: Int): Int = {
    if (left > right) -1
    else {
      val mid = (left + right) / 2
      val midValue = mountainArray.get(mid)
      if (value == midValue)
        mid
      else if (value > midValue)
        findInLeftSide(mid + 1, right, mountainArray, value)
      else findInLeftSide(left, mid - 1, mountainArray, value)
    }
  }

  private def findInRightSide(left: Int, right: Int, mountainArray: MountainArray, value: Int): Int = {
    if (left > right) -1
    else {
      val mid = (left + right) / 2
      val midValue = mountainArray.get(mid)
      if (value == midValue)
        mid
      else if (value > midValue)
        findInLeftSide(left, mid - 1, mountainArray, value)
      else findInLeftSide(mid + 1, right, mountainArray, value)
    }
  }
}
```