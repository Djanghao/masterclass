# Scala solution

**Author:** akylai
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/2810751/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/2810751/)

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
import java.time.temporal.ChronoUnit
import java.time.LocalDate

object Solution {
    def daysBetweenDates(date1: String, date2: String): Int = {
ChronoUnit.DAYS.between( LocalDate.parse(date1), LocalDate.parse(date2)).abs.toInt
    }
}
```