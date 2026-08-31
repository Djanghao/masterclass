# 19 lines 0ms 100% Faster 100% less memory

**Author:** sreejeet
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/619250/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/619250/)

---

Language: Go
Speed: 0ms
Space: O(1)
```
func levelOrderBottom(root *TreeNode) (res [][]int) {
	res = [][]int{}
	if root == nil {
		return
	}
	q := []*TreeNode{root}
	for len(q) > 0 {
		level := []int{}
		for _, x := range q {
			q = q[1:]
			if x.Left != nil {
				q = append(q, x.Left)
			}
			if x.Right != nil {
				q = append(q, x.Right)
			}
			level = append(level, x.Val)
		}
		res = append(res, level)
	}
	for l, r := 0, len(res)-1; l < r; {
		res[l], res[r] = res[r], res[l]
		l++
		r--
	}
	return
}
```