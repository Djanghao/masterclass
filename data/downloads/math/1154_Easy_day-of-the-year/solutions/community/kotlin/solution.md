# Kotlin solution

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/5132321/](https://leetcode.com/problems/day-of-the-year/solutions/5132321/)

---

```
class Solution {
    /*
    We don't need December's day count since this solution only
	uses the day counts of months before a month in a param date.
    */
    val monthDayCounts = listOf(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30)
    
    fun dayOfYear(date: String): Int {
        val (year, month, day) = date.split('-').map { it.toInt() }
        val addLeapDay = month > 2 && year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
        return monthDayCounts.take(month - 1).sum() + day + if (addLeapDay) 1 else 0
    }
}
```