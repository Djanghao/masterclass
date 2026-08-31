# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/3603625/](https://leetcode.com/problems/day-of-the-year/solutions/3603625/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def dayOfYear(date: String): Int = {
      val year = date.substring(0, 4).toInt
      val month = date.substring(5, 7).toInt
      val day = date.substring(8).toInt

      val daysInMonth = List(31, if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) 29 else 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)

      daysInMonth.take(month - 1).sum + day
    }
}
```