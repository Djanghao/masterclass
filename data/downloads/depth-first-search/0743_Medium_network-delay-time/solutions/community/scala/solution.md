# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/4256372/](https://leetcode.com/problems/network-delay-time/solutions/4256372/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach Dijkstra
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O((n+m) log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n+m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def networkDelayTime(times: Array[Array[Int]], n: Int, k: Int): Int = {
      val g = Array.fill(n+1)(List.empty[(Int, Int)])
      for (time <- times) g(time(0)) ::= (time(1), time(2))

      val pq = collection.mutable.PriorityQueue.empty[(Int, Int)](Ordering.by(_._2))
      pq.enqueue((k, 0))

      val dist = Array.fill(n+1)(Int.MaxValue)
      dist(k) = 0

      while (pq.nonEmpty) {
        val node = pq.dequeue
        if (node._2  <= dist(node._1))
          for (next <- g(node._1)) {
            val newDist = node._2 + next._2
            if (newDist < dist(next._1)) {
              dist(next._1) = newDist
              pq.enqueue((next._1, newDist))
            }
          }
      }

      dist.tail.max match {
        case Int.MaxValue => -1
        case x => x
      }
    }
}
```