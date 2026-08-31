# Kotlin solution without recursion, memory-effective

**Author:** y-gagar1n
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/2970869/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/2970869/)

---

```
class Solution {
    fun allPathsSourceTarget(graph: Array<IntArray>): List<List<Int>> {
        val VISITED_NODE = Int.MIN_VALUE
        val n = graph.size - 1
        val visited = Stack<Int>()
        val stack = Stack<Int>()
        val result = mutableListOf<List<Int>>()
        stack.push(0)

        while (!stack.empty()) {
            val visiting = stack.pop()
            if (visiting == VISITED_NODE) {
                visited.pop()
            } else {
                stack.add(VISITED_NODE)
                for (adjNode in graph[visiting]) {
                    stack.add(adjNode)
                }
                visited.add(visiting)
                if (visiting == n) {
                    result.add(visited.toList())
                }
            }
        }
        return result
    }
}
```