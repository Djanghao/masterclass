# Go, two dfs with memorization

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/4166984/](https://leetcode.com/problems/equal-tree-partition/solutions/4166984/)

---

# Code
```
func checkEqualTree(root *TreeNode) bool {
	values := make(map[*TreeNode][2]int)
	sumLeftRight(root, values)
	return traverseWithBalance(root, 0, values)
}

func traverseWithBalance(root *TreeNode, acc int, values map[*TreeNode][2]int) bool {
	if root == nil {
		return false
	}
	children := values[root]
	left, right := children[0], children[1]
	if root.Right != nil && right == acc+root.Val+left {
		return true
	}
	if root.Left != nil && left == acc+root.Val+right {
		return true
	}
	return traverseWithBalance(root.Left, acc+root.Val+right, values) || traverseWithBalance(root.Right, acc+root.Val+left, values)
}

func sumLeftRight(root *TreeNode, childValues map[*TreeNode][2]int) (int, int) {
	child := [2]int{0, 0}
	if root.Left != nil {
		ll, lr := sumLeftRight(root.Left, childValues)
		child[0] = ll + lr + root.Left.Val
	}
	if root.Right != nil {
		rl, rr := sumLeftRight(root.Right, childValues)
		child[1] = rl + rr + root.Right.Val
	}
	childValues[root] = child
	return child[0], child[1]
}

```