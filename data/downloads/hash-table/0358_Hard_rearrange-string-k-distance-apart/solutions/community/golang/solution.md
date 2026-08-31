# Go Heap

**Author:** bunnycode
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/3689889/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/3689889/)

---

# Approach
While a greedy string approach will perform better, the problem is tagged `heap` and I did not see any Heap solutions in Go, so I made one. For greedy string version, see other solutions.

# Code
```
import (
    "container/heap"
)

const (
    IMPOSSIBLE = ""
)

type RuneCount map[rune]int

type RuneData struct {
    r   rune
    cnt int
    idx int // minimum idx this rune is allowed to show at
}

type Heap []RuneData
func (h Heap) Len() int { return len(h) }
func (h Heap) Less(i, j int) bool { 
    if h[i].idx == h[j].idx {
        if h[i].cnt == h[j].cnt {
            return h[i].r < h[j].r
        }
        return h[i].cnt > h[j].cnt
    }
    return h[i].idx < h[j].idx
}
func (h Heap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *Heap) Push(rd any) { *h = append(*h, rd.(RuneData)) }
func (h *Heap) Pop() (res any) {
    i := len(*h) - 1
	res, *h = (*h)[i], (*h)[:i]
	return res
}

func rearrangeString(s string, k int) string {
    // letter frequency
    rc := RuneCount{}
    for _, r := range s { rc[r]++ }

    // build heap
    h := &Heap{}
    heap.Init(h)
    for r, cnt := range rc {
        heap.Push(h, RuneData{ r, cnt, 0 })
    }

    res := []rune{}
    for h.Len() > 0 {
        rd := heap.Pop(h).(RuneData)
        if rd.idx > len(res) { return IMPOSSIBLE }

        // just update the idx to current & put back in queue;
        // this ensures that of all the available runes, we get
        // the one with the highest count
        if rd.idx < len(res) {
            rd.idx = len(res)
            heap.Push(h, rd)
            continue
        }

        res = append(res, rd.r)
        if rd.cnt > 1 {
            rd.cnt--
            rd.idx += k
            heap.Push(h, rd)
        }
    }
    return string(res)
}

```