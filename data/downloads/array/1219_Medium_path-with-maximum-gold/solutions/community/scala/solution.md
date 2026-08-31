# slow scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5158346/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5158346/)

---

# Code
```
object Solution {
  import collection.immutable.Queue
  def getMaximumGold(_grid: Array[Array[Int]]): Int =
    lazy val grid = _grid.indices.flatMap{i => _grid.head.indices.map{j => (i,j) -> _grid(i)(j)}}
      .filterNot(_._2 == 0).to(Map).withDefaultValue(0)
    def f(q:Queue[(Int,Int,Set[(Int,Int)])], acc:Int): Int =
      lazy val next = List(1->0, -1->0, 0-> -1, 0->1).map{case (x,y) => (q.head._1+x, q.head._2+y)}
        .filterNot{case (i,j) => q.head._3.contains(i, j) || grid(i,j) == 0}
      if(q.isEmpty) acc
      else if(next.isEmpty) f(q.tail, acc max q.head._3.iterator.map{case (i,j) => grid(i,j) }.sum)
      else f(q.tail ++ next.map{case (i,j) => (i,j, (q.head._3 + (i->j)) )}, acc)
    grid.iterator.filter(_._2 > 0).map{case ((i,j) -> _) => f(Queue((i,j,Set(i -> j))) ,0)}
      .maxOption.getOrElse(0)
}

```