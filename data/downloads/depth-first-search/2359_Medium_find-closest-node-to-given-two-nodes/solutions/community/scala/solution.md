# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3099614/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3099614/)

---

# Approach
1. Create 2 distance array with djikstra's algorithm which finds shortest path
2. Find the lowest index with the minimum distance between the two nodes given
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable.Queue

object Solution {
    def closestMeetingNode(edges: Array[Int], node1: Int, node2: Int): Int = {
        
        val n = edges.length

        def bfs(start: Int): Array[Int] = {

            val distance = Array.fill(n)(Int.MaxValue)
            distance(start) = 0

            val seen = Array.fill(n)(false)

            val queue = Queue[Int](start)

            while(queue.nonEmpty) {

                val current = queue.dequeue

                if(!seen(current)) {

                    seen(current) = true

                    val next = edges(current)
                    if(next != -1 && !seen(next)) {
                        distance(next) = distance(current) + 1
                        queue.enqueue(next)
                    }

                }
            }

            distance
        }

        val djikstra1 = bfs(node1)
        val djikstra2 = bfs(node2)

        var closestNode = -1
        var minDistance = Int.MaxValue

        import scala.math.max

        for(index <- edges.indices if minDistance > max(djikstra1(index), djikstra2(index))) {
            closestNode = index
            minDistance = max(djikstra1(index), djikstra2(index))
        }

        closestNode
    }
}
```