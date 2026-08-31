# scala two pointers

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/6106063/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/6106063/)

---

```scala []
object Solution {
  def maximumWhiteTiles(tiles: Array[Array[Int]], carpetLen: Int): Int = {
    lazy val ts = (tiles.map(a => List(a.head,a.last+1)).toVector.sortBy(_.head)) :+
      List(2_000_000_002,2_000_000_002)
    LazyList.unfold((0,0,0)){case (i,j,acc) => Option.when(j < (ts.length-1)) {
      lazy val mx = ((ts(j)(1)-ts(i)(0)) min carpetLen) - acc
      if(ts(j)(1)-ts(i)(0) < carpetLen) (mx, (i,j+1,acc + (ts(j+1)(0)-ts(j)(1))))
      else if(ts(j)(0)-ts(i)(0) > carpetLen) (0 ,(i+1,j,acc - (ts(i+1)(0)-ts(i)(1))))
      else (mx, (i+1,j,acc - (ts(i+1)(0)-ts(i)(1))))
    }}.max
  }
}
```