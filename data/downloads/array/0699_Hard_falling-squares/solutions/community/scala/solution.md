# scala SortedMap

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/falling-squares/solutions/5304017/](https://leetcode.com/problems/falling-squares/solutions/5304017/)

---

```scala
object Solution {
  import collection.immutable.SortedMap
  def fallingSquares(positions: Array[Array[Int]]): List[Int] =
    positions.map(_.toList)
      .foldLeft((List(-1),SortedMap.empty[Int,(Int,Int)])){case ((l,aMap),p) =>
        lazy val y2 = aMap.maxBefore(p.head).filter{case (k,(len,_)) => k+len > p.head}.toList ++
          aMap.iteratorFrom(p.head).takeWhile(_._1 < p.sum)
        lazy val newHeight = y2.map(_._2._2).maxOption.getOrElse(0) + p.last
        lazy val newSegments = List(
          y2.headOption.map{case (k,(_,h)) => (k, (p.head - k,h))}
            .filterNot(x=>x._1<=0 || x._2._1<=0),
          Some(p.head,(p.last,newHeight)),
          y2.lastOption.map{case (k,(v,h)) => (p.sum, ((k+v)-p.sum,h))}
            .filterNot(x=>x._1<=0 || x._2._1<=0)
        ).flatten
        lazy val newMap = aMap -- y2.map(_._1) ++ newSegments
        ((l.head max newHeight) +: l, newMap )
      }._1.reverse.tail
}
```