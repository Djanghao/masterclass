# scala recursive immutable solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/video-stitching/solutions/1636431/](https://leetcode.com/problems/video-stitching/solutions/1636431/)

---

```scala
// 1. sort clips by start time (for the same start time latest end time wins)
// 2. select "valid" clips with the latest end time
object Solution {
  def videoStitching(clips: Array[Array[Int]], time: Int): Int = {
    lazy val sorted = clips.sortWith{case (a,b) => 
      a.head<b.head || (a.head==b.head && a.last>b.last) }
    def traverse(seq:Seq[Array[Int]], last:Array[Int], count:Int):Int = {
      // println(s"    def traverse($seq, $last, $count)")
      lazy val (take,drop) = seq.span(_.head<=last.last)
      if(last.last>=time) count
      else if(seq.isEmpty || take.isEmpty) -1
      else traverse(drop,take.maxBy(_.last),count+1)
    }
    if(sorted.head.head>0) -1 
    else traverse(sorted.tail, sorted.head,1)
  }
}
```