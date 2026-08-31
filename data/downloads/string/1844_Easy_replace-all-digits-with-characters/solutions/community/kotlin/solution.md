# Kotlin StringBuilder + Lambda Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/5409995/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/5409995/)

---

# Code
```
class Solution {
    fun replaceDigits(s: String): String {
        val shift : (Char, Int) -> Char = { c, x -> (c.code + x).toChar() }
        val str = StringBuilder(s)

        for (i in 1 until s.length step 2)
            str.setCharAt(i, shift(s[i - 1], s[i].digitToInt()))

        return str.toString()
    }
}
```