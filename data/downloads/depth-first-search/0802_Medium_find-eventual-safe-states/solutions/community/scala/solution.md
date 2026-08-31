# [scala] Using topological sort | Beats 100% | BFS

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/5996959/](https://leetcode.com/problems/find-eventual-safe-states/solutions/5996959/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.collection.mutable

object Solution {
    def eventualSafeNodes(graph: Array[Array[Int]]): List[Int] = {
        val n = graph.size
        val indegree = graph.map(_.size)
        val queue = mutable.Queue[Int]()
        indegree.indices.foreach{x => if(indegree(x) == 0) queue.enqueue(x)}
        val al = Array.fill(n)(List[Int]())
        graph.zipWithIndex.foreach {case (n, node) =>
            n.foreach{x =>
                al(x) = al(x) :+ node
            }
        }
        val order = mutable.ArrayBuffer[Int]()

        while(!queue.isEmpty){
            val consider = queue.dequeue
            order += consider
            for(x <- al(consider)) {
                indegree(x) -= 1
                if(indegree(x) == 0) queue.enqueue(x)
            }
        }
        order.toList.sorted
    }
}
```