# [Golang] Max-heap + external pointer. O(N*logN) time, O(N) space.

**Author:** andrew18
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/281898/](https://leetcode.com/problems/the-skyline-problem/solutions/281898/)

---

```
import "container/heap"
import "sort"
func getSkyline(buildings [][]int) [][]int {
    var ret [][]int
    h := &NodeHeap{}
    heap.Init(h)
    var edgePoints []Node
    for i := 0; i < len(buildings); i++ {
        edgePoints = append(edgePoints, Node{buildings[i][0], buildings[i][2], i, true, 0})
        edgePoints = append(edgePoints, Node{buildings[i][1], buildings[i][2], i, false, 0})
    }
    sort.Slice(edgePoints, func(i, j int) bool { 
        if edgePoints[i].x != edgePoints[j].x {
            return edgePoints[i].x < edgePoints[j].x
        } else {
            return edgePoints[i].y < edgePoints[j].y
        }
    }) // O(n*logn)
    heap.Push(h, &Node{x:0, y:0}) // guard
    buildingsNodeMap := make([]*Node, len(buildings))
    for i := 0; i < len(edgePoints); i++ {
        p := edgePoints[i]
        if p.left {
            p.pos = h.Len()
            heap.Push(h, &p)
            buildingsNodeMap[p.idx] = &p
        } else {
            heap.Remove(h, buildingsNodeMap[p.idx].pos)
        }
        if i == len(edgePoints) - 1 || p.x != edgePoints[i+1].x { 
            currMaxHeight := (*h)[0].y
            if len(ret) == 0 || currMaxHeight != ret[len(ret)-1][1] {
                ret = append(ret, []int{p.x, currMaxHeight})
            }
        } 
    }
    return ret
}

type Node struct {
    x, y, idx int
    left bool
    pos int
}
type NodeHeap []*Node
func (h NodeHeap) Swap (i, j int) { 
    h[i], h[j] = h[j], h[i] 
    h[i].pos, h[j].pos = i, j
}
func (h NodeHeap) Len() int { return len(h) }
func (h NodeHeap) Less(i, j int) bool { return h[i].y > h[j].y } // max-heap based on y
func (h *NodeHeap) Push(v interface{}) { *h = append(*h, v.(*Node)) }
func (h *NodeHeap) Pop() interface{} {
    ret := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return ret
}
```