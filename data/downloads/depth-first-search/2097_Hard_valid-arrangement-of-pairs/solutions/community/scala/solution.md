# Non FP, mutable solution.

**Author:** maciejwadowski
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-arrangement-of-pairs/solutions/6097604/](https://leetcode.com/problems/valid-arrangement-of-pairs/solutions/6097604/)

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
object Solution {

    import scala.collection.mutable.ListBuffer
    def validArrangement(pairs: Array[Array[Int]]): Array[Array[Int]] = {
        val graph = pairs.groupBy(_(0)).map(x => x._1 -> ListBuffer(x._2.map(_(1)): _ *))
        val startNode = 
            pairs
                .foldLeft(Map[Int,Int]()) { case (inout, edge) => 
                    inout + ( edge(0) -> (inout.getOrElse(edge(0), 0) + 1)) + (edge(1) -> (inout.getOrElse(edge(1), 0) - 1) )
                }
                .find(_._2 == 1)
                .map(_._1)
                .getOrElse(pairs(0)(0))
        val path = ListBuffer[Array[Int]]()

        def dfs(currentNode: Int): Unit = {
            if (!graph.contains(currentNode))()
            else {
                while(graph(currentNode).nonEmpty) {
                    val nextNode = graph(currentNode).remove(0)
                    dfs(nextNode)
                    path.append(Array(currentNode, nextNode))
                }
            }
        }
        dfs(startNode)
        path.toArray.reverse
    }
}
```