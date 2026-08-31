# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/5271440/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/5271440/)

---

```scala
object Solution {
  import collection.mutable
  def isPossible(nums: Array[Int]): Boolean = {
    def f(seq: Seq[(Int,Int)], last: Int, pq: mutable.PriorityQueue[Int]): Boolean = {
      lazy val i0 = mutable.PriorityQueue.fill(seq.head._2)(1)
      lazy val pqGrow = pq.map(_ + 1).to(mutable.PriorityQueue) ++
        List.fill(seq.head._2 - pq.size)(1)
      lazy val pqShrink = pqd.map(_ + 1).to(mutable.PriorityQueue)
      lazy val (pqt,pqd) = pq.splitAt(pq.size - seq.head._2)
      lazy val lastIsComplete = pq.iterator.forall(_ >= 3)
      lazy val lastIsComplete2 = pqt.iterator.forall(_ >= 3)

      if(seq.isEmpty) lastIsComplete
      else if(seq.head._1 - last != 1) lastIsComplete && f(seq.tail, seq.head._1, i0)
      else if(seq.head._2 >= pq.size) f(seq.tail, last + 1, pqGrow)
      else if(lastIsComplete2) f(seq.tail, last + 1, pqShrink)
      else false
    }
    lazy val x0 = nums.to(List).groupMapReduce(identity)(_ => 1)(_ + _)
      .to(List).sortBy(_._1)
    f(x0, -1, mutable.PriorityQueue())
  }
}

```