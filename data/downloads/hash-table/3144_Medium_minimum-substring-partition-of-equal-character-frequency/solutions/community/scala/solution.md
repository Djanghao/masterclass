# ugly bfs with mutable data structures

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5466468/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5466468/)

---

Something is severely wrong with GC, as one have to write "java-like" scala to avoid MLE
```scala
object Solution {
  import scala.collection.immutable.Queue
  import scala.collection.immutable.BitSet
  import scala.collection.mutable
  import scala.util.chaining._
  val qs = Vector(mutable.BitSet.empty, mutable.BitSet.empty)
  val v = mutable.BitSet.empty
  val aPfx = Array.fill(1001,26)(0)
  val tree:Array[mutable.BitSet] = Array.fill(1001)(mutable.BitSet.empty)
  def diffOk(i:Int, j:Int): Boolean = {
    var k=0; var last=0
    while (k<26 && last != -1) {
      if(aPfx(j)(k)!=aPfx(i)(k)) {
        lazy val next = aPfx(j)(k) - aPfx(i)(k)
        if (last != 0 && last != next) last = -1
        else if (last == 0 && next != 0) last = next
      }
      k+=1
    }
    last != -1
  }
  def initPfx(j: Int=25):Unit = if(j>=0) {aPfx(0)(j) = 0; initPfx(j-1)}
  def cpPfx(i: Int, j: Int=25):Unit = if(j>=0) {aPfx(i + 1)(j) = aPfx(i)(j); cpPfx(i,j-1)}
  def fillPfx(str:String, i:Int=0 ): Unit = if(i<str.length) {cpPfx(i); aPfx(i+1)(str(i)-'a') += 1; fillPfx(str,i+1)}
  def fillTree(str:String, i:Int=0): Unit = if(i<=str.size) {
    tree(i).clear()
    var j=i+1
    while(j<=str.length){if (diffOk(i, j)) tree(i) += j; j+=1}
    fillTree(str,i+1)
  }

  def minimumSubstringsInPartition(s: String): Int = {
    initPfx()
    fillPfx(s)
    fillTree(s)
    def mbfs(idx: Int=0, step: Int=0): Int = {
      if(qs(idx).isEmpty) ???
      qs(1-idx).clear()
      qs(1-idx) ++= qs(idx).iterator.filterNot(v.contains).flatMap(tree)
      if(qs(1-idx).contains(s.length)) step+1
      else {v ++= qs(idx); mbfs(1-idx, step+1)}
    }
    v.clear()
    qs.foreach(_.clear())
    qs(0) += 0
    mbfs(0,0)
  }
}
```