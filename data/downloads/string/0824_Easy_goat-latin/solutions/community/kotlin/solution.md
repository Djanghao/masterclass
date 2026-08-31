# Kotlin Best Solution

**Author:** progp
**Votes:** 5
**Link:** [https://leetcode.com/problems/goat-latin/solutions/4385432/](https://leetcode.com/problems/goat-latin/solutions/4385432/)

---


# Code
```
class Solution {
fun toGoatLatin(S: String): String {
    val a = StringBuilder("a")
    return S.split(" ").joinToString(" ") {
        if ("aeiou".contains(it[0].toLowerCase())) (it + "ma" + a).also { a.append("a") }
        else (it.substring(1) + it[0] + "ma" + a).also { a.append("a") }
    }
}
}
```