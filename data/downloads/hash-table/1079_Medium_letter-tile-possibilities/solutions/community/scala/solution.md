# 4 lines scala FP dfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/5241728/](https://leetcode.com/problems/letter-tile-possibilities/solutions/5241728/)

---

```scala
object Solution {
  def numTilePossibilities(tiles: String): Int = {
    def dfs(aMap:Map[Char,Int]): Iterable[List[Char]] = aMap.keys.flatMap{c =>
        List(List(c)) ++ dfs(aMap.updatedWith(c){_.collect{case n if n>1 => n-1}}).map(c +: _)
      }.to(List).distinct
    dfs(tiles.groupMapReduce(identity)(_ => 1)(_ + _)).size
  }
}

```