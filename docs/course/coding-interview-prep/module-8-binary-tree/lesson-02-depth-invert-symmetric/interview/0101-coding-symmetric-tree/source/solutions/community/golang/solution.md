# 0 ms100% Iteration && Recursion

**Author:** shikuan
**Votes:** 13
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/2796828/](https://leetcode.com/problems/symmetric-tree/solutions/2796828/)

---

#### Iteration

```golang
func isSymmetric(root *TreeNode) bool {
    if root == nil {
		return true
	}
	var stack []*TreeNode
	stack = append(stack, root.Left, root.Right)
	for len(stack) > 0 {
		l, r := stack[0], stack[1]
		stack = stack[2:]
		if l == nil && r == nil {
			continue
		} else if (l == nil && r != nil) || l != nil && r == nil {
			return false
		} else if l.Val != r.Val {
			return false
		}
		stack = append(stack, l.Left, r.Right, l.Right, r.Left)
	}
	return true
}
```

#### Recursion

```golang
func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return helper(root.Left, root.Right)
}

func helper(left *TreeNode, right *TreeNode) bool {
	if left == nil || right == nil {
		return left == right
	}
	if left.Val != right.Val {
		return false
	}
	return helper(left.Left, right.Right) && helper(left.Right, right.Left)
}
```