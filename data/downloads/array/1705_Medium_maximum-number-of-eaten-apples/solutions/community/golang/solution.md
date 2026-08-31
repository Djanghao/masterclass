# Go heap

**Author:** dynasty919
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/1612630/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/1612630/)

---

```
func eatenApples(apples []int, days []int) int {
    h := &minheap{}
    res := 0
    i := 0
    for h.Len() > 0 || i < len(apples) {
        if i < len(apples) && apples[i] != 0 {
            heap.Push(h, [2]int{i + days[i] - 1, apples[i]})
        } 
        for h.Len() > 0 {
            a := heap.Pop(h).([2]int)
            if a[0] >= i {
                res++
                a[1]--
                if a[1] != 0 {
                    heap.Push(h, a)
                }
                break
            }
        }
        i++
    }
    return res
}

type minheap [][2]int

func (h minheap) Len() int {
    return len(h)
}

func (h minheap) Less(i int, j int) bool {
    return h[i][0] < h[j][0]
}

func (h minheap) Swap(i int, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *minheap) Push(a interface{}) {
    *h = append(*h, a.([2]int))
}

func (h *minheap) Pop() interface{} {
    l := len(*h)
    res := (*h)[l - 1]
    *h = (*h)[:l - 1]
    return res
}
```