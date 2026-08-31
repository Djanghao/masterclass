# 9 lines scala greedy recursion with SortedSet(s)

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/3082683/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/3082683/)

---

# Code
```scala
  def restoreMatrix(rowSum: Array[Int], colSum: Array[Int]): Array[Array[Int]] = {
    val arr = Array.fill(rowSum.size,colSum.size)(0)
    def impl(rem: Long, sums: List[Set[(Int,Int)]]): Array[Array[Int]] =
      if(rem==0L) arr else {
        lazy val mins = sums.map(_.min)
        lazy val mn = mins.map(_._1).min
        arr(mins(0)._2)(mins(1)._2) = mn
        impl(rem-mn, sums.zip(mins).map{case (set, (x,i))=> set - ((x,i)) ++ (Some(x-mn,i).filter(_._1 > 0))})
      }
    impl(rowSum.map(_.toLong).sum, List(rowSum,colSum).map(_.zipWithIndex.filter(_._1 > 0).to(collection.immutable.SortedSet)))
  }
```
another solution, with unfold
```scala
  def restoreMatrix(rowSum: Array[Int], colSum: Array[Int]): Array[Array[Int]] = {
    import scala.util.chaining.scalaUtilChainingOps
    import collection.immutable.SortedSet
    lazy val l = LazyList.unfold((rowSum.zipWithIndex.to(SortedSet), colSum.zipWithIndex.to(SortedSet))) {
      case (rs0, cs0) =>
        lazy val (rs,cs) = (rs0.dropWhile(_._1 == 0), cs0.dropWhile(_._1 == 0))
        Option.when(rs.nonEmpty && cs.nonEmpty) {
          if (rs.head._1 > cs.head._1) (((rs.head._2, cs.head._2), cs.head._1), (rs.tail + ((rs.head._1 - cs.head._1, rs.head._2)), cs.tail))
          else if (rs.head._1 < cs.head._1) (((rs.head._2, cs.head._2), rs.head._1), (rs.tail, cs.tail + ((cs.head._1 - rs.head._1, cs.head._2))))
          else (((rs.head._2, cs.head._2), rs.head._1), (rs.tail, cs.tail)) // if (rs.head._1 == cs.head._1)
        }
    }
    Array.fill(rowSum.length, colSum.length)(0).tap(ans => l.foreach { case ((i, j), v) => ans(i)(j) = v })
  }
```
