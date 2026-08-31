# Simple solution using BFS and a min heap/priority queue, beats 100% of submissions

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4277713/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4277713/)

---

# Approach
We first create and ajecency map and we also store the weight/cost. 

For the adding of the new edge it's nothing fancy.

For the shortest path we use BFS and a priotity queue/min heap. We also need a visited set to avaid infinite loops.

And of course we must take care of a few edge cases :)

# Code
```
  import scala.collection.mutable
  import scala.collection.mutable.ListBuffer

  import java.util.{Collections, Comparator, PriorityQueue}
  
  class Graph(val _n: Int, val _edges: Array[Array[Int]]) {


    val adj: mutable.Map[Int, mutable.ListBuffer[(Int, Int)]] = initGraph(_edges, _n)

    private def initGraph(edges: Array[Array[Int]], n: Int): mutable.Map[Int, mutable.ListBuffer[(Int, Int)]] = {

      val adj = new mutable.HashMap[Int, mutable.ListBuffer[(Int, Int)]]()

      for (e <- edges) {

        if (adj.contains(e.head)) {

          adj(e.head) += ((e(1), e(2)))

        } else {

          val neighbours = new ListBuffer[(Int, Int)]()
          neighbours += ((e(1), e(2)))

          adj.put(e.head, neighbours)

        }

      }

      adj
    }

    def addEdge(edge: Array[Int]) {

      if (adj.contains(edge.head)) {
        adj(edge.head) += ((edge(1), edge(2)))
      } else {
        val neighbours = new ListBuffer[(Int, Int)]()
        neighbours += ((edge(1), edge(2)))

        adj.put(edge.head, neighbours)
      }
    }

    def shortestPath(node1: Int, node2: Int): Int = {

      if (node1 == node2) {
        return 0
      }

      if (!adj.contains(node1)) {
        return -1
      }

      val comparator: Comparator[(Int, Int)] = (f:(Int, Int), s: (Int, Int)) => if (f._2 < s._2) -1 else 1  //to, cost
      val visited = new mutable.HashSet[Int]()

      val q = new PriorityQueue[(Int, Int)](comparator)
      visited += node1

      for (e <- adj(node1)) {
        q.offer((e._1, e._2))
      }

      while (!q.isEmpty) {

        val top = q.remove()
        visited += top._1

        if (top._1 == node2) {
          return top._2
        }

        if (adj.contains(top._1)) {
          for (e <- adj(top._1)) {
            if (!visited.contains(e._1)) {
              q.offer((e._1, e._2 + top._2))
            }
          }
        }
      }
      -1
    }
  }

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
```