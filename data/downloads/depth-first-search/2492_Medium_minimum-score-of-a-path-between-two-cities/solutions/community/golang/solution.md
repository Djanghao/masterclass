# Golang | BFS

**Author:** pikachuu
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3177210/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3177210/)

---

# Code
```
type pair struct {
    first int
    second int
}

func minScore(n int, roads [][]int) int {
    adjList := make([][]pair, n + 1)
    for _, edge := range roads {
        adjList[edge[0]] = append(adjList[edge[0]], pair{edge[1], edge[2]})
        adjList[edge[1]] = append(adjList[edge[1]], pair{edge[0], edge[2]})
    }
    visited := make([]bool, n + 1)
    Queue := []int{1}
    var ans int = math.MaxInt
    for len(Queue) > 0 {
        var sz int = len(Queue)
        for i := 0; i < sz; i++ {
            var curr int = Queue[0]
            Queue = Queue[1:]
            for _, edge := range adjList[curr] {
                if edge.second < ans {
                    ans = edge.second
                }
                if !visited[edge.first] {
                    Queue = append(Queue, edge.first)
                    visited[edge.first] = true
                }
            }
        }
    }
    return ans
}
```