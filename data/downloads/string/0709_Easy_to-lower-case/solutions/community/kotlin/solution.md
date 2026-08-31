# [Easy] Kotlin - No library

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/611088/](https://leetcode.com/problems/to-lower-case/solutions/611088/)

---

Difference b/w upper-case and lower-case character is 32, so if the char is uppercase, add 32 :).
```
    fun toLowerCase(str: String): String {
     	val lowerCase = CharArray(str.length)
        for (i in lowerCase.indices) {
            lowerCase[i] = if (str[i] >= 'A' && str[i] <= 'Z') {
            	str[i] + 32
            } else {
                str[i]
            }
        }
        return String(lowerCase)
    }
```