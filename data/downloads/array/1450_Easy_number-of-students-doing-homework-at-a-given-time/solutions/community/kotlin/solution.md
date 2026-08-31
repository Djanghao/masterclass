# Kotlin 4 line

**Author:** 3336360dhdh
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/641494/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/641494/)

---

fun busyStudent(startTime: IntArray, endTime: IntArray, queryTime: Int): Int {
    var k = 0
    for (i in startTime.indices)
        if (queryTime in startTime[i]..endTime[i]) k++
    return k
}