# [Golang] DFS + BFS

**Author:** vasakris
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/3548294/](https://leetcode.com/problems/shortest-bridge/solutions/3548294/)

---

# Complexity
- Time complexity:
O(r*c)

- Space complexity:
O(r*c), reused input matrix

# Code
```
func shortestBridge(grid [][]int) int {
    m := len(grid)
    n := len(grid[0])

    queue := [][]int{}    
    for r := 0; r < m && len(queue) == 0; r++ {
        for c := 0; c < n && len(queue) == 0; c++ {
            if grid[r][c] == 1 {
                dfs(r, c, grid, &queue)
            }
        }
    }

    fmt.Println(queue)
    count := 0
    for len(queue) > 0 {
        l := len(queue)
        for i := 0; i < l; i++ {
            cell := queue[0]
            queue = queue[1:]

            r, c := cell[0], cell[1]            
            for _, dir := range [][]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}} {
                nr := r + dir[0]
                nc := c + dir[1]

                if nr < 0 || nc < 0 || nr == len(grid) || nc == len(grid[0]) || grid[nr][nc] == 2 {
                    continue
                }
                if grid[nr][nc] == 1 {
                    return count
                }
                grid[nr][nc] = 2
                queue = append(queue, []int{nr, nc})
            }
        }
        count++
    }

    return -1
}

func dfs(row, col int, grid [][]int, queue *[][]int) {
    grid[row][col] = 2
    *queue = append(*queue, []int{row, col})

    for _, dir := range [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}} {
        r := row + dir[0]
        c := col + dir[1]

        if r < 0 || c < 0 || r == len(grid) || c == len(grid[0]) || grid[r][c] != 1 {
            continue
        }
        dfs(r, c, grid, queue)
    }
}
```