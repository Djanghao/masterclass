# prefix sum

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/solutions/5569231/](https://leetcode.com/problems/binary-subarrays-with-sum/solutions/5569231/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
o(n)\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
o(1)\r
# Code\r
```\r
object Solution {\r
  def numSubarraysWithSum(nums: Array[Int], goal: Int): Int = {\r
    nums.zipWithIndex.foldLeft(0, 0, 0,0) {\r
      case ((totalCount, left, currSum,prefixZero), (num, idx)) =>\r
\r
        val (prefixSum, updatedLeft, updatedCurrSum) \r
        = getUpdated(currSum + num, left, prefixZero, idx, goal, nums)\r
        val updatedCount = if (updatedCurrSum == goal) totalCount + prefixSum + 1 \r
        else totalCount\r
        (updatedCount, updatedLeft, updatedCurrSum,prefixSum)\r
    }._1\r
  }\r
\r
  private def getUpdated(currSum: Int, left: Int, prefixZero: Int, idx: Int, goal: Int, nums: Array[Int]): (Int, Int, Int) = {\r
    if (left < idx && (currSum > goal || nums(left) == 0)) {\r
      if (nums(left) == 0)\r
        getUpdated(currSum, left + 1, prefixZero + 1, idx, goal, nums)\r
      else getUpdated(currSum - 1, left + 1, 0, idx, goal, nums)\r
    } else (prefixZero, left, currSum)\r
  }\r
}\r
```