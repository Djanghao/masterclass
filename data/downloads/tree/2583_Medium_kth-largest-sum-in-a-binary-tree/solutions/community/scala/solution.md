# [scala] - recursive BFS

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/3263623/](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/3263623/)

---

# Code
```
object Solution {
    
  def kthLargestLevelSum(root: TreeNode, k: Int): Long = {
    val sums = go(List(root), List.empty).sorted.reverse
    if(sums.size < k) -1 else  sums(k - 1)
  }

  def go(nodes: List[TreeNode], acc: List[Long]): List[Long] = {
    val nAcc = nodes.map(_.value).foldLeft(0L)(_ + _) :: acc
    val next = nodes.flatMap(n => List(n.left, n.right)).filter(_ != null)
    if(next.isEmpty) nAcc else go(next, nAcc)
  }
}
```