# [Go] Dijkstra + Mapping

**Author:** AnDVT
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5053124/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5053124/)

---

# Intuition
https://leetcode.com/problems/find-edges-in-shortest-paths/submissions/1237956062/

# Approach
Use dijkstra find shortest distance from 0 to n-1
Use backtracking to find all edges in shortest paths

# Complexity
- Time complexity: O(V + E log V)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(V + E)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const fMapping = "%v-%v-%v"

// Node represents a node in the graph
type Node struct {
	Value    int
	Distance int
	prev     map[*Node]bool // Used for reconstructing the path
	neighbor []*Node
	weight   []int
	Index    int
}

// PriorityQueue is a wrapper around container/heap.Interface for Nodes
type PriorityQueue []*Node

func (pq PriorityQueue) Len() int { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i].Distance < pq[j].Distance
}
func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].Index = i
	pq[j].Index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
	n := len(*pq)
	node := x.(*Node)
	node.Index = n
	*pq = append(*pq, x.(*Node))
}

func (pq *PriorityQueue) Pop() interface{} {
	n := (*pq)[len(*pq)-1]
	*pq = (*pq)[:len(*pq)-1]
	return n
}

func (pq *PriorityQueue) update(node *Node, distance int) {
	node.Distance = distance
	heap.Fix(pq, node.Index)
}

// Graph represents the graph structure
type Graph struct {
	vertices map[int]*Node
}

// NewGraph creates a new Graph instance
func NewGraph() *Graph {
	return &Graph{vertices: make(map[int]*Node)}
}

// AddNode adds a new node to the graph
func (g *Graph) AddNode(value int) {
	g.vertices[value] = &Node{Value: value, Distance: math.MaxInt32}
}

// AddEdge adds an edge between two nodes with a weight
func (g *Graph) AddEdge(source, destination, weight int) {
	g.vertices[source].neighbor = append(g.vertices[source].neighbor, g.vertices[destination])
	g.vertices[source].weight = append(g.vertices[source].weight, weight)
}

// Dijkstra finds the shortest path from a source node to all other nodes
func (g *Graph) Dijkstra(source *Node, destination *Node) {
	source.Distance = 0
	visited := make(map[*Node]bool)
	pushed := make(map[*Node]bool)
	pq := &PriorityQueue{source}
	pushed[source] = true
	heap.Init(pq)
	for pq.Len() > 0 {
		currentNode := heap.Pop(pq).(*Node)
		if !visited[currentNode] {
			visited[currentNode] = true
			if currentNode == destination {
				return
			}
			for i, neighbor := range currentNode.neighbor {
				newD := currentNode.Distance + currentNode.weight[i]
				if newD < neighbor.Distance {
					neighbor.prev = map[*Node]bool{currentNode: true}
					neighbor.Distance = newD
					pq.update(neighbor, newD)
				} else if newD == neighbor.Distance {
					neighbor.prev[currentNode] = true
					continue
				}
				if !pushed[neighbor] {
					heap.Push(pq, neighbor)
					pushed[neighbor] = true
				}
			}
		}
	}
}

func findAnswer(n int, edges [][]int) []bool {
	graph := NewGraph()
	for v := range n {
		graph.AddNode(v)
	}
	for _, v := range edges {
		graph.AddEdge(v[0], v[1], v[2])
		graph.AddEdge(v[1], v[0], v[2])
	}
	source := graph.vertices[0]
	destination := graph.vertices[n-1]
	graph.Dijkstra(source, destination)
	added := map[*Node]bool{}
	it := []*Node{}
	if destination.Distance != math.MaxInt32 {
		it = append(it, destination)
		added[destination] = true
	}
	m := map[string]bool{}
	for len(it) > 0 {
		v := it[0]
		it = it[1:]
		for u := range v.prev {
			m[fmt.Sprintf(fMapping, u.Value, v.Value, v.Distance-u.Distance)] = true
			m[fmt.Sprintf(fMapping, v.Value, u.Value, v.Distance-u.Distance)] = true
			if !added[u] {
				added[u] = true
				it = append(it, u)
			}
		}
	}
	res := make([]bool, len(edges))
	for i, v := range edges {
		if m[fmt.Sprintf(fMapping, v[0], v[1], v[2])] {
			res[i] = true
		}
	}
	return res
}
```