# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/5309126/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/5309126/)

---

```scala
object Solution {
  import collection.immutable.Queue
  def smallestStringWithSwaps(s: String, pairs: List[List[Int]]): String =
    lazy val tree = pairs.to(Set).flatMap(l => List(l,l.reverse))
      .groupMap(_.head)(_.last)
    def bfs(q:Queue[Int], v:Set[Int]=Set()): Set[Int] =
      if(q.isEmpty) v
      else if(v.contains(q.head)) bfs(q.tail,v)
      else bfs(q.tail ++ tree(q.head).diff(v), v+q.head)
    lazy val aMap = pairs.flatten
      .foldLeft(List.empty[Set[Int]],Set.empty[Int]){case ((acc,all),i) =>
      lazy val set = bfs(Queue(i))
      if(all.contains(i)) (acc,all) else (set +: acc, all ++ set)
    }._1.flatMap{x =>
      lazy val (cs,is) = x.toList.map(i => s(i) -> i).sortBy(_._2).unzip
      is zip cs.sorted
    }.toMap
    s.indices.map(i => aMap.getOrElse(i,s(i))).mkString
}
```