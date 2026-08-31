# 👍Runtime 375 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/4975338/](https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/4975338/)

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
func canMerge(trees []*TreeNode) *TreeNode {
	// Collect the leaves
	leaves := make(map[int]struct{})
	nodeMap := make(map[int]*TreeNode)
	for _, tree := range trees {
		nodeMap[tree.Val] = tree
		if tree.Left != nil {
			leaves[tree.Left.Val] = struct{}{}
		}
		if tree.Right != nil {
			leaves[tree.Right.Val] = struct{}{}
		}
	}

	// Decide the root of the resulting tree
	var result *TreeNode
	for _, tree := range trees {
		if _, exists := leaves[tree.Val]; !exists {
			result = tree
			break
		}
	}
	if result == nil {
		return nil
	}

	if traverse(result, nodeMap, -1<<63, 1<<63-1) && len(nodeMap) == 1 {
		return result
	}
	return nil
}

func traverse(root *TreeNode, nodeMap map[int]*TreeNode, min, max int) bool {
	if root == nil {
		return true
	}
	if root.Val <= min || root.Val >= max {
		return false
	}

	if root.Left == nil && root.Right == nil {
		if next, exists := nodeMap[root.Val]; exists && root != next {
			root.Left = next.Left
			root.Right = next.Right
			delete(nodeMap, root.Val)
		}
	}
	return traverse(root.Left, nodeMap, min, root.Val) && traverse(root.Right, nodeMap, root.Val, max)
}
```