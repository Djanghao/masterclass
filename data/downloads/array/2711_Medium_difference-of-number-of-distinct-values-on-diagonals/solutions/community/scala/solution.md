# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/5359305/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/5359305/)

---

```scala
object Solution {
  def differenceOfDistinctValues(grid: Array[Array[Int]]): Array[Array[Int]] =
    (for{i <- grid.indices; j <- grid(0).indices} yield {
      List(1,-1).map { d => LazyList.unfold((i+d, j+d)){case (x,y) =>
          Option.when((x min y) >= 0 && x<grid.size && y<grid(0).size){
            (grid(x)(y), (x+d,y+d))
          }}.toList.distinct.size * d}.sum.abs
    }).to(Array).sliding(grid(0).size,grid(0).size).to(Array)
}
```