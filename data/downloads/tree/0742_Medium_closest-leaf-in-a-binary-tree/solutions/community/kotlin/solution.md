# Simple Kotlin Solution

**Author:** sachet_wasti
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/2751707/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/2751707/)

---

# Code
```
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
typealias hmIAr = HashMap<Int, ArrayList<Int>>
typealias hsI = HashSet<Int>
class Solution {
  fun traverse(root: TreeNode?, par: Int, gr: hmIAr, st: hsI) {
    if (root == null) return
    gr[root.`val`] = ArrayList<Int>()
    if (par != -1) {
      gr[par]?.add(root.`val`)
      gr[root.`val`]?.add(par)
    }
    if (root.left == null && root.right == null) st.add(root.`val`)
    traverse(root.left, root.`val`, gr, st)
    traverse(root.right, root.`val`, gr, st)
  }
  fun bfs(gr: hmIAr, nd: Int, st: hsI): Int {
    val q = LinkedList<Int>()
    q.add(nd)
    val visited = HashSet<Int>()
    while (!q.isEmpty()) {
      val tmp = q.poll()
      if (gr[tmp]!!.size == 1 && st.contains(tmp)) return tmp
      for (i in gr[tmp].orEmpty()) {
        if (!visited.contains(i)) {
          q.add(i)
          visited.add(i)
        }
      }
    }
    return -1
  }
  fun findClosestLeaf(root: TreeNode?, k: Int): Int {
    if (root != null && root.left == null && root.right == null) {
      return k
    }
    val graph = hmIAr()
    val st = hsI()
    traverse(root, -1, graph, st)
    return bfs(graph, k, st)
  }
}
```