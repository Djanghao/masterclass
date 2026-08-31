# Simple Scala Solution

**Author:** serglihoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-paths/solutions/6035065/](https://leetcode.com/problems/binary-tree-paths/solutions/6035065/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use recursion to traverse and combine paths together from leaf nodes to root node. 

Can be rewritten to tail recursion if pass two lists as arguments (one for results and second list is paths to process).

# Code
```scala []
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def binaryTreePaths(root: TreeNode): List[String] = {
        if root == null then List.empty
        else
            val paths = binaryTreePaths(root.left) ++ binaryTreePaths(root.right)
            if paths.isEmpty then 
                List(root.value.toString)
            else 
                paths.map(path => s"${root.value}->$path") 
                
    }
}
```