# scala solution with PriorityQueue

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4041154/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4041154/)

---

```
object Solution {
  import collection.mutable.PriorityQueue
  def minDeletions(s: String): Int = {
    val pq = PriorityQueue.from(s.groupMapReduce(identity)(_ => 1)(_ + _).values)
    def impl(acc: Int): Int =
      if(pq.size <= 1) acc else  {
        val h0 = pq.dequeue
        val h1 = pq.dequeue
        if(h0 == 0) { acc }
        else if(h0 == h1) { pq.enqueue(h0); pq.enqueue(h1-1); impl(acc+1) }
        else { pq.enqueue(h1); impl(acc) }
      }
    impl(0)
  }
}
```