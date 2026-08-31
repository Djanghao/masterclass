# 0 ms, faster than 100.00% of Go online submissions for Univalued Binary Tree.

**Author:** stepbyanother
**Votes:** 2
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/1213257/](https://leetcode.com/problems/univalued-binary-tree/solutions/1213257/)

---

```
func helper965(node *TreeNode, flag *int)  {
	if node != nil {
		if node.Val != *flag {
			*flag = -1
		} else {
			helper965(node.Left, flag)
			helper965(node.Right, flag)
		}
	}
}

func isUnivalTree(root *TreeNode) bool {
	ans := root.Val
	helper965(root, &ans)
	if ans == -1 {
		return false
	}
	return true 
}
```