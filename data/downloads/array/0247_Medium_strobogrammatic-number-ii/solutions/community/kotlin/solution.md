# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/6083574/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/6083574/)

---

# Code
```kotlin []
class Solution {
    fun findStrobogrammatic(n: Int): List<String> {
        fun dfs(u: Int): List<String> =
            when (u) {
                0 -> listOf("")
                1 -> listOf("0", "1", "8")
                else -> {
                    val res = mutableListOf<String>()
                    for (v in dfs(u - 2)) {
                        for (p in prs) res.add(p.first + v + p.second)
                        if (u != n) res.add("0" + v + "0") }
                    res }
            }
        return dfs(n)
    }

    private val prs = arrayOf("1" to "1", "8" to "8", "6" to "9", "9" to "6")
}
```