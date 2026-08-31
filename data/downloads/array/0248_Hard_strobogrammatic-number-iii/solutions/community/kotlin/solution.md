# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-iii/solutions/6083590/](https://leetcode.com/problems/strobogrammatic-number-iii/solutions/6083590/)

---

# Code
```kotlin []
class Solution {
    fun strobogrammaticInRange(low: String, high: String): Int {
        var res = 0
        val (l, r) = low.toLong() to high.toLong()
        (low.length..high.length).forEach { n ->
            fun dfs(u: Int): List<String> =
                when (u) {
                    0 -> listOf("")
                    1 -> listOf("0", "1", "8")
                    else -> {
                        val x = mutableListOf<String>()
                        for (v in dfs(u - 2)) {
                            for (p in prs) x.add(p.first + v + p.second)
                            if (u != n) x.add("0" + v + "0") }
                        x } }
            for (s in dfs(n)) if (s.toLong() in l..r) res++
        }
        return res
    }

    private val prs = arrayOf("1" to "1", "8" to "8", "6" to "9", "9" to "6")
}
```