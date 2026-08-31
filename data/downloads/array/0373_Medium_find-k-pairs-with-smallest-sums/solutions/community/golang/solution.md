# Golang one MinHeap solution

**Author:** AnnaKopteva
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3124119/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3124119/)

---

# Code
```
func kSmallestPairs(nums1 []int, nums2 []int, k int) [][]int {
    result := make([][]int, 0)
    minHeap := &SetHeap{}
    heap.Init(minHeap)
    for i, v1 := range nums1 {
        heap.Push(minHeap, Set{sum: v1 + nums2[0], i: i, j: 0})
    }

    for !minHeap.Empty() && k > 0 {
        currentMin := heap.Pop(minHeap).(Set)
        i, j := currentMin.i, currentMin.j
        result = append(result, []int{nums1[i], nums2[j]})

        nextElement := j + 1
        if nextElement < len(nums2) {
            heap.Push(minHeap, Set{sum: nums1[i] + nums2[nextElement], i: i, j: nextElement})
        }
        k--
    } 

    return result
}

type Set struct {
    sum int
    i int
    j int
}

type SetHeap []Set

func (h SetHeap) Len() int           { return len(h) }
func (h SetHeap) Less(i, j int) bool { return h[i].sum < h[j].sum }
func (h SetHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h SetHeap) Empty() bool        { return len(h) == 0 }

func (h *SetHeap) Push(x interface{}) {
	*h = append(*h, x.(Set))
}

func (h *SetHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}
```