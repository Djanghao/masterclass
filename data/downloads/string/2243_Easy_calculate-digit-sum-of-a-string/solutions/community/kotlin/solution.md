# Kotlin Declarative Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/5496658/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/5496658/)

---

# Code
```
class Solution {
    fun String.digitsSum() = this
        .filter{ it.isDigit() }
        .map{ it.digitToInt() }
        .sum().toString()

    fun digitSum(s: String, k: Int): String {
        var str = StringBuilder(s)

        while (str.length > k)
            str = StringBuilder(str
                .chunked(k)
                .map{ it.digitsSum() }
                .joinToString(""))

        return str.toString()
    }
}
```