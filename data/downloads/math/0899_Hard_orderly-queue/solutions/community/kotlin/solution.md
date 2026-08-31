# [Kotlin] Clean & Short Solution

**Author:** catcatcute
**Votes:** 3
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/1446225/](https://leetcode.com/problems/orderly-queue/solutions/1446225/)

---

```
class Solution {
    fun orderlyQueue(s: String, k: Int): String {
        return when {
            k > 1 -> String(s.toCharArray().apply { sort() })
            else -> {
                val ss = s + s
                var res = ss.substring(0, s.length)
                for (start in 1 until s.length) {
                    res = minOf(res, ss.substring(start, start + s.length))
                }
                res
            }
        }
    }
}
```