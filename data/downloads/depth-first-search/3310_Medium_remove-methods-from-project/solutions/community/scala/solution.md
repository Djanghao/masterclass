# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5938399/](https://leetcode.com/problems/remove-methods-from-project/solutions/5938399/)

---

```scala []
object Solution {
  import scala.collection.immutable.Queue
  def remainingMethods(n: Int, k: Int, invocations: Array[Array[Int]]): List[Int] = {
    val tree = invocations.toList.groupMap(_.head)(_.last).withDefaultValue(Nil)
    val susp = Set.unfold((Queue(k),Set.empty[Int])){ case (q,v) => Option.when(q.nonEmpty){
        (q.head, (q.tail ++ tree(q.head).filterNot(v.contains), v + q.head))
    }}
    val keep = Iterator.range(0,n).filterNot(susp.contains).foldLeft(Set.empty[Int]){case (aSet,i) =>
      if(aSet.contains(i)) aSet else LazyList.unfold((Queue(i),aSet+i)){ case (q,v) => 
        Option.when(q.nonEmpty){
            (v+q.head, (q.tail ++ tree(q.head).filterNot(v.contains), v + q.head))
        }}.last
    }
    if(keep.exists(susp.contains)) List.range(0,n) else keep.toList
  }
}
```