# Scala union find

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/3465805/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/3465805/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O((n+m)log m+ q log q) ???
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n+m+q)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    import scala.collection.mutable
    def distanceLimitedPathsExist(n: Int, edgeList: Array[Array[Int]], queries: Array[Array[Int]]): Array[Boolean] = {
      val uf = UnionFind(n)
      val edges = edgeList.sortBy(_(2))
      val q = queries.zipWithIndex.sortBy(_._1(2))
      val res = new Array[Boolean](queries.length)
      var i = 0
      for ((query, idx) <- q) {
        while (i < edges.length && edges(i)(2) < query(2)) {
          uf.union(edges(i)(0), edges(i)(1))
          i += 1
        }
        res(idx) = uf.find(query(0)) == uf.find(query(1))
      }
      res
    }

    case class UnionFind(n: Int) {
      private val parent = Array.range(0, n)
      private val rank = Array.fill(n)(0)

      def find(x: Int): Int = {
        if (parent(x) != x) parent(x) = find(parent(x))
        parent(x)
      }

      def union(x: Int, y: Int): Unit = {
        val px = find(x)
        val py = find(y)
        if (px == py) return
        if (rank(px) < rank(py)) parent(px) = py
        else if (rank(px) > rank(py)) parent(py) = px
        else {
          parent(px) = py
          rank(py) += 1
        }
      }
    }
}
```