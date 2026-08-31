# Go, simple traverse

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/4129859/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/4129859/)

---

# Code
```
func insertIntoMaxTree(root *TreeNode, val int) *TreeNode {
    if root == nil {
        return &TreeNode{Val: val}
    }

    if root.Val < val {
        return &TreeNode{Val:val, Left: root}
    }

    root.Right = insertIntoMaxTree(root.Right, val)
    return root
}
```