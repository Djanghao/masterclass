# 100%runtime , dp

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/6051354/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/6051354/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  def validPartition(nums: Array[Int]): Boolean = {
    val memo = Array.fill(nums.length + 1)(-1)
    isValid(0, nums, memo)
  }

  private def isValid(idx: Int, nums: Array[Int], memo: Array[Int]): Boolean = {
    if (idx == nums.length) true
    else if (idx > nums.length) false
    else if (memo(idx) != -1) memo(idx) == 1
    else {
      val result = {
        val result1 = if (checkTwoSum(idx, nums)) isValid(idx + 2, nums, memo) else false
        val result2 = if (checkThreeSum(idx, nums)) isValid(idx + 3, nums, memo) else false
        result1 || result2
      }
      if (result) memo(idx) = 1 else memo(idx) = 0
      result
    }
  }

  private def checkTwoSum(idx: Int, nums: Array[Int]) = {
    if(idx<nums.length-1)nums(idx) == nums(idx + 1)
    else false
  }

  private def checkThreeSum(idx: Int, nums: Array[Int]) = {
    if (idx < nums.length - 2) {
      (nums(idx) == nums(idx + 1) && nums(idx + 1) == nums(idx + 2)) || (nums(idx) + 1 == nums(idx + 1) && nums(idx + 1) + 1 == nums(idx + 2))
    } else false
  }
}
```