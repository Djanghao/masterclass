# [GoLang] Dijkstra + PriorityQueue

**Author:** dkochetov
**Votes:** 6
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/3476867/](https://leetcode.com/problems/path-with-maximum-probability/solutions/3476867/)

---

```
type Vertex struct {
    node int
    probFromStart float64
}
type Edge struct {
    destNode int
    prob float64
}

type PriorityQueue []*Vertex
func (pq PriorityQueue) Len() int { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i].probFromStart > pq[j].probFromStart }
func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
}
func (pq *PriorityQueue) Push(x any) {
    *pq = append(*pq, x.(*Vertex))
}
func (pq *PriorityQueue) Pop() any {
    n := len(*pq)
    vertex := (*pq)[n-1]
    *pq = (*pq)[:n-1]
    return vertex
}

func maxProbability(n int, edges [][]int, succProb []float64, start int, end int) float64 {
    edgesFrom := make([][]Edge, n)
    for u := range edgesFrom { edgesFrom[u] = []Edge{} }
    for i := range edges {
        u, v, w := edges[i][0], edges[i][1], succProb[i]
        if w == 0 { continue }
        edgesFrom[u] = append(edgesFrom[u], Edge{v, w})
        edgesFrom[v] = append(edgesFrom[v], Edge{u, w})
    }

    visited := make([]bool, n)  // initially all false
    maxProbFromStart := make([]float64, n)  // initially all 0
    pq := PriorityQueue{&Vertex{start, 1}}

    for pq.Len() > 0 {
        vertex := heap.Pop(&pq).(*Vertex)

        if vertex.node == end { return vertex.probFromStart }

        if visited[vertex.node] { continue }
        visited[vertex.node] = true

        for _, e := range edgesFrom[vertex.node] {
            if visited[e.destNode] { continue }
            newProbFromStart := vertex.probFromStart * e.prob
            if newProbFromStart <= maxProbFromStart[e.destNode] { continue }
            maxProbFromStart[e.destNode] = newProbFromStart
            heap.Push(&pq, &Vertex{e.destNode, newProbFromStart})
        }
    }
    return 0
}
```