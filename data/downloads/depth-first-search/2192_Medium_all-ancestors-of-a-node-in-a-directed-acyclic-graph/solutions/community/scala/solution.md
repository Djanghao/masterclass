# Scala: short recursive with memo but O(n*n)

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5386137/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5386137/)

---

# Code
```
object Solution {
  def getAncestors(n: Int, edges: Array[Array[Int]]): List[List[Int]] = {
    val parents = Array.tabulate[Array[Int]](n)(edges.groupMap(_(1))(_(0)).withDefaultValue(Array.empty[Int]))
    val ancestors = Array.ofDim[Array[Int]](n)

    def ancestorsOf(i: Int): Array[Int] = {
      if (ancestors(i) == null) ancestors(i) = (parents(i) ++ parents(i).flatMap(ancestorsOf)).distinct
      ancestors(i)
    }

    ancestors.indices.foreach(ancestorsOf)
    ancestors.map(_.sorted.toList).toList
  }
}
```