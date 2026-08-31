# Golang Solution with Explanation and Comments

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/3442373/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/3442373/)

---

The problem asks us to find the lowest common ancestor of the deepest leaves of a binary tree. To solve this problem, we can use a depth-first search (DFS) to traverse the binary tree and keep track of the depth of each node. We'll need to return two values from our DFS: the depth of the deepest leaf node in the subtree rooted at the current node, and the lowest common ancestor of the deepest leaves in the subtree rooted at the current node.

Let's break down how the `dfs` function works. For each node in the binary tree, we recursively call `dfs` on its left and right children (if they exist). This returns the depth of the deepest leaf node and the LCA of the deepest leaves in the subtree rooted at each child.

Next, we check if the depths of the left and right subtrees are the same. If they are, then the LCA of the deepest leaves in the subtree rooted at the current node is the current node itself.

If the depth of the left subtree is greater than the depth of the right subtree, then the LCA of the deepest leaves in the subtree rooted at the current node is the LCA of the deepest leaves. 

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
func lcaDeepestLeaves(root *TreeNode) *TreeNode {
    _, res := dfs(root)

    return res
}

func dfs(root *TreeNode) (int, *TreeNode) {
    left := 0
    lNode := &TreeNode{}
    right := 0
    rNode := &TreeNode{}
    
    if root.Left != nil {
        left, lNode = dfs(root.Left)
    }
    if root.Right != nil {
        right, rNode = dfs(root.Right)
    }

    if left == right {
        return left + 1, root
    }
    if left > right {
        return left + 1, lNode
    }
    return right + 1, rNode
}
```

**If This Solution Helps, Please Up Vote!**