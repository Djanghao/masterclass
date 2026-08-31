# Go | Dijkstra's shortest path algorithm

**Author:** tucux
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/3421298/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/3421298/)

---

This is a fairly standard implementation based on Dijkstra's shortest path algorithm and using a priority queue. With some more patience, it should be possible to develop an incremental solution that better fits this usecase. 

```
type Edge struct {
    head int
    cost int
}

type Graph struct {
    adj [][]Edge
}

func Constructor(n int, edges [][]int) Graph {
    adj := make([][]Edge, n)
    for _, e := range edges {
        adj[e[0]] = append(adj[e[0]], Edge{e[1], e[2]})
    }
    return Graph{adj}
}

func (this *Graph) AddEdge(edge []int)  {
    this.adj[edge[0]] = append(this.adj[edge[0]], Edge{edge[1], edge[2]})
}

func (this *Graph) ShortestPath(node1 int, node2 int) int {
    n := len(this.adj)
    items := make([]*Item, n)
    for i := 0; i < n; i++ {
        items[i] = &Item{i, math.MaxInt, i}
    }
    items[node1].priority = 0
    queue := make(PriorityQueue, n)
    copy(queue, items)
    heap.Init(&queue)
    for len(queue) > 0 {
        i := heap.Pop(&queue).(*Item)
        node, priority := i.value, i.priority
        if priority == math.MaxInt || node == node2 {
            break
        }
        for _, e := range this.adj[node] {
            j := items[e.head]
            if h := priority + e.cost; h < j.priority {
                j.priority = h
                heap.Fix(&queue, j.index)
            }
        } 
    }
    if items[node2].priority == math.MaxInt {
        return -1
    }
    return items[node2].priority
}

type Item struct {
	value    int
	priority int
	index    int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i].priority < pq[j].priority
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
	n := len(*pq)
	item := x.(*Item)
	item.index = n
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil  // avoid memory leak
	item.index = -1 // for safety
	*pq = old[0 : n-1]
	return item
}
```