# Scala - simple code

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/5353114/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/5353114/)

---


```
object Solution {
    def intersectionSizeTwo(intervals: Array[Array[Int]]): Int = {
        val sortedIntervals = intervals.sortWith { (a, b) => 
            if (a(1) == b(1)) a(0) > b(0) else a(1) < b(1) 
        }
        
        var secondLast = -1
        var last = -1
        var count = 0
        
        for (interval <- sortedIntervals) {
            val start = interval(0)
            val end = interval(1)
            
            // Check how many of the current last two points are within the interval
            val numCovered = 
                (if (secondLast >= start && secondLast <= end) 1 else 0) + 
                (if (last >= start && last <= end) 1 else 0)
            
            if (numCovered == 0) {
                count += 2
                secondLast = end - 1
                last = end
            } else if (numCovered == 1) {
                count += 1
                if (last == end) {
                    secondLast = end - 1
                } else {
                    secondLast = last
                    last = end
                }
            }
        }
        
        count
    }
}

```