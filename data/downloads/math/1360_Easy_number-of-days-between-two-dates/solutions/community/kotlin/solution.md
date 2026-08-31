# My kotlin solution with time O(1) and space O(1)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/2482428/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/2482428/)

---

Below is my solution in kotlin. I think it is better than its cousin who asks for weekday...
```
class Solution {
    /* Complexity:
     * Time O(1) and Space O(1);
     */
    fun daysBetweenDates(date1: String, date2: String): Int {

        fun isLeapYear(year: Int) = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0

        fun dayOfTheYearAtMonthEnd(year: Int, month: Int): Int {
            val monthToDayOfNonLeapYear =
                intArrayOf(0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365)
            return monthToDayOfNonLeapYear[month] + if (month >= 2 && isLeapYear(year)) 1 else 0
        }

        fun dayOfTheYear(year: Int, month: Int, day: Int): Int {
            return dayOfTheYearAtMonthEnd(year, month - 1) + day
        }

        fun dayDiffTo_2000_01_01(year: Int, month: Int, day: Int): Int {
            val yearDiff = year - 2000
            val yearDIffInDay =
                if (yearDiff > 0) {
                    val calibratedDiff = yearDiff - 1
                    1 + 365 * yearDiff + calibratedDiff / 4 - calibratedDiff / 100 + calibratedDiff / 400
                } else {
                    365 * yearDiff + yearDiff / 4 - yearDiff / 100 + yearDiff / 400
                }
            val dayOfTheYear = dayOfTheYear(year, month, day)
            return yearDIffInDay + (dayOfTheYear - 1)
        }

        val (year1, month1, day1) = date1.split("-").map { it.toInt() }
        val (year2, month2, day2) = date2.split("-").map { it.toInt() }

        return Math.abs(dayDiffTo_2000_01_01(year1, month1, day1) - dayDiffTo_2000_01_01(year2, month2, day2))
    }
}
```