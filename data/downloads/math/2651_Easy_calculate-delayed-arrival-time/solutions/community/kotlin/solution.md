# Delayed Arrival Time

**Author:** remusGabriel97
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5362910/](https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/5362910/)

---

# Code
```
class Solution {
    fun findDelayedArrivalTime(arrivalTime: Int, delayedTime: Int): Int {
    val totalTime = arrivalTime + delayedTime

    val currentHour = if (totalTime >= 24) {
        (totalTime - 24)
    } else totalTime

    return currentHour
    }
}
```