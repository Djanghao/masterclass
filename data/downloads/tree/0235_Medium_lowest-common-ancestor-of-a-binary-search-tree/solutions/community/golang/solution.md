# simple recursive and iterative solution

**Author:** roseduan
**Votes:** 11
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/862386/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/862386/)

---

```
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	if p.Val < root.Val && q.Val < root.Val {
		return lowestCommonAncestor(root.Left, p, q)
	}
	if p.Val > root.Val && q.Val > root.Val {
		return lowestCommonAncestor(root.Right, p, q)
	}
	return root
}

```

```
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	for root != nil {
		if p.Val < root.Val && q.Val < root.Val {
			root = root.Left
		}else if p.Val > root.Val && q.Val > root.Val {
			root = root.Right
		}else {
			return root
		}
	}
	return nil
}

```