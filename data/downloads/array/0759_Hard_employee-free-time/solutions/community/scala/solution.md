# Scala priority queue solution

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/employee-free-time/solutions/3619633/](https://leetcode.com/problems/employee-free-time/solutions/3619633/)

---

# Intuition
TBA

# Approach
The first part is merge intervals problem and the second part is difference in interval problem

# Complexity
- Time complexity:
O(N log N)

- Space complexity:
O(N)

# Code
```
/**
 * Definition for an Interval.
 * class Interval(var _start: Int, var _end: Int) {
 *   var start: Int = _start
 *  var end: Int = _end
 * }
 */
import scala.collection.mutable

object Solution {

    object OrderByStartAsc extends Ordering[Interval] {
        def compare(a: Interval, b: Interval) = {
            b.start compare a.start
        }
    }

    def employeeFreeTime(schedule: List[List[Interval]]): List[Interval] = {
        // merge known schedules
        val priorityQueue = mutable.PriorityQueue.from(schedule.flatten)(OrderByStartAsc)
        var prevInterval = Option.empty[Interval]
        val workIntervals = mutable.Queue.empty[Interval]
        // merge all work intervals together
        while(priorityQueue.nonEmpty) {
            val interval = priorityQueue.dequeue()
            println(s"${interval.start},${interval.end}")
            prevInterval match {
                // if intersects, extend prevInterval
                case Some(prev) if prev.end >= interval.start => prev.end = interval.end max prev.end
                // else
                case Some(prev) => 
                    workIntervals.enqueue(prev)
                    prevInterval = Some(interval)
                case None => prevInterval = Some(interval)
            }
        }
        prevInterval.foreach(workIntervals.enqueue(_))
        // find gaps in merged work intervals
        workIntervals.foldLeft(Vector.empty[Interval], Option.empty[Int]) {
            // no known last end
            case ((aggr, None), interval) => (aggr, Some(interval.end))
            // known last end
            case ((aggr, Some(lastEnd)), interval) => (aggr.appended(new Interval(lastEnd, interval.start)), Some(interval.end))
        }._1.toList
    }
}
```