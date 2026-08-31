# Greedy scala solution

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/5399730/](https://leetcode.com/problems/non-decreasing-array/solutions/5399730/)

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
  def checkPossibility(nums: Array[Int]): Boolean = {
    verify(1, nums, 0)
  }

  private def verify(idx: Int, nums: Array[Int], count: Int): Boolean = {
    if (idx == nums.length)
      true
    else {
      if (nums(idx) < nums(idx-1)) {
        if (count == 1)
          false
        else {
          if (idx < 2 || nums(idx - 2) <= nums(idx))
            nums.update(idx - 1, nums(idx))
          else nums.update(idx, nums(idx - 1))
          verify(idx + 1, nums, count + 1)
        }
      } else verify(idx + 1, nums, count)
    }
  }
}
```