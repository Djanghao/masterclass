# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5047480/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/5047480/)

---

```
object Solution {
  import collection.immutable.Queue
  def countCompleteComponents(n: Int, edges: Array[Array[Int]]): Int = {
    lazy val directed = edges.toSet
    .flatMap{case (a) => List(a.head -> a.last, a.last -> a.head)}
    .groupMap(_._1)(_._2)
    def bfs(q: Queue[Int],v:Set[Int]): Set[Int] = {
      lazy val next = directed.getOrElse(q.head, Set()) -- v
      if(q.isEmpty) v else bfs(q.tail ++ next, v ++ next)
    }
    directed.keys.foldLeft(Set.empty[Int] -> List.empty[Set[Int]]){ case ((s,l),a) =>
      lazy val next = bfs(Queue(a),Set(a))
      if(s.contains(a)) (s,l) else (s++next, next +: l)
    }
    ._2.count(set => set.forall(k => directed(k).size == (set.size-1))) +
    (n - directed.keys.size) // unconnected nodes
  }
}
```