# Clean Go Solution. Beats 100%

**Author:** evleria
**Votes:** 8
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1421844/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/1421844/)

---

```
func findTarget(root *TreeNode, k int) bool {
	return dfs(root, k, map[int]bool{})
}

func dfs(root *TreeNode, k int, m map[int]bool) bool {
	if root == nil {
		return false
	}

	if m[k-root.Val] {
		return true
	}
	m[root.Val] = true

	return dfs(root.Left, k, m) || dfs(root.Right, k, m)
}
```