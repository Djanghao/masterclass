# scala oneliner with LazyList (Stream)

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix-iii/solutions/5608324/](https://leetcode.com/problems/spiral-matrix-iii/solutions/5608324/)

---

```scala
object Solution {
  def spiralMatrixIII(rows: Int, cols: Int, rStart: Int, cStart: Int): Array[Array[Int]] = 
    (LazyList.from(1).flatMap(x => List.fill(2)(x)) 
      zip
    LazyList.continually(Seq(Seq(0, 1), Seq(1, 0), Seq(0, -1), Seq(-1, 0))).flatten
    ).scanLeft(Seq(rStart,cStart)){ case (rc,(len,inc)) =>
        (rc zip inc.map(_ * len)).map{case (a,b) => a+b}
    }.sliding(2,1).flatMap{ case Seq(Seq(x0,y0),Seq(x1,y1)) =>
        if(x1==x0) (y0 until y1 by (y1-y0).sign).map(Array(x0,_))
        else (x0 until x1 by (x1-x0).sign).map(Array(_,y0))
    }.filter{case Array(r,c) => r>=0 && r<rows && c>=0 && c<cols}
      .take(rows*cols).toArray
}
```