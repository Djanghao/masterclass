# scala fast short immutable dfs recursion with flatMap

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/1600491/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/1600491/)

---

```scala
  def allPathsSourceTarget(graph: Array[Array[Int]]): List[List[Int]] = {
    val to = graph.size-1
    def traverse(from:Int, path: List[Int]): List[List[Int]] =
      if(from==to) List((from +: path).reverse)
      else graph(from).flatMap(node=>traverse(node, from +: path)).toList
    traverse(0,List())
  }

```