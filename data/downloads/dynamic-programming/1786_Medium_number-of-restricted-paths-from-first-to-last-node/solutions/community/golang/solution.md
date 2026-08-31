# Golang | Dijkstra | Time O((v+e)*log(v)) | Space O(v + e)

**Author:** Reensef
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/5892674/](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/solutions/5892674/)

---

# Complexity
- Time complexity: $$O((v+e)log(v))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(v+e)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
import (
    "math"
    "github.com/emirpasic/gods/trees/binaryheap"
)

type graphEdge struct {
    to int
    weight int
}

type graphPath struct {
    to int
    distance int
}

func countRestrictedPaths(n int, edges [][]int) int {
    distances := make([]int, n+1)
    for i := range distances {
        distances[i] = math.MaxInt32
    }
    distances[n] = 0

    graph := make(map[int][]graphEdge)
    for _, v := range edges {
        graph[v[0]] = append(graph[v[0]], graphEdge{v[1], v[2]})
        graph[v[1]] = append(graph[v[1]], graphEdge{v[0], v[2]})
    }

    pq := binaryheap.NewWith(func (i, j interface{}) int {
        return i.(graphPath).distance - j.(graphPath).distance
    })

    pq.Push(graphPath{n, 0})

    for !pq.Empty() {
        top, _ := pq.Pop()
        currPath := top.(graphPath)
        currNode := currPath.to
        currDistance := currPath.distance

        for _, adjEdge := range graph[currNode] {
            if currDistance + adjEdge.weight < distances[adjEdge.to] {
                distances[adjEdge.to] = currDistance + adjEdge.weight
                pq.Push(graphPath{adjEdge.to, distances[adjEdge.to]})
            }
        }
    }

    countPaths := make([]int, n+1)
    for i := range countPaths {
        countPaths[i] = -1
    }

    return calcPathsCount(1, n, graph, distances, countPaths)
}

func calcPathsCount(
    node int,
    nodeCount int,
    graph map[int][]graphEdge,
    distances []int,
    countPaths []int,
) int {
    if countPaths[node] != -1 {
        return countPaths[node]
    }

    if node == nodeCount {
        return 1
    }

    count := 0

    for _, adjEdge := range graph[node] {
        if distances[node] > distances[adjEdge.to] {
            adjCount := calcPathsCount(adjEdge.to, nodeCount, graph, distances, countPaths)
            count = (count + adjCount) % (1e9 + 7);
        }
    }

    countPaths[node] = count
    return count 
}
```