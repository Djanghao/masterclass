# Go - minimalistic bfs

**Author:** tucux
**Votes:** 3
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/2933948/](https://leetcode.com/problems/possible-bipartition/solutions/2933948/)

---

```
func possibleBipartition(n int, dislikes [][]int) bool {
    edges := make([][]int, n + 1)
    for _, dislike := range dislikes {
        edges[dislike[0]] = append(edges[dislike[0]], dislike[1])
        edges[dislike[1]] = append(edges[dislike[1]], dislike[0])
    }
    colors := make([]int, n + 1)
    for i := 1; i <= n; i++ {
        if colors[i] == 0 && !bfs(i, edges, colors) {
            return false
        }
    }
    return true
}

func bfs(start int, edges [][]int, colors []int) bool {
    colors[start] = 1
    for queue := []int{start}; len(queue) > 0; queue = queue[1:] {
        node := queue[0]
        for _, neighbor := range edges[node] {
            if colors[neighbor] == colors[node] {
                return false
            }
            if colors[neighbor] == 0 {
                colors[neighbor] = -colors[node]
                queue = append(queue, neighbor)
            }
        }
    }
    return true
}
```