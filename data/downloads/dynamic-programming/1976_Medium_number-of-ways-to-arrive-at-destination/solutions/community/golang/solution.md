# readable

**Author:** ajaysinghpanwar2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/5683590/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/5683590/)

---

# Code
```golang []
const MOD = 1_000_000_007

type Road struct {
	destination int
	travelTime  int64
}

type NodeState struct {
	node       int
	minDistance int64
}

type PriorityQueue []NodeState

func (pq PriorityQueue) Len() int            { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool  { return pq[i].minDistance < pq[j].minDistance }
func (pq PriorityQueue) Swap(i, j int)       { pq[i], pq[j] = pq[j], pq[i] }
func (pq *PriorityQueue) Push(x interface{}) { *pq = append(*pq, x.(NodeState)) }
func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	*pq = old[0 : n-1]
	return item
}

func countPathsToDestination(cityCount int, roads [][]int) int {
	adjacencyList := make([][]Road, cityCount+1)

	// Populating the adjacency list
	for _, road := range roads {
		source, destination, travelTime := road[0], road[1], road[2]
		adjacencyList[source] = append(adjacencyList[source], Road{destination: destination, travelTime: int64(travelTime)})
		adjacencyList[destination] = append(adjacencyList[destination], Road{destination: source, travelTime: int64(travelTime)})
	}

	// Initialize the minDistances array with infinity
	minDistances := make([]int64, cityCount)
	for i := 0; i < cityCount; i++ {
		minDistances[i] = (1 << 63) - 1
	}
	// Set the starting point's distance to 0
	minDistances[0] = 0

	pq := &PriorityQueue{}
	heap.Push(pq, NodeState{node: 0, minDistance: 0})

	pathCounts := make([]int, cityCount)
	pathCounts[0] = 1

	for pq.Len() > 0 {
		current := heap.Pop(pq).(NodeState)
		currentNode, currentDistance := current.node, current.minDistance

		// Skip if we've already found a shorter path to this node
		if currentDistance > minDistances[currentNode] {
			continue
		}

		for _, neighbor := range adjacencyList[currentNode] {
			destination, travelTime := neighbor.destination, neighbor.travelTime
			newDistance := currentDistance + travelTime

			// Found a shorter path to the destination
			if newDistance < minDistances[destination] {
				minDistances[destination] = newDistance
				heap.Push(pq, NodeState{node: destination, minDistance: newDistance})
				pathCounts[destination] = pathCounts[currentNode] // Inherit the number of ways
			} else if newDistance == minDistances[destination] { // Another path with the same shortest distance
				pathCounts[destination] = (pathCounts[destination] + pathCounts[currentNode]) % MOD
			}
		}
	}
	return pathCounts[cityCount-1] // Return the number of ways to reach the last city
}
```