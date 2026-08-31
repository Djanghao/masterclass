# Scala FP: tailrec BFS O(N) (never throws MLE)))

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479389/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5479389/)

---

# Code
```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
  def createBinaryTree(descriptions: Array[Array[Int]]): TreeNode = {
    val children = descriptions.groupBy(_.head).withDefaultValue(Array.empty[Array[Int]])
    
    @annotation.tailrec
    def buildChildrenBFS(roots: List[TreeNode]): Unit =
      if (roots.nonEmpty) 
        buildChildrenBFS(roots.flatMap(root =>
          children(root.value).map { descr =>
            val child = new TreeNode(descr(1))
            if (descr(2) == 1) root.left = child else root.right = child
            child
          }
        ))

    val root = new TreeNode((children.keySet -- descriptions.map(_(1))).head)
    buildChildrenBFS(List(root))
    root
  }
}
```