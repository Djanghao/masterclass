# go heap

**Author:** dynasty919
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/1639512/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/1639512/)

---

```
func maxAverageRatio(classes [][]int, extraStudents int) float64 {
    h := &maxheap{}
    for _, c := range classes {
        heap.Push(h, [2]int{c[0], c[1]})
    }
    
    for extraStudents > 0 {
        c := heap.Pop(h).([2]int)
        extraStudents--
        c[0]++
        c[1]++
        heap.Push(h, c)
    }
    var res float64
    for _, v := range *h {
        res += float64(v[0]) / float64(v[1])
    }
    return res / float64(len(classes))
}

type maxheap [][2]int

func (h maxheap) Len() int {
    return len(h)
}

func (h maxheap) Less(i int, j int) bool {
    return float64(h[i][0] + 1) / float64(h[i][1] + 1) - float64(h[i][0]) / float64(h[i][1]) >
    float64(h[j][0] + 1) / float64(h[j][1] + 1) - float64(h[j][0]) / float64(h[j][1])
}

func (h maxheap) Swap(i int, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *maxheap) Push(a interface{}) {
    *h = append(*h, a.([2]int))
}

func (h *maxheap) Pop() interface{} {
    l := len(*h)
    res := (*h)[l - 1]
    *h = (*h)[:l - 1]
    return res
}
```