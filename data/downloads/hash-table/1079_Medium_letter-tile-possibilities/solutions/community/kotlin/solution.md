# Kotlin + map

**Author:** c4tdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/3067453/](https://leetcode.com/problems/letter-tile-possibilities/solutions/3067453/)

---

# Code
```
class Solution {
    fun numTilePossibilities(s: String): Int {
        var m = mutableMapOf<Char, Int>()
        for (c in s) {
            m[c] = (m[c] ?: 0) + 1
        }
        var res = 0
        var f = { res++ }
        bt(m, f)
        return res
    }

    fun bt(m: MutableMap<Char, Int>, f: () -> Int) {
        for (k in m.keys) {
            if (m[k]!! == 0) continue
            m[k] = (m[k] ?: 0) - 1
            bt(m, f)
            m[k] = (m[k] ?: 0) + 1
            f()
        }
    }
}
```