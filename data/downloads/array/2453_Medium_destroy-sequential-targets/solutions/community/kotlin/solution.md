# Kotlin (sort + map)

**Author:** c4tdog
**Votes:** 1
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/2852782/](https://leetcode.com/problems/destroy-sequential-targets/solutions/2852782/)

---

# Code
```
class Solution {
    fun destroyTargets(a: IntArray, s: Int): Int {
        a.sort()
        var m = mutableMapOf<Int, Int>()
        for (i in 0..a.size - 1) {
            var mod = a[i] % s
            m[mod] = (m[mod] ?: 0) + 1
        }
        var k = 0
        var maxValue = 0
        for (key in m.keys) {
            if (m[key]!! > maxValue) {
                maxValue = m[key]!!
                k = key
            }
        }

        for (i in 0..a.size - 1) {
            if (a[i] % s == k) return a[i]
        }

        return 0
    }
}
```