# Golang backtracking TLE

**Author:** tw13
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solutions/2552171/](https://leetcode.com/problems/find-the-shortest-superstring/solutions/2552171/)

---

Referenced https://www.youtube.com/watch?v=u_Wc4jwrp3Q
```
func shortestSuperstring(words []string) string {
    n := len(words)
    cost := make([][]int, n)
    for i := 0; i < n; i++ {
        cost[i] = make([]int, n)
    }
    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            if i == j {
                cost[i][j] = 0
            } else {
                for k := len(words[j]); k >= 0; k-- {
                    prefix := words[j][:k]
                    if strings.HasSuffix(words[i], prefix) {
                        cost[i][j] = len(words[j]) - k
                        break
                    }
                }
            }
        }
    }
    maxLength := math.MaxInt32
    bestPath := make([]int, len(words))
    dfs(words, 0, 0, 0, &maxLength, make([]int, len(words)), &bestPath, cost)
    out := words[bestPath[0]]
    for i := 1; i < len(words); i++ {
        c := cost[bestPath[i-1]][bestPath[i]]
        suffix := words[bestPath[i]][len(words[bestPath[i]])-c:]
        out += suffix
    }
    return out
}

func dfs(words []string, curLength int, used int, depth int, maxLength *int, path []int, bestPath *[]int, cost [][]int) {
    if curLength >= *maxLength {
        return
    }
    
    if depth == len(words) {
        *maxLength = curLength
        newBestPath := make([]int, len(path))
        copy(newBestPath, path)
        *bestPath = newBestPath
        return
    }
    
    for i := 0; i < len(words); i++ {
        if (used & (1 << i)) == 0 {
            path[depth] = i 
            if depth == 0 {
                dfs(words, len(words[i]), (used | (1 << i)), depth+1, maxLength, path, bestPath, cost)
            } else {
                dfs(words, curLength + cost[path[depth-1]][i], (used | (1 << i)), depth+1, maxLength, path, bestPath, cost)
            }
        }
    }
}
```