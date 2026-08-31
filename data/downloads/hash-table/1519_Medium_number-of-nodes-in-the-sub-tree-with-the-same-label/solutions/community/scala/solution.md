# Scala dfs

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3393118/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3393118/)

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
```
object Solution {
    import scala.collection.mutable.ArrayBuffer
    def countSubTrees(n: Int, edges: Array[Array[Int]], labels: String): Array[Int] = {
        val graph = Array.fill(n)(ArrayBuffer[Int]())
        for (edge <- edges) {
            graph(edge(0)) += edge(1)
            graph(edge(1)) += edge(0)
        }
        val res = Array.fill(n)(0)
        dfs(0, -1, graph, labels, res)
        res
    }

    def dfs(node: Int, parent: Int, graph: Array[ArrayBuffer[Int]], labels: String, res: Array[Int]): Array[Int] = {
        val count = Array.fill(26)(0)
        count(labels(node) - 'a') += 1
        for (child <- graph(node))
            if (child != parent) {
                val childCount = dfs(child, node, graph, labels, res)
                for (i <- 0 until 26) count(i) += childCount(i)
            }
        res(node) = count(labels(node) - 'a')
        count
    }
}
```