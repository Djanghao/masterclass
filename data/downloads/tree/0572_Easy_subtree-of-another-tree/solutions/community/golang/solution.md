# Golang 15 lines of solution with explanations

**Author:** leontung7
**Votes:** 11
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/443079/](https://leetcode.com/problems/subtree-of-another-tree/solutions/443079/)

---

1. Two tree is identical when all their nodes are the same. 
2. We can do a preorder traversal on tree `s` to check whether the current node's value is equal to `t`'s root. If it is, then we can check if these two subtrees are same. 

```
func isSubtree(s *TreeNode, t *TreeNode) bool {
	if s == nil || t == nil {
		return s == t
	}
	if s.Val == t.Val && isIdentical(s, t) {
		return true
	}
	return isSubtree(s.Left, t) || isSubtree(s.Right, t)
}

func isIdentical(s, t *TreeNode) bool {
	if s == nil || t == nil {
		return s == t
	}
	return s.Val == t.Val && isIdentical(s.Left, t.Left) && isIdentical(s.Right, t.Right)
}
```