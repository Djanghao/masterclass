# 👍Runtime 1295 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/5052168/](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/5052168/)

---

# Code
```
func magnificentSets(n int, edges [][]int) int {
	// bfs -> will detect odd cycle (graph must be bipartite==not have an odd cycle)
	// for each component take the maximum
	// dfs -> to partition into components

	graph := make(map[int][]int)
	for node := 1; node <= n; node++ {
		graph[node] = []int{}
	}

	for _, edge := range edges {
		u := edge[0]
		v := edge[1]
		graph[u] = append(graph[u], v)
		graph[v] = append(graph[v], u)
	}

	components := make(map[int][]int)
	visited := make(map[int]bool)
	component := 1
	for node := 1; node <= n; node++ {
		if visited[node] {
			continue
		}
		visited[node] = true
		components[component] = []int{}
		dfsComponents(component, node, graph, components, visited)
		component++
	}
	componentsMaxTravel := make([]int, component)
	finalRes := 0
	for comp := 1; comp < component; comp++ {
		for _, compNode := range components[comp] {

			compRes := bfs(compNode, graph)
			if compRes == -1 {
				return -1
			}
			if compRes > componentsMaxTravel[comp] {
				componentsMaxTravel[comp] = compRes
			}
		}
		finalRes += componentsMaxTravel[comp]
	}

	return finalRes

}

func dfsComponents(component int, node int, graph map[int][]int, components map[int][]int, visited map[int]bool) {
	components[component] = append(components[component], node)
	for _, neighbor := range graph[node] {
		// happens when there is more than one spanning tree. I.E you can arrive at a node in more than one way
		if visited[neighbor] {
			continue
		}
		visited[neighbor] = true
		dfsComponents(component, neighbor, graph, components, visited)
	}
}

func bfs(node int, graph map[int][]int) int {
	reach := 0
	visited := make(map[int]bool)
	queue := []int{}
	curLevel := make(map[int]bool)

	queue = append(queue, node)
	visited[node] = true

	for len(queue) > 0 {
		n := len(queue)
		nextLevel := make(map[int]bool)

		for i := 0; i < n; i++ {
			curNode := queue[0]
			queue = queue[1:]

			for _, neighbor := range graph[curNode] {
				if curLevel[neighbor] {
					return -1 // Colored with different color == not bipartite
				}
				if visited[neighbor] {
					continue
				}
				nextLevel[neighbor] = true
				visited[neighbor] = true
				queue = append(queue, neighbor)
			}
		}

		curLevel = nextLevel
		reach++
	}

	return reach
}
```