# Preorder with recursion small code

**Author:** sansaian
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/2575711/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/2575711/)

---


```
type Res struct {
	Res []int
}

func preorderTraversal(root *tree.TreeNode) []int {
	r := Res{}
	r.traversal(root)
	return r.Res
}

func (r *Res) traversal(node *tree.TreeNode) {
	if node != nil {
		r.Res = append(r.Res, node.Val)
		r.traversal(node.Left)
		r.traversal(node.Right)
	}
}
```