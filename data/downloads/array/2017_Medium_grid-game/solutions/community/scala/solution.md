# scala oneliner. prefix sum, minimax

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/grid-game/solutions/5399021/](https://leetcode.com/problems/grid-game/solutions/5399021/)

---

```scala
object Solution {
  def gridGame(grid: Array[Array[Int]]): Long =
    (grid.head.reverseIterator.scanLeft(0L)(_ + _).toList.init zip
    grid.last.iterator.scanLeft(0L)(_ + _).toList.reverse.tail).
      map{case (a,b) => a max b}.min
}
```