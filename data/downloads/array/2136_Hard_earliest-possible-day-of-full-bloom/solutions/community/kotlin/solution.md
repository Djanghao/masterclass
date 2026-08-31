# Kotlin | notice the law and then greedy

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754579/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754579/)

---

Pattern is: you must plant all of them in "single thread", that means there is no difference how exactly you plant them. The only matters part is when the last of them blooms.

```
class Solution {
    fun earliestFullBloom(plantTime: IntArray, growTime: IntArray): Int {
        val indexes = Array<Int>(growTime.size) { it }
        indexes.sortWith(Comparator { a,b -> growTime[b] - growTime[a] } )
        var dayPlant = 0
        var dayGrow = 0
        indexes.forEach { ind ->
            val plant = plantTime[ind]
            val grow = growTime[ind]
            dayPlant += plant
            dayGrow = maxOf(dayGrow, dayPlant + grow)
        }
        return dayGrow
    }
}
```