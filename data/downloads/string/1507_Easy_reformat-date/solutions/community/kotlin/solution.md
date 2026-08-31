# Nothing Fancy, Just Adding Strings and a Switch Statement

**Author:** V1Nut
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-date/solutions/5298526/](https://leetcode.com/problems/reformat-date/solutions/5298526/)

---

# Code
```
class Solution {
    fun reformatDate(date: String): String {
        var vals = date.split(" ")
        var day = vals[0].filter{ it.isDigit() }

        if (day.length == 1) day = "0" + day

        return vals[2] + "-" + resolveMonth(vals[1]) + "-" + day
    }

    fun resolveMonth(str: String): String {
        return when (str) {
            "Jan" -> "01"
            "Feb" -> "02"
            "Mar" -> "03"
            "Apr" -> "04"
            "May" -> "05"
            "Jun" -> "06"
            "Jul" -> "07"
            "Aug" -> "08"
            "Sep" -> "09"
            "Oct" -> "10"
            "Nov" -> "11"
            "Dec" -> "12"
            else -> ""
        }        
    }
}
```