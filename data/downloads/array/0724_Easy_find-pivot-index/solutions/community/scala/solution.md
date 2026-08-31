# Beats 100% in runtime

**Author:** aarushimaheshwari
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/5199283/](https://leetcode.com/problems/find-pivot-index/solutions/5199283/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
starting from left the first idx where left is equal to right

# Approach
<!-- Describe your approach to solving the problem. -->
using tail rec, calculate the total sum first and then start from left calculate right on each idx and compare if its equal, first idx found staisfying condition return it

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
  def pivotIndex(nums: Array[Int]): Int = {
    val totalSum = nums.sum
    getPivot(0, 0, totalSum, nums)
  }

  
  private def getPivot(idx: Int, left: Int, total: Int, nums: Array[Int]): Int = {
    if (idx < nums.length) {
      val right = total - left - nums(idx)
      if (left == right)
        idx
      else getPivot(idx + 1, left + nums(idx), total, nums)
    } else -1
  }
}
```