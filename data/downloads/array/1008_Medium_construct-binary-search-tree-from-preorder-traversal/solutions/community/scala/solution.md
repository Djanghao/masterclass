# Scala, pimp my library.

**Author:** MihailsC
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/3120765/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/3120765/)

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
    def bstFromPreorder(preorder: Array[Int]): TreeNode = {
        val tree = TreeNode(preorder.head)
        preorder.tail.foreach(tree.add)
        tree
    }

    private implicit class TreeOps(tree: TreeNode) {
        def add(i: Int): Unit = {
            import tree._
            lazy val iNode = new TreeNode(i)
            if (i < value) Option(left).fold(ifEmpty = tree.left = iNode)(_.add(i))
            else Option(right).fold(ifEmpty = tree.right = iNode){ _.add(i) }
        }
    }
}
```