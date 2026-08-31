# Go 4ms very simple

**Author:** tjucoder
**Votes:** 4
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/567770/](https://leetcode.com/problems/house-robber-iii/solutions/567770/)

---

```go
func rob(root *TreeNode) int {
	return max(robber(root))
}

func robber(node *TreeNode) (int, int) {
	if node == nil {
		return 0, 0
	}
	gold := node.Val
	l1, l2 := robber(node.Left)
	r1, r2 := robber(node.Right)
	c1 := gold + l2 + r2
	c2 := max(l1, l2) + max(r1, r2)
	return c1, c2
}

func max(values ...int) int {
	maxValue := math.MinInt32
	for _, v := range values {
		if v > maxValue {
			maxValue = v
		}
	}
	return maxValue
}
```