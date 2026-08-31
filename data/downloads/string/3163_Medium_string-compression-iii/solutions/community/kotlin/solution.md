# Kotlin | StringBuilder

**Author:** jschnall
**Votes:** 1
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6007769/](https://leetcode.com/problems/string-compression-iii/solutions/6007769/)

---

# Code
```kotlin []
class Solution {
    fun compressedString(word: String): String {
        val builder = StringBuilder()
        var prev = word[0]
        var count = 1
        for (i in 1 until word.length) {
            val c = word[i]

            if (c == prev && count < 9) {
                count++
            } else {
                builder.append("$count$prev")
                prev = c
                count = 1
            }
        }
        builder.append("$count$prev")

        return builder.toString()
    }
}
```