# Simple Kotlin solution for beginners

**Author:** ganesh2shiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/3547734/](https://leetcode.com/problems/count-days-spent-together/solutions/3547734/)

---

```
class Solution {
    fun countDaysTogether(arriveAlice: String, leaveAlice: String, arriveBob: String, leaveBob: String): Int {
        val months = arrayOf(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
        val days = IntArray(13)
        for ((i, total) in months.withIndex()) days[i+1] = days[i] + total
        val aliceStartMonth = arriveAlice.take(2).toInt()
        val aliceStartDay = arriveAlice.takeLast(2).toInt()
        val aliceEndMonth = leaveAlice.take(2).toInt()
        val aliceEndDay = leaveAlice.takeLast(2).toInt()
        val aliceStart = days[aliceStartMonth-1] + aliceStartDay
        val aliceEnd = days[aliceEndMonth-1] + aliceEndDay

        val bobStartMonth = arriveBob.take(2).toInt()
        val bobStartDay = arriveBob.takeLast(2).toInt()
        val bobEndMonth = leaveBob.take(2).toInt()
        val bobEndDay = leaveBob.takeLast(2).toInt()
        val bobStart = days[bobStartMonth-1] + bobStartDay
        val bobEnd = days[bobEndMonth-1] + bobEndDay

        val min = maxOf(aliceStart, bobStart)
        val max = minOf(aliceEnd, bobEnd)
        return maxOf(0, max-min+1)
    }
}
```