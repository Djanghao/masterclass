# using DP

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/6056509/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/6056509/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```scala []
object Solution {
  def findNumberOfLIS(nums: Array[Int]): Int = {
    val length = Array.fill(nums.length)(1)
    val count = Array.fill(nums.length)(1)
    val n = nums.length
    (n - 1 to 0 by -1).foreach { i =>
      val list: IndexedSeq[LIS] = (i + 1 until n).flatMap { j =>
        if (nums(i) < nums(j)) Some(LIS(length(j), count(j))) else None
      }
      if (list.nonEmpty) {
        val maxLength = list.maxBy(_.length).length
        length(i) = maxLength + 1
        count(i) = list.indices.filter(x => list(x).length == maxLength).map(idx => list(idx).count).sum
      }
    }
    val maxLength = length.max
    length.indices.filter(x => length(x) == maxLength).map(i => count(i)).sum
  }

  case class LIS(length: Int, count: Int)
}
```