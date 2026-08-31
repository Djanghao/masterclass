# Go Solution | Binary Lifting

**Author:** mituljindal
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/1877018/](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/1877018/)

---

```
type TreeAncestor struct {
	parents [][]int
	steps  int
}

func Constructor(n int, parent []int) TreeAncestor {
	steps := int(math.Log2(float64(n))) + 1
	parents := make([][]int, steps)
	parents[0] = parent
	for i := 1; i < steps; i++ {
		parents[i] = make([]int, n)
		for j := 0; j < n; j++ {
			last := parents[i-1][j]
			if last == -1 {
				parents[i][j] = -1
			} else {
				parents[i][j] = parents[i-1][last]
			}
		}
	}

	return TreeAncestor{parents, steps}
}

func (this *TreeAncestor) GetKthAncestor(node int, k int) int {
	for i := 0; i < this.steps; i++ {
		if (k & (1 << i)) > 0 {
			val := this.parents[i][node]
			if val == -1 {
				return -1
			}
			node = val
		}
	}
	return node
}

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * obj := Constructor(n, parent);
 * param_1 := obj.GetKthAncestor(node,k);
 */
```