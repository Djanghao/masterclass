# Kotlin

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/5720597/](https://leetcode.com/problems/minimum-number-of-frogs-croaking/solutions/5720597/)

---

```
fun minNumberOfFrogs(s: String): Int {
    var c = 0; var r = 0; var o = 0; var a = 0; var m = 0
    s.forEach {
        when (it) {
            'c' -> ++c
            'r' -> if (c < ++r) return -1
            'o' -> if (r < ++o) return -1
            'a' -> if (o < ++a) return -1
            else -> {
                m = max(m, c--); --r; --o; --a
            }
        }
    }
    return if (c == 0 && r == 0 && o == 0 && a == 0) m else -1
}
```