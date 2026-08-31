# 👍Runtime 489 ms Beats 88.12%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5643868/](https://leetcode.com/problems/count-the-number-of-good-nodes/solutions/5643868/)

---

# Code
```
func dfs(curr, parent int, graph [][]int, subtreeSize []int) int {
	size := 1
	for _, nbr := range graph[curr] {
		if nbr != parent {
			size += dfs(nbr, curr, graph, subtreeSize)
		}
	}
	subtreeSize[curr] = size
	return size
}

func countGoodNodes(edges [][]int) int {
	n := len(edges) + 1
	graph := make([][]int, n)
	subtreeSize := make([]int, n)

	// Initialize the adjacency list for the graph
	for i := 0; i < n; i++ {
		graph[i] = []int{}
	}

	// Populate the adjacency list with the given edges
	for _, edge := range edges {
		graph[edge[0]] = append(graph[edge[0]], edge[1])
		graph[edge[1]] = append(graph[edge[1]], edge[0])
	}

	// Perform DFS to calculate the size of each subtree
	dfs(0, -1, graph, subtreeSize)

	result := 0

	// Count the good nodes
	for i := 0; i < n; i++ {
		isGoodNode := true
		previousSize := -1
		for _, nbr := range graph[i] {
			if subtreeSize[nbr] < subtreeSize[i] {
				if previousSize == -1 {
					previousSize = subtreeSize[nbr]
				} else if previousSize != subtreeSize[nbr] {
					isGoodNode = false
					break
				}
			}
		}
		if isGoodNode {
			result++
		}
	}

	return result
}
```