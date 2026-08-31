# Kotlin beats 100% time and space

**Author:** goterps3
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/4520396/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/4520396/)

---

```
class Solution {
    private val monthToDay = mutableMapOf(
        1 to 31,
        2 to 28,
        3 to 31,
        4 to 30,
        5 to 31,
        6 to 30,
        7 to 31,
        8 to 31,
        9 to 30,
        10 to 31,
        11 to 30,
        12 to 31
    )

    fun isLeapYear(year: Int): Boolean = when {
        year % 400 == 0 -> true
        year % 100 == 0 -> false
        year % 4 == 0 -> true
        else -> false
    }

    fun numberOfDays(year: Int, month: Int): Int {
        if (month == 2 && isLeapYear(year)) return 29
        return monthToDay.getValue(month)
    }
}
```