# [Golang] Topological Sort

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3343062/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3343062/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
func longestCycle(edges []int) int {
    n := len(edges)
    visited := make([]bool, n)
    inDegree := make([]int, n)

    // Calculate InDegree for each Nodes, O(N)
    for _, edge := range edges {
        if edge != -1 {
            inDegree[edge]++
        }
    }

    // Find all Nodes with 0-Indegree, O(N)
    queue := []int{}
    for i := 0; i < n; i++ {
        if inDegree[i] == 0 {
            queue = append(queue, i)
        }
    }

    // Remove all Nodes which are not part of cycles, O(N)
    for len(queue) > 0 {
        node := queue[0]
        queue = queue[1:]

        visited[node] = true
        next := edges[node]
        if next != -1 {
            inDegree[next]--
            if inDegree[next] == 0 {
                queue = append(queue, next)
            }
        }
    }

    // Calculate length of each loop, O(N)
    res := -1
    for i := 0; i < n; i++ {
        if !visited[i] {    // Definitely in Loop
            count := 1
            next := edges[i]
            for next != i {
                visited[next] = true
                count++
                next = edges[next]
            }
            res = max(res, count)
        }
    }

    return res
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```