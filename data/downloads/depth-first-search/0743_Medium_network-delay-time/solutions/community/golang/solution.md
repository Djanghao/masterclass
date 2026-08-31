# Go Dijkstra with Heap

**Author:** waydi1
**Votes:** 6
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/1001364/](https://leetcode.com/problems/network-delay-time/solutions/1001364/)

---

```
import "container/heap"

type Distance struct {
    W int
    V int
}

type DistanceHeap []Distance

func (h DistanceHeap) Len() int { return len(h) }
func (h DistanceHeap) Less(i, j int) bool { return h[i].W < h[j].W }
func (h DistanceHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }

func (h *DistanceHeap) Push(x interface{}) {
    *h = append(*h, x.(Distance))
}

func (h *DistanceHeap) Pop() interface{} {
    value := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return value
}

func networkDelayTime(times [][]int, N int, K int) int {
    graph := map[int][]Distance{}
    
    for _, time := range times {
        u, v, w := time[0], time[1], time[2]
        graph[u] = append(graph[u], Distance{w, v})
    }
    
    q := &DistanceHeap{
        Distance{0, K},
    }
    
    arrivalTime := map[int]int{}
    
    for q.Len() > 0 {
        d := heap.Pop(q).(Distance)
        
        if _, ok := arrivalTime[d.V]; ok {
            continue
        }
        
        arrivalTime[d.V] = d.W
        
        for _, next := range graph[d.V] {
            next.W += d.W
            heap.Push(q, next)
        }
    }
    
    if len(arrivalTime) < N {
        return -1
    }
    
    maxTime := 0
    for _, v := range arrivalTime {
        if v > maxTime {
            maxTime = v
        }
    }
    
    return maxTime
}
```