# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4476145/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4476145/)

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
```
object Solution {
  def minIncrementOperations(nums: Array[Int], k: Int): Long = {
    val res = nums.foldLeft(0L, 0L, 0L){case ((d1, d2, d3), cur) =>
      (d2, d3, Math.min(d1, Math.min(d2, d3)) + Math.max(k - cur, 0))
    }
    res._1 min res._2 min res._3
  }
}
```