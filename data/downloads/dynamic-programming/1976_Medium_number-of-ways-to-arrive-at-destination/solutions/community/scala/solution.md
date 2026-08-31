# 11 lines scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/5715718/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/5715718/)

---

```scala []
//   bfs(q: SortedSet[(Long,Int,Long,Long)],v:Set[Int]): Long
//   q: "heap" of (arrivalTime, targetNode, numerOfWays, departureTime)
//   v: set of visited nodes
//   returns: numerOfWays to reach node (n-1) at minimal arrivalTime
object Solution {
  import collection.immutable.SortedSet
  def countPaths(n: Int, roads: Array[Array[Int]]): Int =
    val xMap = roads.toList.collect{case Array(u,v,t) => List(u->(v,t),v->(u,t))}
      .flatten.groupMap(_._1)(_._2).view.mapValues(_.toMap).toMap
    def reducer(a: Long, b: Long): Long = ((a+b)% 1_000_000_007)
    def bfs(q: SortedSet[(Long,Int,Long,Long)],v:Set[Int]): Long =
      lazy val (take,drop) = q.span(_._1 == q.head._1)
      lazy val aMap = take.toList.filterNot(x=> v.contains(x._2)).groupMapReduce(_._2)(_._3)(reducer)
      lazy val q2 = aMap.toList.flatMap{ case (n0,cnt) =>
          xMap(n0).iterator.map{case (n1,tm1) => ((q.head._1+tm1,n1),cnt)}
      }.groupMapReduce(_._1)(_._2)(reducer).toList.map{case ((tm,node),cnt) => (tm,node,cnt,q.head._1)}
      if(aMap.contains(n-1)) aMap(n-1) else bfs(drop++q2,v++aMap.keySet) // no q.isEmpty case
    bfs(SortedSet((0L,0,1L,-1)), Set()).toInt
}

```