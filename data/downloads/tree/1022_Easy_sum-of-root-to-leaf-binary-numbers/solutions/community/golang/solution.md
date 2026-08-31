# Go recursive solution

**Author:** casd82
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/760466/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/760466/)

---

You've got to press it on you, you've just been thinking.

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func sumRootToLeaf(root *TreeNode) int {
    return dfs(root, 0)
}

func dfs(root *TreeNode, currSum int) int {
    currSum = (currSum << 1) | root.Val
    
    if root.Left == nil && root.Right == nil {
        return currSum
    }
    
    total := 0
    if root.Left != nil {
        total += dfs(root.Left, currSum)
    }
    
    if root.Right != nil {
        total += dfs(root.Right, currSum)
    }
    
    return total
}
```