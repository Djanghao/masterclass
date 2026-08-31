# Go Golang BFS Solution

**Author:** karsten_agathon
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2043598/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2043598/)

---

```
type Trip struct {
    Row, Col int
}

func shortestPathBinaryMatrix(grid [][]int) int {
    if grid[0][0] != 0 || grid[len(grid)-1][len(grid[0])-1] != 0 {
        return -1
    }
    
    queue := []Trip{{0,0}}
    grid[0][0] = 1
        
    for len(queue) > 0 {
        now := queue[0]
        queue = queue[1:]
        
        if now.Row == len(grid)-1 && now.Col == len(grid[0])-1 {
            return grid[now.Row][now.Col]
        }

        moves:= [][]int{{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}}
        
        for _, move := range moves {
            t := Trip{now.Row+move[0], now.Col+move[1]}
            
            if t.Row < 0 || t.Row >= len(grid) || t.Col < 0 || t.Col >= len(grid[0]) || grid[t.Row][t.Col] != 0 {
                continue
            }
            
            grid[t.Row][t.Col] = grid[now.Row][now.Col]+1
            queue = append(queue, t)
        }
    }
    
    return -1
}
```