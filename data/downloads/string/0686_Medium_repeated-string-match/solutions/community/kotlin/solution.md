# Kotlin KMP solution

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/5073969/](https://leetcode.com/problems/repeated-string-match/solutions/5073969/)

---

![Screenshot 2024-04-26 120859.png](./images/0.png)

# Code
```
class Solution {
    fun repeatedStringMatch(a: String, b: String): Int {
        var stringBuilder = StringBuilder(a)
        val lps = b.buildLPS()

        var repeatTime = 1
        while (stringBuilder.length < b.length) {
            stringBuilder.append(a)
            repeatTime++
        }

        if (b.isSubstringOf(stringBuilder.toString(), lps)) {
            return repeatTime
        }

        stringBuilder.append(a)
        repeatTime++

        if (b.isSubstringOf(stringBuilder.toString(), lps)) {
            return repeatTime
        }

        return -1
    }

    private fun String.buildLPS() : IntArray {
        val lps = IntArray(length)
        var i = 1
        var j = 0

        while (i < length) {
            if (this[i] == this[j]) {
                lps[i++] = ++j
            } else if(j > 0) {
                j = lps[j - 1]
            } else {
                lps[i++] = 0
            }
        }

        return lps
    }

    private fun String.isSubstringOf(text: String, lps: IntArray): Boolean {
        val n = text.length
        val m = this.length
        var i = 0
        var j = 0

        while (i < n && j < m) {
            if (text[i] == this[j]) {
                i++
                j++
            } else if(j > 0) {
                j = lps[j - 1]
            } else {
                i++
            }
        }

        return j == m
    }
}
```