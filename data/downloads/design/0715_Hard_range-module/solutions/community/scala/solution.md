# Scala TreeMap solution O(logN)

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-module/solutions/2746349/](https://leetcode.com/problems/range-module/solutions/2746349/)

---

The problem is not complicated itself, but it is almost impossible to handle all corner cases during the interview time.
Similar problems are: 
https://leetcode.com/problems/data-stream-as-disjoint-intervals/
https://leetcode.com/problems/my-calendar-ii/

```
import scala.util.chaining._
import scala.collection.mutable

class RangeModule() {

  private val storage = mutable.TreeMap.empty[Int, Interval]

  private def storeInterval(interval: Interval) = {
    if (interval.nonEmpty) {
      storage += (interval.start -> interval)
      storage += (interval.end -> interval)
    }
  }

  private def deleteInterval(interval: Interval) = {
    if (interval.start == interval.end) {
      storage -= interval.start
    } else {
      storage -= interval.start
      storage -= interval.end
    }
  }

  private def fullyOverlap(interval: Interval): Option[Interval] = {
    // since intervals don't overlap
    // the last point will show us if this interval overlaps
    storage.rangeTo(interval.start).lastOption match {
      case Some((_, prevInterval)) if prevInterval.start <= interval.start && prevInterval.end >= interval.end
      => Some(prevInterval)
      case _ => None
    }
  }

  def addRange(left: Int, right: Int): Unit = {
    val interval = Interval(left, right - 1)

    if (fullyOverlap(interval).isEmpty) {
      // intervals which ends or start within range
      // +1 is required because [1:8) + [8:9) = [1:9) and [8,9) + [9,10) = [8,10)
      val intersectingIntervals = storage.range(left - 1, right + 1).toList

      intersectingIntervals.foldLeft(interval) {
        case (mergedInterval, (_, anotherInterval)) => mergeIntervals(mergedInterval, anotherInterval)
      }

      if (intersectingIntervals.isEmpty) {
        // if there is no overlapping add interval itself
        storeInterval(interval)
      }
    }
  }

  def mergeIntervals(interval1: Interval, interval2: Interval): Interval = {
    deleteInterval(interval1)
    deleteInterval(interval2)
    Interval(interval1.start min interval2.start, interval1.end max interval2.end).tap(storeInterval)
  }

  def queryRange(left: Int, right: Int): Boolean = {
    fullyOverlap(Interval(left, right - 1)).nonEmpty
  }

  def removeRange(left: Int, right: Int): Unit = {
    val removalInterval = Interval(left, right - 1)
    // split intervals
    fullyOverlap(removalInterval) match {
      case Some(fullyOverlapInterval) =>
        deleteInterval(fullyOverlapInterval)
        List(Interval(fullyOverlapInterval.start, removalInterval.start - 1), Interval(removalInterval.end + 1, fullyOverlapInterval.end))
          .filter(_.nonEmpty)
          .foreach(storeInterval)
      case _ =>
        // important to get the result before applying side effects
        storage.range(left, right).toList.foreach {
          case (point, interval) if point == interval.end =>
            deleteInterval(interval)
            if(interval.start < removalInterval.start) {
              storeInterval(Interval(interval.start, removalInterval.start - 1))
            }
          case (point, interval) if point == interval.start =>
            deleteInterval(interval)
            if(interval.end > removalInterval.end) {
              storeInterval(Interval(removalInterval.end + 1, interval.end))
            }
          case _ =>
        }
    }
  }

  case class Interval(start: Int, end: Int) {
    def nonEmpty: Boolean = {
      start <= end
    }
  }

}
```