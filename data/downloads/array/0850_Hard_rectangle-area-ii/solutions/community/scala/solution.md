# 15 lines scala line sweep

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area-ii/solutions/5852395/](https://leetcode.com/problems/rectangle-area-ii/solutions/5852395/)

---

```scala []
object Solution {
  def rectangleArea(rectangles: Array[Array[Int]]): Int = 
    rectangles.toList.collect{case Array(l,b,r,t) =>
      List(l -> ((b,t),1), r -> ((b,t), -1))
    }.flatten.groupMap(_._1)(_._2)//.view.mapValues(_.sorted)
      .toList.sortBy(_._1).scanLeft((0L,-1,List.empty[((Int,Int),Int)])){
        case ((area,x0,l0),(x1,l1)) =>
          lazy val area1 = (l0.map(a => a._1._2.toLong-a._1._1).sum*(x1-x0))%1_000_000_007
          lazy val l2 = (l0 ++ l1) // we could merge already sorted lists instead of concat
            .flatMap{case ((y0,y1),lvl) => List(y0 -> lvl, y1 -> -lvl)}
            .sorted.groupMapReduce(_._1)(_._2)(_ + _).toList.sorted
            .scanLeft((((0,0),0,0))){case (((_,y1),lvl0,lvl1),(y2,lvl2)) =>
              ((y1,y2),lvl1,lvl1+lvl2)
            }.drop(2).collect{case (y12,lvl,_) if lvl>0 => y12 -> lvl}
          (area1,x1,l2)
      }.map(_._1).foldLeft(0L){case (a,b) => (a+b) % 1_000_000_007L}.toInt
}

```