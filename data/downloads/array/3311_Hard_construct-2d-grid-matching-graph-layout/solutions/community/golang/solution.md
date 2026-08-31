# Golang solution

**Author:** duttaani
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5878837/](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5878837/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Kindly refer to Ethan's explanation , this code is same , just language is different.

https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/solutions/5875830/simple-c-with-intuition-approach/

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
// Helper function to ensure the first element is less than or equal to the second in a pair
func fixPair(p []int) []int {
	if p[0] > p[1] {
		p[0], p[1] = p[1], p[0]
	}
	return p
}

func constructGridLayout(n int, edges [][]int) [][]int {
    // Step 1: Graph representation and degree count
	graph := make(map[int][]int)  // Adjacency list
	degree := make(map[int]int)   // Degree of each node

	// Build the graph and degree count
	for _, edge := range edges {
		degree[edge[0]]++
		degree[edge[1]]++
		graph[edge[0]] = append(graph[edge[0]], edge[1])
		graph[edge[1]] = append(graph[edge[1]], edge[0])
	}

	// Step 2: Map nodes by degree
	nodesByDegree := make(map[int][]int)
	for node, deg := range degree {
		nodesByDegree[deg] = append(nodesByDegree[deg], node)
	}

	// Step 3: Sort edges for later comparison
	var edgeList [][]int
	for _, edge := range edges {
		edgeList = append(edgeList, fixPair([]int{edge[0], edge[1]}))
	}
	sort.Slice(edgeList, func(i, j int) bool {
		return edgeList[i][0] < edgeList[j][0] || (edgeList[i][0] == edgeList[j][0] && edgeList[i][1] < edgeList[j][1])
	})

	// Step 4: Function to check the validity of the grid layout
	isValidGrid := func(grid [][]int) bool {
		if len(grid) == 0 || len(grid)*len(grid[0]) != n {
			return false
		}

		visited := make(map[int]bool)
		for _, row := range grid {
			for _, node := range row {
				visited[node] = true
			}
		}
		if len(visited) != n {
			return false
		}

		var generatedEdges [][]int
		for i := 0; i < len(grid); i++ {
			for j := 0; j < len(grid[i]); j++ {
				if i > 0 {
					generatedEdges = append(generatedEdges, fixPair([]int{grid[i][j], grid[i-1][j]}))
				}
				if j > 0 {
					generatedEdges = append(generatedEdges, fixPair([]int{grid[i][j], grid[i][j-1]}))
				}
			}
		}
		sort.Slice(generatedEdges, func(i, j int) bool {
			return generatedEdges[i][0] < generatedEdges[j][0] || (generatedEdges[i][0] == generatedEdges[j][0] && generatedEdges[i][1] < generatedEdges[j][1])
		})
		return fmt.Sprintf("%v", generatedEdges) == fmt.Sprintf("%v", edgeList)
	}

	// Step 5: Function to extend the grid layout
	extendGrid := func(start []int) [][]int {
		grid := [][]int{}
		visited := make(map[int]bool)
		grid = append(grid, start)

		for _, node := range start {
			visited[node] = true
		}

		for {
			nextRow := []int{}
			for _, u := range grid[len(grid)-1] {
				newAdj := -1
				for _, v := range graph[u] {
					if !visited[v] {
						newAdj = v
						break
					}
				}
				if newAdj == -1 {
					return [][]int{} // No more unvisited adjacent nodes
				}
				nextRow = append(nextRow, newAdj)
				visited[newAdj] = true
			}
			grid = append(grid, nextRow)
			if isValidGrid(grid) {
				return grid // Return valid grid
			}
		}
	}

	// Step 6: Try to construct the grid layout starting from nodes of degree 1
	if len(nodesByDegree[1]) > 0 {
		result := extendGrid([]int{nodesByDegree[1][0]})
		if len(result) > 0 {
			return result // Return if a valid layout is found
		}
	}

	// Step 7: Try pairs of nodes of degree 2
	for _, a := range nodesByDegree[2] {
		for _, b := range nodesByDegree[2] {
			if a != b {
				result := extendGrid([]int{a, b})
				if len(result) > 0 {
					return result // Return if a valid layout is found
				}
			}
		}
	}

	// Step 8: Try extending from a single node of degree 2
	if len(nodesByDegree[2]) > 0 {
		currentNodes := []int{}
		startNode := nodesByDegree[2][0]
		currentNodes = append(currentNodes, startNode)
		visited := make(map[int]bool)
		visited[startNode] = true

		for {
			nextNode := -1
			current := currentNodes[len(currentNodes)-1]
			for _, neighbor := range graph[current] {
				if !visited[neighbor] && degree[neighbor] <= 3 {
					nextNode = neighbor
					break
				}
			}
			if nextNode == -1 {
				break // No more valid nodes to add
			}
			currentNodes = append(currentNodes, nextNode)
			visited[nextNode] = true
			if degree[currentNodes[len(currentNodes)-1]] == 2 {
				break // Stop if we reached a node of degree 2
			}
		}
		result := extendGrid(currentNodes)
		if len(result) > 0 {
			return result // Return if a valid layout is found
		}
	}

	return [][]int{} // Return empty if no valid layout is found
}
```