# Beats 100% runtime, scala soln

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/5403949/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/5403949/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(1)
# Code
```
object Solution {
  def zeroFilledSubarray(nums: Array[Int]): Long = {
    calculate(0, 0, nums, 0)
  }

  def calculate(count: Long, current: Int, nums: Array[Int], idx: Int): Long = {
    if (idx == nums.length)
      count
    else {
     val updatedCurrent= if (nums(idx) != 0) 0
      else current + 1
      calculate(count+updatedCurrent,updatedCurrent,nums, idx+1)
    }
  }
}
```