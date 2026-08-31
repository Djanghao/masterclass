# Scala solution

**Author:** danielOlivo
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/4893786/](https://leetcode.com/problems/merge-intervals/solutions/4893786/)

---

# Code
```
object Solution {
    import scala.collection.mutable.ArrayBuffer
    def merge(intervals: Array[Array[Int]]): Array[Array[Int]] = {
        val sorted = intervals.sortBy(_(0))

        var prev = sorted(0)
        val buf = new ArrayBuffer[Array[Int]]

        for(i <- sorted.tail)
            if(i(0) > prev(1)){
                buf += prev
                prev = i
            }
            else {
                prev(0) = math.min(prev(0), i(0))
                prev(1) = math.max(prev(1), i(1))
            }

        buf += prev

        buf.toArray
    }
}
```