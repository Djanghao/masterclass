# 👍Runtime 59 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/5344887/](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/solutions/5344887/)

---

# Code
```
type Node struct {
	vertex int
	fee    int
	time   int
}

type PriorityQueue []*Node

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool { return pq[i].fee < pq[j].fee }

func (pq PriorityQueue) Swap(i, j int) { pq[i], pq[j] = pq[j], pq[i] }

func (pq *PriorityQueue) Push(x interface{}) { *pq = append(*pq, x.(*Node)) }

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	*pq = old[0 : n-1]
	return item
}

func minCost(maxTime int, edges [][]int, passingFees []int) int {
	n := len(passingFees)
	graph := make([][]*Node, n)
	for i := range graph {
		graph[i] = []*Node{}
	}
	for _, edge := range edges {
		graph[edge[0]] = append(graph[edge[0]], &Node{vertex: edge[1], fee: edge[2]})
		graph[edge[1]] = append(graph[edge[1]], &Node{vertex: edge[0], fee: edge[2]})
	}

	minTime := make([]int, n)
	for i := range minTime {
		minTime[i] = math.MaxInt32
	}

	pq := &PriorityQueue{}
	heap.Push(pq, &Node{vertex: 0, fee: passingFees[0], time: 0})

	for pq.Len() > 0 {
		current := heap.Pop(pq).(*Node)
		vertex, fee, time := current.vertex, current.fee, current.time

		if time >= minTime[vertex] {
			continue
		}
		minTime[vertex] = time

		if vertex == n-1 {
			return fee
		}

		for _, next := range graph[vertex] {
			nextVertex := next.vertex
			travelTime := next.fee
			nextTime := time + travelTime
			nextFee := fee + passingFees[nextVertex]

			if nextTime > maxTime || nextTime >= minTime[nextVertex] {
				continue
			}

			heap.Push(pq, &Node{vertex: nextVertex, fee: nextFee, time: nextTime})
		}
	}

	return -1
}
```