# [Golang] min-heap

**Author:** andrew18
**Votes:** 3
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/328930/](https://leetcode.com/problems/corporate-flight-bookings/solutions/328930/)

---

```
import "container/heap"
import "sort"

func corpFlightBookings(bookings [][]int, n int) []int {
    sort.Slice(bookings, func (i, j int) bool { return bookings[i][0] < bookings[j][0] })
    ret := make([]int, n+1)
    bkIdx := 0
    h := &IntervalHeap{}
    for i := 1; i <= n; i++ {
        ret[i] = ret[i-1]
        for h.Len() != 0 && (*h)[0][1] < i {
            ret[i] -= (*h)[0][2]
            heap.Pop(h)
        }
        for bkIdx < len(bookings) && i == bookings[bkIdx][0] {
            ret[i] += bookings[bkIdx][2]
            heap.Push(h, bookings[bkIdx])
            bkIdx++
        }
    }
    return ret[1:]
}

type IntervalHeap [][]int
func (h IntervalHeap) Less(i, j int) bool { return h[i][1] < h[j][1] }
func (h IntervalHeap) Len() int { return len(h) }
func (h IntervalHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *IntervalHeap) Push(v interface{}) { *h = append(*h, v.([]int)) }
func (h *IntervalHeap) Pop() interface{} {
    ret := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return ret
}
```