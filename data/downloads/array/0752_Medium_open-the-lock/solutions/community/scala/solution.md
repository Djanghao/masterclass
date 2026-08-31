# scala bfs

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/5058582/](https://leetcode.com/problems/open-the-lock/solutions/5058582/)

---

```scala
object Solution {
  import collection.immutable.Queue
  lazy val rotationsChar = (0 to 9).map(_.toChar).map {i=> (i+'0').toChar -> List((i+1)%10, (i+9)%10).map(c => ('0' + c).toChar)}.toMap
  def openLock(_deadends: Array[String], target: String): Int =
    lazy val deadends = _deadends.to(Set)
    def bfs(q:Queue[(String,Int)], v:Set[String]): Int = {
      lazy val ((h,step),t) = q.dequeue
      lazy val next = (0 until 4).flatMap{i => rotationsChar(h(i)).map(c => (h.take(i) :+ c +: h.drop(i+1)).mkString )}.to(Set)
      if(q.isEmpty) -1
      else if(next.contains(target)) step
      else bfs(t ++ (next -- v).map(_ -> (step+1)), v++next)
    }
    if(target == "0000") 0
    else if(deadends.contains("0000")) -1
    else bfs(Queue(("0000" -> 1)), Set("0000") ++ deadends)
}
```