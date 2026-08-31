# beats 100 % runtime n memeory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/5790499/](https://leetcode.com/problems/course-schedule-iv/solutions/5790499/)

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
  def checkIfPrerequisite(numCourses: Int, prerequisites: Array[Array[Int]], queries: Array[Array[Int]]): List[Boolean] = {

    val graph = buildGraph(prerequisites)
    val map = mutable.Map.empty[Int, mutable.Set[Int]]
    (0 until numCourses).foreach { i =>
      val set = mutable.Set.empty[Int]
      val updatedSet=dfs(i, Array.ofDim[Boolean](numCourses), set, graph, map)
    //   println(s"updated set ${updatedSet}")
      map.put(i, updatedSet)
    }
    // println(map)
    queries.map { query =>
      map.contains(query(0)) && map(query(0)).contains(query(1))
    }.toList

  }

  private def dfs(i: Int, visited: Array[Boolean],
                  allEments: mutable.Set[Int],
                  graph: Map[Int, Array[Int]],
                  map: mutable.Map[Int, mutable.Set[Int]]
                 ):  mutable.Set[Int] = {
    visited(i) = true
    val incoming = graph.getOrElse(i, Array.empty[Int])
    incoming.foreach { edge =>
    // println(s"edge is ${edge} for i ${i}")
      if(!visited(edge)) {
        if (map.contains(edge))
          allEments.addAll(map(edge))
        else {
          dfs(edge, visited, allEments, graph, map)
        }
      }
    }
    allEments.add(i)
    allEments
  }

  private def buildGraph(prerequisites: Array[Array[Int]]) = {
    prerequisites.map { pair =>
      (pair(0), pair(1))
    }.groupBy(_._1).map(x => (x._1, x._2.map(_._2)))
  }
}
```