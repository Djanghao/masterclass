# Java Priority Queue

**Author:** jonh12
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/5465223/](https://leetcode.com/problems/the-skyline-problem/solutions/5465223/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This solution requires Java Priority Queue.  Scala doesn't have the remove function so you are stuck with using filter, but that would remove all elements with valeu

Java's Priority Queue
List(a, a, b, c) -> remove(a) -> List(a, b, c)

Scala's Priority Queue
List(a, a, b, c) -> filter(_ != a) -> List(b, c)

# Complexity
- Time complexity:
O(n log n)

- Space complexity:
O(n)

# Code
```
import scala.collection.mutable
import java.util.PriorityQueue

object Solution {
    def getSkyline(buildings: Array[Array[Int]]): List[List[Int]] = {
        var events = mutable.ArrayBuffer.empty[(Int, Int, Boolean)]
        buildings.foreach {
            case Array(lx, rx, h) => 
                events += ((lx, h, true))
                events += ((rx, h, false))
        }
        events = events.sortBy(_._1)

        val results = mutable.ArrayBuffer.empty[(Int, Int)]
        val maxHeight = new java.util.PriorityQueue[Int](java.util.Collections.reverseOrder())
        maxHeight.offer(0)
        var i = 0
        val n = events.size

        while(i < n) {
            val (x, _, _) = events(i)

            // process all events with the same x-axis
            while(i < n && events(i)._1 == x) {
                val (_, height, start) = events(i)

                if(start) {
                    maxHeight.offer(height)
                } else {
                    maxHeight.remove(height)
                }

                i += 1
            }
            

            if(results.isEmpty || results.last._2 != maxHeight.peek) {
                results += ((x, maxHeight.peek))
            }
        }

        results.map(_.toList).toList
    }
}
```