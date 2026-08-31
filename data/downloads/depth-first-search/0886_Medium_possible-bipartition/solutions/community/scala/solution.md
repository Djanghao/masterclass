# Scala DFS

**Author:** rajeshsantha
**Votes:** 1
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/655074/](https://leetcode.com/problems/possible-bipartition/solutions/655074/)

---

```
object Solution {
 /** **
    * Runtime: 1096 ms, faster than 100.00% of Scala online submissions for Possible Bipartition.
    * Memory Usage: 83.8 MB, less than 100.00% of Scala online submissions for Possible Bipartition.
    *
    * 66 / 66 test cases passed.
    * Status: Accepted
    * Runtime: 1096 ms
    * Memory Usage: 83.8 MB
    *
    */    
  def possibleBipartition(N: Int, dislikes: Array[Array[Int]]): Boolean = {
    val graph = Array.ofDim[Int](N, N)
    for (d <- dislikes) {
      graph(d(0) - 1)(d(1) - 1) = 1
      graph(d(1) - 1)(d(0) - 1) = 1
    }
    val group = new Array[Int](N)

    for (i <- 0 until N) {
      if (group(i) == 0 && !dfs(graph, group, i, 1)) return false
    }

    true
  }

   def dfs(graph: Array[Array[Int]], group: Array[Int], index: Int, g: Int): Boolean = {
    group(index) = g
    for (i <- graph.indices) {

      if (graph(index)(i) == 1) {

        if (group(i) == g) return false
        if (group(i) == 0 && !dfs(graph, group, i, -(g))) return false
      }
    }
    true
  }

}
```