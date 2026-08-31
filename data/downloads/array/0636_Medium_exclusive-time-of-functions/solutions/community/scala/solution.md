# scala recursion with stack, dec by start time, inc by end time

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/5391940/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/5391940/)

---

```scala
object Solution {
  def exclusiveTime(n: Int, logs: List[String]): Array[Int] =
    import scala.util.chaining._
    import scala.language.implicitConversions
    lazy val aLogs = logs.map(_.split(":"))
      .map(l =>
        if(l(1) == "start") (l(0).toInt, true, l(2).toInt)
        else (l(0).toInt, false, l(2).toInt+1)
      )
    def g(seq: Seq[(Int,Boolean,Int)], stack: List[Int], aMap: Map[Int,Int]): Map[Int,Int] =
      lazy val (f1,isStart,tm) = seq.head
      lazy val f2 = stack.head
      lazy val f3 = stack.tail.head
      lazy val newMap1 = aMap
        .pipe(xMap => xMap + (f1 -> (xMap(f1) - tm)))
        .pipe(xMap => xMap + (f2 -> (xMap(f2) + tm)))
      lazy val newMap2 = aMap
        .pipe(xMap => xMap + (f1 -> (xMap(f1) + tm)))
        .pipe(xMap => xMap + (f3 -> (xMap(f3) - tm)))
      if(seq.isEmpty) aMap
      else if(isStart) g(seq.tail, f1 +: stack, newMap1)
      else g(seq.tail, stack.tail, newMap2)
    lazy val x1 = g(aLogs, List(-1), Map().withDefaultValue(0))
    (0 until n).map(x1).to(Array)
}
```