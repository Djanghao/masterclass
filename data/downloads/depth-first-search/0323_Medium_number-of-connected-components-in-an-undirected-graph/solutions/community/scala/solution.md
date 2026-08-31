# 100% runtime,using DSU

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/5796787/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/5796787/)

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
  def countComponents(n: Int, edges: Array[Array[Int]]): Int = {
    val rank = Array.fill(n)(1)
    val root: Array[Int] = (0 until n).map(i => i).toArray

    def findRoot(x: Int): Int = {
      if (x == root(x)) x
      else findRoot(root(x))
    }

    def union(edge: Array[Int]) = {
      val rootX = findRoot(edge(0))
      val rootY = findRoot(edge(1))
      if (rootX == rootY) 0
      else {
        if (rank(rootX) > rank(rootY)) root(rootY) = rootX
        else if (rank(rootY) > rank(rootX)) root(rootX) = rootY
        else {
          root(rootY) = rootX
          rank(rootX) = rank(rootX) + 1
        }
        1
      }
    }

    n - edges.map(union).sum
  }
}
```