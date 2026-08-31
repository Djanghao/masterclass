# 15 lines scala dfs recursion with memopization

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/5825519/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/5825519/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def maxHappyGroups(batchSize: Int, groups: Array[Int]): Int = {
    lazy val (cMap0, acc0) = groups.iterator.map(_ % batchSize)
      .foldLeft((Map.empty[Int,Int],0)){case ((aMap,acc),x) =>
        lazy val aMap2 = aMap.updatedWith(batchSize-x){_.collect{case x if x>1 => x-1}}
        if(x==0) (aMap, acc+1) // happy groups
        else if(aMap.contains(batchSize-x)) (aMap2, acc+1) // "pairs" of happy groups
        else (aMap + ((x, aMap.getOrElse(x,0)+1)), acc) // other groups
      }
    val cache = collection.mutable.Map.empty[(Map[Int,Int],Int),Int]
    def dfs(aMap: Map[Int,Int], rem: Int): Int = cache.getOrElse((aMap,rem),{
      if(aMap.isEmpty) rem.sign else aMap.iterator.map{case (k,v) =>
        lazy val rem1 = (k+rem) % batchSize
        lazy val aMap1 = if(v<=1) aMap-k else aMap + ((k, v-1))
        1 - rem1.sign + dfs(aMap1, rem1) // new "group" of happy groups when rem1 == 0
      }.max}.tap(rc => cache((aMap,rem)) = rc))
    acc0 + dfs(cMap0,0)
  }
}
```