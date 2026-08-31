# Kotlin Simple Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/5561333/](https://leetcode.com/problems/reformat-the-string/solutions/5561333/)

---

# Code
```
class Solution {
    fun reformat(s: String): String {
        var grouped = s.partition{ it.isDigit() }

        if (abs(grouped.first.length - grouped.second.length) > 1)
            return ""

        var str = StringBuilder()
        var i = 0

        var longest = (if (grouped.first.length > grouped.second.length)
                grouped.first
            else grouped.second
        ).toMutableList()

        var shortest = (if (grouped.first.length > grouped.second.length)
                grouped.second
            else grouped.first
        ).toMutableList()

        while (i < s.length)
            str.append((
                if (i++ % 2 == 0) 
                    longest 
                else shortest
            ).removeAt(0))

        return str.toString()
    }
}
```