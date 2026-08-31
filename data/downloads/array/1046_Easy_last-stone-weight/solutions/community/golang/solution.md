# Go heap solution

**Author:** casd82
**Votes:** 10
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/772788/](https://leetcode.com/problems/last-stone-weight/solutions/772788/)

---

Cause all I do is dance.
```
type IntHeap []int

func (h IntHeap) Len() int {return len(h)}
func (h IntHeap) Less(i, j int) bool {return h[i] > h[j]}
func (h IntHeap) Swap(i, j int) {h[i], h[j] = h[j], h[i]}
func (h *IntHeap) Push(x interface{}) {*h = append(*h, x.(int))}
func (h *IntHeap) Pop() interface{} {
    n := len(*h)
    x := (*h)[n-1]
    *h = (*h)[0:n-1]
    return x
}

func lastStoneWeight(stones []int) int {
    pq := IntHeap(stones)
    heap.Init(&pq)
    for pq.Len() > 1 {
        x, y := heap.Pop(&pq).(int), heap.Pop(&pq).(int)
        if x != y {
            heap.Push(&pq, x-y)
        }
    }
    
    if pq.Len() == 0 {
        return 0
    }
    
    return heap.Pop(&pq).(int)
}
```