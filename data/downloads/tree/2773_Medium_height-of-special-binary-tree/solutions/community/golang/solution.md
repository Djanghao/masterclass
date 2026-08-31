# [Golang] Simple condition to check leaf nodes

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/height-of-special-binary-tree/solutions/3880787/](https://leetcode.com/problems/height-of-special-binary-tree/solutions/3880787/)

---

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func heightOfTree(root *TreeNode) int {
  if root == nil || (root.Left != nil && root.Left.Right == root) {
    // Condition for the leaf node root.Left.Right == root (or) root.Right.Left == root
    return 0
  }
  return 1 + max(heightOfTree(root.Left), heightOfTree(root.Right))
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}
```