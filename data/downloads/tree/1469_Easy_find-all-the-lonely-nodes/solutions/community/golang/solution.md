# go recursion solution

**Author:** xyx530538772
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/2614173/](https://leetcode.com/problems/find-all-the-lonely-nodes/solutions/2614173/)

---

```go
func getLonelyNodes(root *TreeNode) []int {
	if root == nil || (root.Left == nil && root.Right == nil) {
		return []int{}
	}
	if root.Left == nil && root.Right != nil {
		right := getLonelyNodes(root.Right)
		return append(right, root.Right.Val)
	}
	if root.Left != nil && root.Right == nil {
		left := getLonelyNodes(root.Left)
		return append(left, root.Left.Val)
	}
	left := getLonelyNodes(root.Left)
	right := getLonelyNodes(root.Right)
	return append(left, right...)
}
```