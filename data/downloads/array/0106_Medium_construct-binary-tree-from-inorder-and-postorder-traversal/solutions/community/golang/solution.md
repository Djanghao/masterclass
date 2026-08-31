# Go | beats 100% | easy to understand | simple recursive solution

**Author:** dimaglushkov
**Votes:** 9
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3303672/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3303672/)

---

# Code
```
func buildTree(inorder []int, postorder []int) *TreeNode {
	n := len(postorder)
	if n == 0 {
		return nil
	}

	pivotId := 0
	for pivotId < n && inorder[pivotId] != postorder[n-1] {
		pivotId++
	}

	root := new(TreeNode)
	root.Val = postorder[n-1]
	root.Left = buildTree(inorder[:pivotId], postorder[:pivotId])
	root.Right = buildTree(inorder[pivotId+1:], postorder[pivotId:n-1])
	return root
}

```