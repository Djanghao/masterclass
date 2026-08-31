# ugly scala solution with mutable Array to avoid MLE

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/5427904/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/5427904/)

---

```scala
object Solution {
  val bMap = Array.fill(2,10_000)(42,42)
  def matrixSumQueries(n: Int, queries: Array[Array[Int]]): Long =
    def fill(i:Int=0 , j:Int=0): Unit =
      if(i<2) if(j>=n) fill(i+1,0) else { bMap(i)(j) = (-1,0); fill(i, j + 1)}
    def sum(i:Int=0 , j:Int=0, acc:Long=0L): Long =
      if(i>=n) acc
      else if(j>=n) sum(i+1,0,acc)
      else sum(i,j+1, acc + (if(bMap(0)(i)._1 > bMap(1)(j)._1) bMap(0)(i)._2 else bMap(1)(j)._2))
    fill()
    queries.zipWithIndex.foreach{ case (a,i) => bMap(a(0))(a(1)) = (i,a(2))}
    sum()

  def matrixSumQueriesMLE(n: Int, queries: Array[Array[Int]]): Long =
    val bMap = Array.fill(2,n)(-1,0)
    queries.zipWithIndex.foreach{ case (a,i) => bMap(a(0))(a(1)) = (i,a(2))}
    def sum(i:Int=0 , j:Int=0, acc:Long=0L): Long = {
      lazy val y0 = bMap(0)(i)
      lazy val y1 = bMap(1)(j)
      if(i>=n) acc
      else if(j>=n) sum(i+1,0,acc)
      else sum(i,j+1, acc + (if(y0._1 > y1._1) y0._2 else y1._2))
    }
    sum()

  def matrixSumQueriesMap(n: Int, queries: Array[Array[Int]]): Long =
    lazy val aMap = queries.zipWithIndex.map{
      case (a,i) => (a(0),a(1)) -> (i,a(2)) }.to(Map)
      //.withDefaultValue(-1,0)
    lazy val ans = (for(i <- 0 until n; j <- 0 until n) yield {
      //List(aMap((0,i)), aMap((1,j))).max._2
      if(aMap((0,i))._1 > aMap((1,j))._1) aMap((0,i))._2 else aMap((0,i))._1
    }).foldLeft(0L)(_ + _)
    def sum(i:Int=0 , j:Int=0, acc:Long=0L): Long = {
      lazy val y0 = aMap.getOrElse((0,i), (-1,0))
      lazy val y1 = aMap.getOrElse((1,j), (-1,0))
      if(i>=n) acc
      else if(j>=n) sum(i+1,0,acc)
      else sum(i,j+1, acc + (if(y0._1 > y1._1) y0._2 else y1._2))
      //else sum(i,j+1, acc + (if(aMap((0,i))._1 > aMap((1,j))._1) aMap((0,i))._2 else aMap((0,i))._1))
      // else sum(i,j+1, acc + Seq(aMap((0,i)), aMap((1,j))).max._2)
    }
    sum()
}
```