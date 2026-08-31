# Kotlin solution

**Author:** csc156
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/4931074/](https://leetcode.com/problems/day-of-the-week/solutions/4931074/)

---

Find the number of days that have passed since January 1<sup>st</sup>, 1971; which was a Friday.

```
class Solution {
    val days = listOf("Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday")

	// We don't need December's day count since this solution only needs the day counts of months before the param month.
    val monthDayCounts = listOf(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30)
        
    fun dayOfTheWeek(day: Int, month: Int, year: Int): String {
        var daysPassed: Int =
            ((year - 1971) * 365) +
            monthDayCounts.take(month - 1).sum() +
            (day - 1)
        
        // Find the number of leap days from past leap years.
        if (year >= 1973) {
            daysPassed += (year - 1973) / 4 + 1
        }
        
        // See if the year is a leap year and if leap day has been passed.
        if (year % 4 == 0 && year != 2100 && month > 2) daysPassed++
        
        return days[daysPassed % 7]
    }
}
```