# Golang 3 ms 4.8 MB

**Author:** maxhero90
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3170826/](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/3170826/)

---

# Complexity
- Time complexity: $$O(redEdges.length+blueEdges.length)$$
- Space complexity: $$O(n+redEdges.length+blueEdges.length)$$
# Code
```
type PathPoint struct {
	node  byte
	isRed bool
}

func fillConnections(connections [][]byte, edges [][]int) {
	for _, edge := range edges {
		connections[edge[0]] = append(connections[edge[0]], byte(edge[1]))
	}
}

func shortestAlternatingPaths(n int, redEdges [][]int, blueEdges [][]int) []int {
	redConnections := make([][]byte, n)
	blueConnections := make([][]byte, n)
	fillConnections(redConnections, redEdges)
	fillConnections(blueConnections, blueEdges)
	cur := []PathPoint{{0, true}, {0, false}}
	var next []PathPoint
	result := make([]int, n)
	for i := 1; i < n; i++ {
		result[i] = -1
	}
	for depth := 1; len(cur) != 0; cur, next, depth = next, cur[:0], depth+1 {
		for _, pathPoint := range cur {
			connections := redConnections
			if pathPoint.isRed {
				connections = blueConnections
			}
			if connections[pathPoint.node] != nil {
				for _, nextNode := range connections[pathPoint.node] {
					if result[nextNode] == -1 {
						result[nextNode] = depth
					}
					next = append(next, PathPoint{nextNode, !pathPoint.isRed})
				}
				connections[pathPoint.node] = nil
			}
		}
	}
	return result
}
```