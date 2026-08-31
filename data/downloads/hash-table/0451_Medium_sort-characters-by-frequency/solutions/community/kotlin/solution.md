# kotlin - readable code

**Author:** tucux
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/1015441/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/1015441/)

---

```
class Solution {
    fun frequencySort(s: String): String {
        val frequencies = s.groupingBy { it }.eachCount()
        val orderedFrequencies = frequencies.entries.sortedByDescending { (ch, count) -> count }
        val res = StringBuilder()
        orderedFrequencies.forEach { (ch, count) -> repeat(count) { res.append(ch) } }
        return res.toString()
    }
}
```