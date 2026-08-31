# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-room/solutions/1976611/](https://leetcode.com/problems/closest-room/solutions/1976611/)

---

```
import scala.collection.immutable.SortedSet

object Solution {
  def closestRoom(rooms: Array[Array[Int]], queries: Array[Array[Int]]): Array[Int] = {
    rooms.sortInPlaceBy { case Array(id, size) => (-size, id) }
    
    val indices = queries.indices.sortBy(i => -queries(i)(1))

    val results = Array.fill(queries.length)(-1)
    
    indices
      .iterator
      .zip {
        indices
          .iterator
          .map(queries(_)(1))
          .scanLeft(SortedSet.empty[Int], rooms.iterator) {
            case ((ids, it), minSize) => it.span(_(1) >= minSize) match {
              case (prefix, suffix) => (ids ++ prefix.map(_(0)), suffix)
            }
          }
          .map(_._1)
          .drop(1)
      }
      .foreach {
        case (i, ids) =>
          results(i) = Iterator(ids.rangeTo(queries(i)(0)).lastOption, ids.rangeFrom(queries(i)(0)).headOption)
            .flatten
            .minByOption(id => math.abs(id - queries(i)(0)))
            .getOrElse(-1)
      }
    
    results
  }
}
```