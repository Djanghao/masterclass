# Go solution

**Author:** ganesh
**Votes:** 5
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/1849038/](https://leetcode.com/problems/increasing-order-search-tree/solutions/1849038/)

---

https://github.com/ganeshskudva/Leetcode-Golang

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func increasingBST(root *TreeNode) *TreeNode {
	return dfs(root, nil)
}

func dfs(root, tail *TreeNode) *TreeNode {
	if root == nil {
		return tail
	}
	
	res := dfs(root.Left, root)
	root.Left = nil
	root.Right = dfs(root.Right, tail)
	
	return res
}
```