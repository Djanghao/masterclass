# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5576556/](https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5576556/)

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
  def maxOperations(s: String): Int =
    (0 until s.length).foldLeft(0, 0) { case ((res, ones), i) =>
      val temp = ones + s(i) - '0'
      if (i > 0 && s(i) < s(i - 1)) (res + temp,temp)
      else (res, temp)
    }._1
}
```