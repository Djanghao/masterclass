# [Kotlin] Clean and Short O(n) Solution

**Author:** catcatcute
**Votes:** 2
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1445208/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1445208/)

---

```
class Solution {
    fun firstDayBeenInAllRooms(nextVisit: IntArray): Int {
        val mod = 1000000007
        val days = LongArray(nextVisit.size).apply { set(0, 1L) }

        for (i in 1..days.lastIndex) {
            days[i] = (days[i - 1] + days[i - 1] - days[nextVisit[i - 1]] + 1 + 1) % mod
        }

        return ((days.last() + mod - 1) % mod).toInt()
    }
}
```