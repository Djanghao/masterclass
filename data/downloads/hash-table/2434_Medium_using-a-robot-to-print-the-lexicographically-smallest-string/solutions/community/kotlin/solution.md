# Very Short Kotlin Solution using SortedMap

**Author:** Z3ROsum
**Votes:** 6
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2679726/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2679726/)

---

```
class Solution {
    fun robotWithString(s: String): String {
        val count = s.toList().groupingBy { it }.eachCount().toSortedMap()
        val result = StringBuilder()
        val t = StringBuilder()
        for (i in s) {
            t.append(i)
            if (count[i] == 1) count.remove(i)
            else count[i] = count[i]!! - 1
            fun notEmpty() = t.isNotEmpty() && count.isNotEmpty()
            while (notEmpty() && t.last() <= count.firstKey()) {
                result.append(t.last())
                t.deleteCharAt(t.length - 1)
            }
        }
        
        return result.append(t.reversed()).toString()
    }
}
```