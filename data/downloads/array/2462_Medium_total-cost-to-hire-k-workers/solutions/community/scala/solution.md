# Scala: simple ArrayDeque + 2 PriorityQueue + foldLeft

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/4725942/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/4725942/)

---

# Code
```
object Solution {
  def totalCost(costs: Array[Int], k: Int, candidates: Int): Long = {
    val ad = collection.mutable.ArrayDeque(costs: _*)
    val hq = collection.mutable.PriorityQueue[Int]()(Ordering.Int.reverse)      
    val lq = collection.mutable.PriorityQueue[Int]()(Ordering.Int.reverse)

    for(i <- 1 to candidates)                hq.enqueue(ad.removeHead())
    for(i <- 1 to candidates if ad.nonEmpty) lq.enqueue(ad.removeLast())

    (1 to k).foldLeft(0L) { (sum, i) =>
      val h = hq.headOption getOrElse Int.MaxValue
      val l = lq.headOption getOrElse Int.MaxValue
      val min = h min l

      if (h == min) {
        hq.dequeue()
        if (ad.nonEmpty) hq.enqueue(ad.removeHead())
      } else {
        lq.dequeue()
        if (ad.nonEmpty) lq.enqueue(ad.removeLast())
      } 
      
      sum + min
    }
  }
}
```