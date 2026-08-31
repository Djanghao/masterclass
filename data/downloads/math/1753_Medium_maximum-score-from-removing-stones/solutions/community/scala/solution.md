# Scala solution with PriorityQueue

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/2964754/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/2964754/)

---

# Approach
PriorityQueue

# Code
```
object Solution {
  def maximumScore(a: Int, b: Int, c: Int): Int = {
    val pq = collection.mutable.PriorityQueue.from(List(a,b,c))
    def impl(acc:Int): Int = {
      if(pq.size <2) acc else {
        val x1 = (pq.dequeue) - 1
        val x2 = (pq.dequeue) - 1
        List(x1,x2).foreach{x => if (x>0) pq.enqueue(x)}
        impl(acc+1)
      }
    }
    impl(0)
  }
}
```