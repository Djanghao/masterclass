# go recursion + dfs solutions

**Author:** xyx530538772
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2613723/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2613723/)

---

simple recursion
```go
func isValidSequence(root *TreeNode, arr []int) bool {
	if len(arr) == 0 || root == nil && len(arr) > 0 || root.Val != arr[0] {
		return false
	}
	if root.Left == nil && root.Right == nil && root.Val == arr[0] && len(arr) == 1 {
		return true
	}
	return isValidSequence(root.Left, arr[1:]) || isValidSequence(root.Right, arr[1:])
}
```

dfs, traversal all nodes
```go
var res bool

func dfs(root *TreeNode, arr []int, path []int) {
	if root == nil || res {
		return
	}
	path = append(path, root.Val)
	if root.Left == nil && root.Right == nil {
		if reflect.DeepEqual(arr, path) {
			res = true
		}
		return
	}
	dfs(root.Left, arr, path)
	dfs(root.Right, arr, path)
}
func isValidSequence(root *TreeNode, arr []int) bool {
	path := make([]int, 0)
	res = false
	dfs(root, arr, path)
	return res
}
```