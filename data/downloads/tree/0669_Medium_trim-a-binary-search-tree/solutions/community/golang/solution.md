# Go 100% solution

**Author:** tjucoder
**Votes:** 3
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/493266/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/493266/)

---

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func trimBST(root *TreeNode, L int, R int) *TreeNode {
    return walk(root, L, R)
}

func walk(node *TreeNode, L, R int) *TreeNode {
    if node == nil {
        return nil
    }
    if node.Val < L {
        return walk(node.Right, L, R)
    } else if node.Val > R {
        return walk(node.Left, L, R)
    } else {
        node.Left = walk(node.Left, L, R)
        node.Right = walk(node.Right, L, R)
        return node
    }
}
```