# Go || MaxHeap

**Author:** raisul191491
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5142308/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5142308/)

---

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func mincostToHireWorkers(quality []int, wage []int, k int) float64 {
    mans := []pair{}
    for i := range quality {
        mans = append(mans, pair{quality[i], wage[i]})
    }

    sort.Slice(mans, func(i, j int) bool {
		return float64(mans[i].w)/float64(mans[i].q) < float64(mans[j].w)/float64(mans[j].q)
	})

    h := &MaxHeap{}
    minCost, curQ := 1000000001.0, 0
    for i := range mans {
        heap.Push(h, mans[i].q)
        curQ += mans[i].q
        if h.Len() > k {
            curQ -= heap.Pop(h).(int)
        }

        if h.Len() == k && minCost > float64(mans[i].w)/float64(mans[i].q) * float64(curQ) {
            minCost = float64(mans[i].w)/float64(mans[i].q) * float64(curQ)
        }
    }

    return minCost
}

type pair struct {
	q int
	w   int
}

type MaxHeap []int

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MaxHeap) Push(x any) {
	*h = append(*h, x.(int))
}

func (h *MaxHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]

	return x
}
```