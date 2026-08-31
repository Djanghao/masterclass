# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/5004505/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/5004505/)

---

```
object Solution {
  def minimumOperationsToWriteY(grid: Array[Array[Int]]): Int = {
    lazy val m = grid.size/2
    def inY(y: Int,x:Int): Boolean = (x==m && y>=m) || (y<m && x==y) || (y<m && x-m == m-y) 
    lazy val counts = (0 to 2).flatMap{c => List(false,true).map{b => (c,b) -> 0}}.to(Map) ++
      grid.indices.flatMap{case i => grid.head.indices.map{case j => grid(i)(j) -> inY(i,j)}}
      .groupMapReduce(identity)(_ => 1)(_ + _)

    (0 to 2).flatMap{c0 => 
      lazy val s0 = (0 to 2).collect{case c if c != c0 => counts(c,true )}.sum
      (0 to 2).collect{case c1 if c1 != c0 =>
        s0 + (0 to 2).collect{case c if c != c1 => counts(c,false)}.sum
      }
    }.min
  }
}

```