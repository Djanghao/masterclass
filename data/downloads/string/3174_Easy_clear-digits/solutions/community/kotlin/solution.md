# Kotlin Imperative Beats 100%

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/clear-digits/solutions/5411880/](https://leetcode.com/problems/clear-digits/solutions/5411880/)

---

# Code
```
class Solution {
    fun clearDigits(s: String): String {
        var (charsToRemove, i) = arrayOf(0, s.length - 1)
        var str = StringBuilder(s)
        
        while (i >= 0) {
            if (str.get(i).isDigit()) {
                str.deleteCharAt(i)
                charsToRemove += 1
            } else if (charsToRemove > 0) {
                str.deleteCharAt(i)
                charsToRemove -= 1
            }
            i -= 1
        }

        return str.toString()
    }
}
```