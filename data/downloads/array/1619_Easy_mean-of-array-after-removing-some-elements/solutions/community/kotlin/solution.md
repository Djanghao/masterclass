# Kotlin Straightforward Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/5487974/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/5487974/)

---

# Code
```
class Solution {
    fun trimMean(arr: IntArray): Double {
        var arr = arr ; arr.sort()
        val numElems = (0.05 * arr.size).toInt()
        val subArray = arr.copyOfRange(numElems, arr.size - numElems)
        return subArray.sum().toDouble() / subArray.size
    }
}
```