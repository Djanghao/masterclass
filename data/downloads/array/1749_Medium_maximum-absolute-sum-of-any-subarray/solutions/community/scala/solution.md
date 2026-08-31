# Scala | Tail Recursion | Kadane's Algorithm | Beats 100%

**Author:** maverickss
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1722694/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/1722694/)

---

```
  def maxAbsoluteSum(nums: Array[Int]): Int = {

    @scala.annotation.tailrec
    def helper(i: Int, max: Int = nums.head, min: Int = nums.head, ans: Int = nums.head): Int = {
      if (i > nums.length - 1) Math.abs(ans)
      else {
        val newMax = Math.max(nums(i), nums(i) + max)
        val newMin = Math.min(nums(i), nums(i) + min)
        val newAns = Math.max(Math.max(Math.abs(newMax), Math.abs(newMin)), ans)
        helper(i + 1, newMax, newMin, newAns)
      }
    }

    helper(1)
  }
```