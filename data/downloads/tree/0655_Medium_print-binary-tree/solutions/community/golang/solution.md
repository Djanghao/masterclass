# go 1.21, clean code

**Author:** Colix
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/6024908/](https://leetcode.com/problems/print-binary-tree/solutions/6024908/)

---

```golang []
func printTree(root *TreeNode) [][]string {
	height := getHeight(root)
	m, n := height+1, (1<<(height+1))-1
	ret := make([][]string, m)
	for i := range ret {
		ret[i] = make([]string, n)
		for j := range ret[i] {
			ret[i][j] = ""
		}
	}
	fill(ret, root, 0, 0, n-1, height)
	return ret
}

func getHeight(root *TreeNode) int {
	if root == nil {
		return -1
	}
	return max(getHeight(root.Left), getHeight(root.Right)) + 1
}

func fill(ret [][]string, node *TreeNode, row, left, right, height int) {
	if node == nil {
		return
	}
	mid := left - (left-right)/2
	ret[row][mid] = fmt.Sprintf("%d", node.Val)
	if node.Left != nil {
		fill(ret, node.Left, row+1, left, mid-1, height-1)
	}
	if node.Right != nil {
		fill(ret, node.Right, row+1, mid+1, right, height-1)
	}
}
```