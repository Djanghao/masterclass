# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3345191/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3345191/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def longestCycle(edges: Array[Int]): Int = {
        
        val n = edges.length
        val visited = new Array[Boolean](n)
        val indegree = new Array[Int](n)

        for(edge <- edges if edge != -1) indegree(edge) += 1

        import scala.collection.mutable.Queue

        val queue = Queue[Int]()

        for((numberOfIndegree, node) <- indegree.zipWithIndex if numberOfIndegree == 0) queue.enqueue(node)

        while(queue.nonEmpty) {
            
            val current = queue.dequeue
            visited(current) = true
            val destination = edges(current)

            if(destination != -1) {
                indegree(destination) -= 1
                if(indegree(destination) <= 0) queue.enqueue(destination)
            }
        }

        import scala.math.max

        var longestCycle = -1

        for(index <- edges.indices if(!visited(index))) {
            
            var count = 1
            var current = index
            var destination = edges(current)
            visited(current) = true

            while(destination != index) {
                
                visited(destination) = true
                count += 1
                destination = edges(destination)

            }
            
            longestCycle = max(longestCycle, count)

        }

        longestCycle
    }
}
```