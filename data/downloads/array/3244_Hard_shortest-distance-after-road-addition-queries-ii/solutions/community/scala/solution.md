# scala oneliner. exclude unneeded vertices, count remaining ones

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/6093048/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/solutions/6093048/)

---

> There are no two queries such that i != j and queries[i][0] < queries[j][0] < queries[i][1] < queries[j][1]

So, no overlaps... And as we are interested only in a number of edges' sources, we can put them to a set, and update it at each iteration
```scala []
object Solution {
  import collection.immutable.SortedSet
  def shortestDistanceAfterQueries(n: Int, queries: Array[Array[Int]]): Array[Int] =
    queries.scanLeft(Iterator.range(0,n-1).to(SortedSet)){case (aSet,q) =>
      aSet -- aSet.range(q.head+1,q.last)
    }.drop(1).map(_.size)
}
```