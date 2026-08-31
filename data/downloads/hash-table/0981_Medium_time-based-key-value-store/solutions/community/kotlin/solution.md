# [log (n)] Kotlin solution

**Author:** kharam1436
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/1480139/](https://leetcode.com/problems/time-based-key-value-store/solutions/1480139/)

---

```kotlin
import java.util.*

class TimeMap() {

    /** Initialize your data structure here. */
    val map: MutableMap<String, TreeMap<Int, String>> = mutableMapOf()

    // log(n)
    fun set(key: String, value: String, timestamp: Int) {
        val sortedTimeMap = map[key] ?: TreeMap()
        sortedTimeMap[timestamp] = value
        map[key] = sortedTimeMap
    }

    // log(n)
    fun get(key: String, timestamp: Int): String {
        return map[key]?.floorEntry(timestamp)?.value ?: ""
    }
}
```