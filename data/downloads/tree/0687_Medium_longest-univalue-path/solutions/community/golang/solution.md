# Go DFS

**Author:** EvgeniyZhukov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/4534690/](https://leetcode.com/problems/longest-univalue-path/solutions/4534690/)

---

# Approach
Depth-first search

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
func longestUnivaluePath(root *TreeNode) int {
	res := 0
	dfs(root, &res)
	return res
}

func dfs(root *TreeNode, res *int) int {
	if root == nil {
		return 0
	}
	left, right := dfs(root.Left, res), dfs(root.Right, res)
	var (
		leftMax, rightMax int
	)
	if root.Left != nil && root.Left.Val == root.Val {
		leftMax += left + 1
	}
	if root.Right != nil && root.Right.Val == root.Val {
		rightMax += right + 1
	}
	*res = max(*res, leftMax+rightMax)
	return max(leftMax, rightMax)
}
```