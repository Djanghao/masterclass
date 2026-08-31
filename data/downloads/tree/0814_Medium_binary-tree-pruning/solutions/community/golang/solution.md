# Go golang Postorder solution

**Author:** Leaf_Peng
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/564158/](https://leetcode.com/problems/binary-tree-pruning/solutions/564158/)

---

```go
func pruneTree(root *TreeNode) *TreeNode {
    if root == nil { return nil }
    root.Left = pruneTree(root.Left)
    root.Right = pruneTree(root.Right)
    if root.Left == nil && root.Right == nil && root.Val == 0 { return nil }
    return root
}
```