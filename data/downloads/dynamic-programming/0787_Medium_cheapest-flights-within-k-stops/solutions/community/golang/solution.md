# [Golang] BFS/DFS/Dijkstra

**Author:** andrew18
**Votes:** 5
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/280711/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/280711/)

---

Distinguised with original graph traversal, here we shouldn't avoid travelling on the visited node. Because the shortest path may not satisfy the stops restriction, but the longer path may do. 
#### BFS, level-order traversal.
```
import "container/list"

const MAX_INT = int(^uint(0) >> 1)
func findCheapestPrice(n int, flights [][]int, src int, dst int, K int) int {
    ret := MAX_INT
    graph := make([][][]int, n)
    for _, flight := range flights {
        graph[flight[0]] = append(graph[flight[0]], flight[1:])
    }
    queue := list.New()
    queue.PushBack([]int{src, 0})
    level := 0
    for queue.Len() != 0 && level <= K + 1 {
        size := queue.Len()
        for i := 0; i < size; i++ {
            e := queue.Front()
            queue.Remove(e)
            curr := e.Value.([]int)
            if curr[0] == dst && ret > curr[1]{ ret = curr[1] }
            for _, edge := range graph[curr[0]] {
                if tempCost := curr[1] + edge[1]; tempCost < ret {
                    queue.PushBack([]int{edge[0], tempCost})
                }
            } 
        }
        level++
    }
    if ret == MAX_INT { return -1 } else { return ret }
}
```

#### DFS
``` golang
const MAX_INT = int(^uint(0) >> 1)
func findCheapestPrice(n int, flights [][]int, src int, dst int, K int) int {
    ret := MAX_INT
    graph := make([][][]int, n)
    for _, flight := range flights {
        graph[flight[0]] = append(graph[flight[0]], flight[1:])
    }
    DFS(src, 0, 0, graph, dst, K, &ret)
    if ret == MAX_INT { return -1 } else { return ret }
}


func DFS(root, dist, depth int, graph [][][]int, dst, K int, min *int) {
    if depth > K + 1 { return }
    if root == dst && dist < *min { *min = dist }
    for _, edge := range graph[root] {
        if temp := dist + edge[1]; temp < *min {
            DFS(edge[0], temp, depth+1, graph, dst, K, min)
        }
    }
}
```

#### Variant of Dijkstra using min-heap
```
import "container/heap"

const MAX_INT = int(^uint(0) >> 1)
func findCheapestPrice(n int, flights [][]int, src int, dst int, K int) int {
    graph := make([][][]int, n)
    for _, flight := range flights {
        graph[flight[0]] = append(graph[flight[0]], flight[1:])
    }
    h := &NodeHeap{}
    heap.Init(h)
    heap.Push(h, &Node{src, 0, 0})
    for h.Len() != 0 {
        currNode := heap.Pop(h).(*Node)
        currId := currNode.id
        if currId == dst { return currNode.dist }
        // 2. update the neighbors and heap.
        if currNode.stops <= K { // !!!
            for _, edge := range graph[currId] {
                heap.Push(h, &Node{edge[0], currNode.dist + edge[1], currNode.stops + 1})
	        }
        }
    }
    return -1
}

type Node struct { id, dist, stops int }
type NodeHeap []*Node

func (h NodeHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}
func (h NodeHeap) Less(i, j int) bool { return h[i].dist < h[j].dist }
func (h NodeHeap) Len() int { return len(h) }
func (h *NodeHeap) Push(v interface{}) { *h = append(*h, v.(*Node)) }
func (h *NodeHeap) Pop() interface{} {
    ret := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return ret
}
```