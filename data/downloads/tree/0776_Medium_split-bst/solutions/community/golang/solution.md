# Clean go solution | beat 100% Runtime & Memory

**Author:** klakovskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-bst/solutions/3832184/](https://leetcode.com/problems/split-bst/solutions/3832184/)

---

# Code
```
func splitBST(root *TreeNode, target int) []*TreeNode {
	const less = 0
	const greater = 1
	if root == nil {
		return []*TreeNode{nil, nil}
	}
	if target >= root.Val {
		splitTrees := splitBST(root.Right, target)
		root.Right = splitTrees[less]
		splitTrees[less] = root
		return splitTrees
	}
	splitTrees := splitBST(root.Left, target)
	root.Left = splitTrees[greater]
	splitTrees[greater] = root
	return splitTrees
}re
```