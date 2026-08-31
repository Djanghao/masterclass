# Kotlin 1 line

**Author:** GeorgCantor
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/1104824/](https://leetcode.com/problems/sort-array-by-parity/solutions/1104824/)

---

```
fun sortArrayByParity(a: IntArray) = a.sortedBy { it % 2 != 0 }.toIntArray()
```
More efficient:
```
    fun sortArrayByParity(a: IntArray): IntArray {
        val arr = IntArray(a.size)
        var l = 0
        var r = a.lastIndex
        a.forEach { if (it % 2 == 0) arr[l++] = it else arr[r--] = it }

        return arr
    }
```