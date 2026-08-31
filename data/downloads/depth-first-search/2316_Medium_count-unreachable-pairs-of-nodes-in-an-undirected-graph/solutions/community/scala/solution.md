# Scala DSU beats 100%

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/5262637/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/5262637/)

---

# Intuition
Disjoint set union will help building the graph components.
Once we have components with their sizes, it's a matter of scanning them one after another and adding to the result the current component size times all the remaining component elements count. 


# Complexity
- Time complexity:
$$O(n + k)$$ 
where n is the number of elements and k is the number of graph components

- Space complexity:
$$O(n + k)$$

# Code
```
object Solution {
  def countPairs(n: Int, edges: Array[Array[Int]]): Long = {
    val dsu = DSU(n)
    edges.foreach { a =>
      dsu.union(a(0), a(1))
    }
    var remainingElements = n.toLong
    var result = 0L
    dsu.componentIds.foreach { component =>
      val componentSize = dsu.rank(component)
      remainingElements -= componentSize
      result += componentSize * remainingElements
    }
    result
  }

  private case class DSU(n: Int) {
    private val ids = (0 until n).toArray
    val rank = Array.fill(n)(1)
    
    def componentIds = ids.zipWithIndex.filter(_ == _).map(_._1)
    
    def find(id: Int): Int = {
      var pid = ids(id)
      if (pid == id) id
      else {
        pid = find(pid)
        ids(id) = pid
        pid
      }
    }

    def union(id1: Int, id2: Int): Unit = {
      val pid1 = find(id1)
      val pid2 = find(id2)
      if (pid1 != pid2) {
        val rank1 = rank(pid1)
        val rank2 = rank(pid2)
        if (rank1 > rank2) {
          rank(pid1) += rank2
          ids(pid2) = pid1
        } else {
          rank(pid2) += rank1
          ids(pid1) = pid2
        }
      }
    }
  }
}
```