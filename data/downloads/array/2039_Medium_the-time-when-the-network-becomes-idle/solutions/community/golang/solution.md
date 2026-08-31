# Golang BFS solution

**Author:** anandsuman33
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3717334/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3717334/)

---

# Code
```
func getTime(dist, patience int) int {
    timetaken := 2*dist
    if patience > timetaken {
        return timetaken+1
    }
    extraMessages := (timetaken-1)/patience
    lastMessage := extraMessages * patience
    return lastMessage + timetaken + 1
}

func networkBecomesIdle(edges [][]int, patience []int) int {
    adjList := map[int][]int{}
    for _, edge := range edges {
        adjList[edge[0]] = append(adjList[edge[0]], edge[1])
        adjList[edge[1]] = append(adjList[edge[1]], edge[0])
    }
    visited := make([]bool, len(patience))
    visited[0] = true
    queue := []int{}
    var maxTime, level int
    for _, el := range adjList[0] {
        queue = append(queue, el)
    }
    for len(queue) > 0 {
        var tmp []int
        level++
        for len(queue) > 0 {
            el := queue[0]
            queue = queue[1:]
            if visited[el] {
                continue
            }
            visited[el] = true
            maxTime = max(maxTime, getTime(level, patience[el]))
            if len(adjList[el]) > 0 {
                for _, serv := range adjList[el] {
                    if !visited[serv] {
                        tmp = append(tmp, serv)
                    }
                }
            }
        }
        queue = tmp
    }
    return maxTime
}

func max(a, b int) int {
    if a > b { return a }
    return b
}
```