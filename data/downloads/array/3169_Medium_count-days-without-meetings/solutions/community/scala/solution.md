# Scala - simple using sort

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5247261/](https://leetcode.com/problems/count-days-without-meetings/solutions/5247261/)

---

```
object Solution {
    def countDays(days: Int, meetings: Array[Array[Int]]): Int = {
        implicit val ordering: Ordering[Array[Int]] = Ordering.by(_(0))
        val sort = meetings.sorted
        val n = sort.size
        var ans = 0

        // Initialize the end of the last meeting
        var lastEnd = 0

        // Calculate gaps between meetings
        for (i <- 0 until n) {
            val start = sort(i)(0)
            val end = sort(i)(1)
            if (start > lastEnd) {
                ans += start - lastEnd - 1
            }
            lastEnd = Math.max(lastEnd, end)
        }

        // Check the gap after the last meeting
        if (lastEnd < days) {
            ans += days - lastEnd
        }

        ans
    }
}
```