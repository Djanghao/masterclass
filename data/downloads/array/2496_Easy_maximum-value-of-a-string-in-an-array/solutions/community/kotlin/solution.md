# Kotlin simple solution

**Author:** BotirMuzaffariy
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3022926/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3022926/)

---

# Code
```
class Solution {
    fun maximumValue(strs: Array<String>): Int {
        var ans = 0

        strs.forEach { str ->
            if (str.all { it.isDigit() }) {
                ans = Math.max(ans, str.toInt())
            } else {
                ans = Math.max(ans, str.length)
            }
        }

        return ans
    }
}
```