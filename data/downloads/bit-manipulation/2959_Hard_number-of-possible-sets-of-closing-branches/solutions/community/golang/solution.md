# Floyd warshall | Golang

**Author:** asavershin
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4854178/](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4854178/)

---

# Code
```
func getMaxDistanceUsingFloydWarshall(adjacencyMatrix [10][10]int, mask *int, n *int) (maxDistance int) {
	for k := 0; k < *n; k++ {
		if *mask&(1<<k) != 0 {
			for i := 0; i < *n; i++ {
				if i != k && *mask&(1<<i) != 0 {
					for j := 0; j < *n; j++ {
						if j != i && *mask&(1<<j) != 0 {
							adjacencyMatrix[i][j] = min(adjacencyMatrix[i][j], adjacencyMatrix[i][k]+adjacencyMatrix[k][j])
						}
					}
				}
			}
		}
	}

	for i := 0; i < *n; i++ {
		if *mask&(1<<i) != 0 {
			for j := i + 1; j < *n; j++ {
				if *mask&(1<<j) != 0 {
					maxDistance = max(maxDistance, adjacencyMatrix[i][j])
				}
			}
		}
	}

	return
}
var adjacencyMatrix [10][10]int
func numberOfSets(n int, maxDistance int, roads [][]int) (res int) {
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			adjacencyMatrix[i][j] = 1000000
		}
	}
	for _, road := range roads {
		adjacencyMatrix[road[0]][road[1]] = min(adjacencyMatrix[road[0]][road[1]], road[2])
		adjacencyMatrix[road[1]][road[0]] = min(adjacencyMatrix[road[1]][road[0]], road[2])
	}

	res = 1
	combinationsCount := 1 << n
	for vertexMask := 1; vertexMask < combinationsCount; vertexMask++ {
		if getMaxDistanceUsingFloydWarshall(adjacencyMatrix, &vertexMask, &n) <= maxDistance {
			res++
		}
	}
	return
}
```