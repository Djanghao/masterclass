# Scala 100% runtime 100% memory recursive solution

**Author:** tarasbabii18
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132834/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132834/)

---

```
object Solution {
    def flipMatchVoyage(root: TreeNode, voyage: Array[Int]): List[Int] = {
        var i = 0
        def recur(root: TreeNode, res: List[Int]): List[Int] = {
          if (root == null) {
            res
          } else if (root.value != voyage(i)) {
            List(-1)
          } else if (root.left != null && root.left.value != voyage(i + 1)) {
            i += 1
            res ++: List(root.value) ++: recur(root.right, res) ++: recur(root.left, res)
          } else {
            i += 1
            res ++: recur(root.left, res) ++: recur(root.right, res)
          }
        }
        val res = recur(root, List())
        if (res.contains(-1)) List(-1) else res
    }
}
```