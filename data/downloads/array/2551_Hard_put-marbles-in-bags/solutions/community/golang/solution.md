# Go Away Solution

**Author:** GokuUltra
**Votes:** 2
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/4385675/](https://leetcode.com/problems/put-marbles-in-bags/solutions/4385675/)

---


# Code
```
type IntHeap []int64

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x any) {
	*h = append(*h, x.(int64))
}

func (h *IntHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func putMarbles(weights []int, k int) int64 {
    n := len(weights)
    divs := make([]int64, n-1)
    for i := 0; i < n-1; i++ {
        divs[i] = int64(weights[i]) + int64(weights[i+1])
    }
    mins := make(IntHeap, 0, k)
    maxs := make(IntHeap, 0, k)
    for _, a := range(divs) {
        heap.Push(&mins, -a)
        if len(mins) > k-1 {
            heap.Pop(&mins)
        }
        heap.Push(&maxs, a)
        if len(maxs) > k-1 {
            heap.Pop(&maxs)
        }
    }
    var res int64 = 0
    for i := 0; i < k-1; i++ {
        res = res + mins[i] + maxs[i]
    }
    return res
}
```