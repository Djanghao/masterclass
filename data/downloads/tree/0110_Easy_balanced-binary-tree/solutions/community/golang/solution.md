# Clean And Efficient O(n) Time Solution

**Author:** vladiq
**Votes:** 6
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/2940264/](https://leetcode.com/problems/balanced-binary-tree/solutions/2940264/)

---

Naive approach would be to traverse every node of the tree and determine if its' subtree is balanced.

Instead, we will be traversing down to the leaves and then calculating the height. This approach would give us $O(n)$ time complexity as we never solve the same problem multiple times, building the solution bottom to top using the heights calculated previously.

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func isBalanced(root *TreeNode) bool {
    res, _ := dfs(root)
    return res
}

func dfs(root *TreeNode) (bool, int) {
    if root == nil {
        return true, 0
    }

    isLeftBalanced, leftHeight := dfs(root.Left)
    isRightBalanced, rightHeight := dfs(root.Right)
    diff := abs(leftHeight - rightHeight)
    if isLeftBalanced && isRightBalanced && diff <= 1 {
        return true, 1 + max(leftHeight, rightHeight)
    }
    return false, -1
}

func abs(n int) int {
    if n < 0 {
        return -n
    }
    return n
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```