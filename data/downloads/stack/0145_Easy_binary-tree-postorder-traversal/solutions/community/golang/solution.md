# simple recursion Golang(Go)

**Author:** sansaian
**Votes:** 5
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/2575743/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/2575743/)

---

```
type Res struct {
	Res []int
}

func postorderTraversal(root *TreeNode) []int {
	r := Res{}
	r.traversal(root)
	return r.Res
}

func (r *Res) traversal(node *TreeNode) {
	if node != nil {
		r.traversal(node.Left)
		r.traversal(node.Right)
		r.Res = append(r.Res, node.Val)
    }
}
```