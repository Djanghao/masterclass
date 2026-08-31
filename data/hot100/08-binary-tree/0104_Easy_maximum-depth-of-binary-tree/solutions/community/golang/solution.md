# Golang Solution

**Author:** sansaian
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/2817503/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/2817503/)

---

time complexity - O(n)
space complexity - O(1)
```
func maxDepth(root *binary_tree.TreeNode) int {
	if root == nil {
		return 0
	}
	return 1 + max(maxDepth(root.Left), maxDepth(root.Right))
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}
```