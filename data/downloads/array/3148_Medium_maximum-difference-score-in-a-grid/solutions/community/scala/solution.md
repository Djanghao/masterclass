# ugly mutable scala solution to avoid MLE

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5482817/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5482817/)

---

```
object Solution {
  val arr = Array.fill(1001,1001)(0)
  def maxScore(grid: List[List[Int]]): Int =
    var i: Int = 0; var j: Int = 0
    arr(0)(0) = grid(0)(0)
    var ans = Int.MinValue
    i = 1; while (i<grid.length) {
      arr(i)(0) = arr(i-1)(0) min grid(i)(0); ans = ans max (grid(i)(0) - arr(i-1)(0)); i+=1
    }
    j = 1; while (j<grid.head.length) {
      arr(0)(j) = arr(0)(j-1) min grid(0)(j); ans = ans max (grid(0)(j) - arr(0)(j-1)); j+=1
    }
    i=1; while (i<grid.length) {
      j=1; while (j<grid.head.length) {
        arr(i)(j) = arr(i-1)(j) min arr(i)(j-1) min grid(i)(j)
        ans = ans max (grid(i)(j) - (arr(i-1)(j) min arr(i)(j-1)))
        j+=1
      }
      i+=1
    }
    ans

  def maxScore1(grid: List[List[Int]]): Int =
    val x1 = grid.map(_.scanLeft(Int.MaxValue)(_ min _).drop(1)).transpose
      .map(_.scanLeft(Int.MaxValue)(_ min _).drop(1)).transpose
    def getX1(i: Int)(j: Int):Option[Int] = 
      Option.when(i>=0 && i<grid.length && j>=0 && j<grid.head.length) {x1(i)(j)}
    val x2 = (grid.toList.flatten zip x1.toList.flatten).map{case (a,b) => a-b}.max
    val x3 = (for{i <- grid.indices; j <-grid.head.indices} yield { (i,j)})
      .flatMap{case (i,j) =>
        List(getX1(i-1)(j), getX1(i)(j-1)).flatten.map{case v => grid(i)(j) - v}
      }.max
    x3
}
```