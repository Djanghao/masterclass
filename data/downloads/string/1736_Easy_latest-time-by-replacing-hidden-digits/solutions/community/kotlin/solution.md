# Kotlin

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1052998/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1052998/)

---

```
    fun maximumTime(time: String): String {
        val times = time.toCharArray()
        if (times[0] == '?') times[0] = if (times[1] <= '3' || times[1] == '?') '2' else '1'
        if (times[1] == '?') times[1] = if (times[0] == '2') '3' else '9'
        if (times[3] == '?') times[3] = '5'
        if (times[4] == '?') times[4] = '9'

        return String(times)
    }
```