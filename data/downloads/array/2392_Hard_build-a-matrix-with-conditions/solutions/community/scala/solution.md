# Scala: short recursive FP topological sorting

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5558154/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5558154/)

---

# Code
```
object Solution {
  def buildMatrix(k: Int, rowConditions: Array[Array[Int]], colConditions: Array[Array[Int]]): Array[Array[Int]] = {
    val kList = List.range(1, k + 1)
    def additionToK(set: Set[Int]): List[Int] = kList.collect { case n if !set(n) => n}

    @annotation.tailrec
    def topoSort(edges: Array[Array[Int]], sorted: List[Int]): Array[Int] =
      if (edges.isEmpty) (additionToK(sorted.toSet) ++ sorted).toArray.reverse
      else {
        val zeroDegree = edges.map(_(0)).toSet diff edges.map(_(1)).toSet
        if (zeroDegree.isEmpty) Array.empty else topoSort(edges.filterNot(edge => zeroDegree(edge(0))), zeroDegree.toList ++ sorted)
      }

    val rowOrder = topoSort(rowConditions, additionToK(rowConditions.toSet.flatten))
    val colOrder = topoSort(colConditions, additionToK(colConditions.toSet.flatten))

    if (rowOrder.length < k || colOrder.length < k) Array.empty
    else Array.tabulate[Int](k, k)((i, j) => if (rowOrder(i) == colOrder(j)) rowOrder(i) else 0)
  }
}
```