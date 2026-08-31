# kotlin treemap

**Author:** rassulrakhim
**Votes:** 1
**Link:** [https://leetcode.com/problems/plates-between-candles/solutions/1988980/](https://leetcode.com/problems/plates-between-candles/solutions/1988980/)

---

```
val m = TreeMap<Int, Int>()
    val result = mutableListOf<Int>()
    var plates = 0
    for (a in 0..s.indices.last) {
        if (s[a] == '|') m[a] = plates
        else plates++
    }
    for (query in queries) {
        if (m.isEmpty()
            || m.lastKey() < query[0]
            || m.firstKey() > query[1]
        ) result.add(0)
        else {
            val (_, leftValue) = m.ceilingEntry(query[0])
            val (_, rightValue) = m.floorEntry(query[1])
            result.add((rightValue - leftValue).coerceAtLeast(0))
        }
    }
    return result.toIntArray()
```