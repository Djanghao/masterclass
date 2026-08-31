# Scala iterative solution

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/3671880/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/3671880/)

---

# Intuition
TBA

# Approach
TBA

# Complexity
- Time complexity:
O(n log n) + O(m log m)

- Space complexity:
O(n) + O(m)

# Code
```
import scala.collection.mutable

object Solution {
    object ByLengthAndEndAsc extends Ordering[(Int, Int)] {
        def compare(a: (Int,Int), b: (Int, Int)) = {
            // if length is equal we pick interval that ends earlier
            if(a._1 == b._1) {
                b._2 compare a._2
            } else {
                b._1 compare a._1
            }
        }
    }

    def minInterval(intervals: Array[Array[Int]], queries: Array[Int]): Array[Int] = {
        intervals.sortInPlaceWith {
            case (Array(s1,e1),Array(s2,e2)) => s1 < s2
        }
        val sortedQueries = queries.sortWith {
            case (a, b) => a < b
        }
        val bestIntervalsSoFar = mutable.PriorityQueue.empty[(Int, Int)](ByLengthAndEndAsc)
        var queryId = 0
        var intervalId = 0
        val results = mutable.Map.empty[Int, Int]
        while(queryId < sortedQueries.length && intervalId < intervals.length) {
            // remove intervals that got passed
            while(bestIntervalsSoFar.headOption.exists(_._2 < sortedQueries(queryId))) {
                bestIntervalsSoFar.dequeue()
            }
            intervals(intervalId) match {
                // interval intersects with query
                case Array(start, end) if sortedQueries(queryId) >= start && sortedQueries(queryId) <= end =>
                    bestIntervalsSoFar.enqueue((end - start + 1, end))
                    intervalId += 1
                // interval is ahead, try next query
                case Array(start, end) if start > sortedQueries(queryId) =>
                    results(sortedQueries(queryId)) = bestIntervalsSoFar.headOption.map(_._1).getOrElse(-1)
                    queryId += 1
                // interval is behind, skip it
                case Array(start, end) =>
                    intervalId += 1
            }
        }
        // if all intervals are over but we still have queries process them
        while(queryId < sortedQueries.length) {
            // remove intervals that got passed
            while(bestIntervalsSoFar.headOption.exists(_._2 < sortedQueries(queryId))) {
                bestIntervalsSoFar.dequeue()
            }
            results(sortedQueries(queryId)) = bestIntervalsSoFar.headOption.map(_._1).getOrElse(-1)
            queryId += 1
        }
        queries.map {
            v => results(v)
        }
    }
}
```