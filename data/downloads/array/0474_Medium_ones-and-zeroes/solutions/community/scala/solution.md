# using memoisation

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/6113175/](https://leetcode.com/problems/ones-and-zeroes/solutions/6113175/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(ns)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(ns)
# Code
```scala []
object Solution {
  def findMaxForm(strs: Array[String], m: Int, n: Int): Int = {
    max(0, strs, m, n, Array.fill(strs.length, m + 1, n + 1)(-1))
  }

  private def max(idx: Int, strs: Array[String], m: Int, n: Int, memo: Array[Array[Array[Int]]]): Int = {
    if (idx == strs.length) 0
    else if (memo(idx)(m)(n) != -1) memo(idx)(m)(n)
    else {
      val str = strs(idx)
      val zero = str.count(_ == '0')
      val one = str.count(_ == '1')
      memo(idx)(m)(n) = if (zero <= m && one <= n) Math.max(1 + max(idx + 1, strs, m - zero, n - one, memo), max(idx + 1, strs, m, n, memo))
      else max(idx + 1, strs, m, n, memo)
      memo(idx)(m)(n)
    }
  }
}
```