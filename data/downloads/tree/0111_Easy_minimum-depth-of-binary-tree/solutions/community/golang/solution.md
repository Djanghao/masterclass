# Golang 4ms recursive

**Author:** kocherovf
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/264076/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/264076/)

---

```
func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	left, right := minDepth(root.Left), minDepth(root.Right)
	if left == 0 || right == 0 {
		return left + right + 1
	}
	return min(left, right) + 1
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```