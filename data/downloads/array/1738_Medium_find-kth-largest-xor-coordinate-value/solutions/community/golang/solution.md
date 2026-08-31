# Go, prefix + heap

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/3697817/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/3697817/)

---

# Code
```
// An IntHeap is a min-heap of ints.
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x any) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func kthLargestValue(matrix [][]int, k int) int {
	prefixMatrix := make([][]int, len(matrix)+1)
	for i := range prefixMatrix {
		prefixMatrix[i] = make([]int, len(matrix[0])+1)
	}

	h := IntHeap{}
	for i := 1; i < len(prefixMatrix); i++ {
		for j := 1; j < len(prefixMatrix[i]); j++ {
			prefixMatrix[i][j] = prefixMatrix[i-1][j] ^ prefixMatrix[i][j-1] ^ prefixMatrix[i-1][j-1] ^ matrix[i-1][j-1]
			heap.Push(&h, prefixMatrix[i][j])
			for h.Len() > k {
				heap.Pop(&h)
			}
		}
	}

	return heap.Pop(&h).(int)
}
```