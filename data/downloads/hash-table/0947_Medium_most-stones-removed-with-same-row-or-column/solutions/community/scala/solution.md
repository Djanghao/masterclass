# 7 lines scala union find

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/5706916/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/5706916/)

---

```scala []
object Solution {
  import scala.util.chaining._
  import collection.mutable
  def removeStones(stones: Array[Array[Int]]): Int =
    val djs = stones.map{l => (l.head,l.last) -> (l.head,l.last)}.to(mutable.Map) 
    def root(r: Int, c: Int): (Int,Int) = if(djs((r,c)) == (r,c)) (r,c) else (root _).tupled(djs((r,c))).tap(rc => djs((r,c))=rc)
    def join(a: (Int,Int))(b: (Int,Int)): Unit = (root _).tupled(djs((a._1,a._2))).pipe{case ra => djs((ra._1,ra._2)) = (root _).tupled(djs((b._1,b._2)))}
    stones.groupMap(_.head)(_.last).foreach{case (r,cs) => cs.iterator.drop(1).foreach{case c => join(r,cs.head)(r,c)}}
    stones.groupMap(_.last)(_.head).foreach{case (c,rs) => rs.iterator.drop(1).foreach{case r => join(rs.head,c)(r,c)}}
    djs.keysIterator.foreach((root _).tupled)
    stones.length - djs.valuesIterator.distinct.length
}

```