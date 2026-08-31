# [Kotlin] Simple Short O(nlogn) Solution

**Author:** catcatcute
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/1470903/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/1470903/)

---

```
class Solution {
    fun findOriginalArray(changed: IntArray): IntArray {
        val res = mutableListOf<Int>()
        val need = mutableMapOf<Int, Int>()
        changed.sorted().forEach {
            if ((need[it] ?: 0) > 0) {
                need[it] = need[it]!! - 1
            } else {
                res.add(it)
                need[it * 2] = (need[it * 2] ?: 0) + 1
            }
        }
        return if (need.values.all { it == 0 }) {
            res.toIntArray()
        } else {
            IntArray(0)
        }
    }
}
```