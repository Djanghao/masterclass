# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/5487944/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/5487944/)

---

```scala
object Solution {
  def findScore(nums: Array[Int]): Long = 
    lazy val x0 = nums.zipWithIndex.to(collection.immutable.SortedSet)
    lazy val x1 = nums.zipWithIndex.map(_.swap).to(Map)
    def f(aSet: Set[(Int,Int)], aMap: Map[Int,Int], acc: Long): Long = {
      lazy val ((mn,idx),t) = (aSet.head, aSet.tail)
      lazy val neighbours = Seq(idx-1,idx+1).flatMap(i => aMap.get(i).map(_ -> i))
      if(aSet.isEmpty) acc
      else f(t -- neighbours, aMap -- Seq(idx-1,idx,idx+1), acc+mn)
    }
    f(x0,x1,0L)
}
```