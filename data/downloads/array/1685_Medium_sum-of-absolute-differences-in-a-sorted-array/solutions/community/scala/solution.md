# scala soln beats 100% runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/5407772/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/5407772/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
use the property of array sorted with prevSum
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

  def getSumAbsoluteDifferences(nums: Array[Int]): Array[Int] = {
    getSum(nums.sum, 0, 0, nums, Array.ofDim(nums.length))
  }

  private def getSum(totalSum: Int, prevSum: Int, idx: Int, nums: Array[Int], result: Array[Int]): Array[Int] = {
    if (idx == nums.length)
      result
    else {
      val num = nums(idx)
      val sum = idx * num - prevSum + totalSum - prevSum - (nums.length - idx) * num
      result.update(idx, sum)
      getSum(totalSum, prevSum + num, idx + 1, nums, result)
    }
  }
}
```