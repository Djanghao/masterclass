# scala solution using Kahn's algorithm

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/4649623/](https://leetcode.com/problems/parallel-courses/solutions/4649623/)

---

# Code
```
import scala.collection.mutable

object Solution {
  def minimumSemesters(n: Int, relations: Array[Array[Int]]): Int = {
    val map = mutable.Map.empty[Int, mutable.ListBuffer[Int]]
    val indegree = new Array[Int](n + 1)
    for(rel <- relations) {
      indegree(rel(1)) += 1
      map.getOrElseUpdate(rel(0), mutable.ListBuffer.empty) += rel(1)
    }
    val queue = mutable.Queue.empty[Int]
    for(i <- 1 to n)
      if(indegree(i) == 0)
        queue.enqueue(i)
    if(queue.isEmpty)
      return -1
    var step = 0
    var visitedCount = 0
    while(queue.nonEmpty) {
      val size = queue.size
      step += 1
      for(_ <- 0 until size) {
        visitedCount += 1
        val cur = queue.dequeue()
        map.get(cur).foreach { neighbors =>
          neighbors.foreach { k =>
            indegree(k) -= 1
            if(indegree(k) == 0)
              queue.enqueue(k)
          }
        }
      }
    }
    if(visitedCount == n) step else -1
  }
}


```