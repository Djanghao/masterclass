# [Go] BFS, beat 100%

**Author:** nghnam
**Votes:** 0
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/3027562/](https://leetcode.com/problems/coloring-a-border/solutions/3027562/)

---

# Code
```
func colorBorder(grid [][]int, row int, col int, color int) [][]int {
    m, n := len(grid), len(grid[0])
    directions := [][]int{{0, 1}, {0, -1}, {1, 0}, {-1, 0}}
    borders := make([][]int, 0, 10)
    queue := make([][]int, 0, 10)
    visited := make([][]int, m)
    for i := 0; i < m; i++ {
        visited[i] = make([]int, n)
    }

    queue = append(queue, []int{row, col})
    connectedValue := grid[row][col]
    for len(queue) > 0 {
        i, j := queue[0][0], queue[0][1]
        queue = queue[1:]
        visited[i][j] = 1
        
        isBorder := false
        for _, d := range directions {
            di, dj := i+d[0], j+d[1]
            if di >= 0 && di < m && dj >= 0 && dj < n {
                if grid[di][dj] == connectedValue {
                    if visited[di][dj] == 0 {
                        queue = append(queue, []int{di, dj})
                    }
                } else {
                    isBorder = true
                }
            } else {
                isBorder = true
            }
        }
        if isBorder {
            borders = append(borders, []int{i, j})
        }

    }
    for _, b := range borders {
        i, j := b[0], b[1]
        grid[i][j] = color
    }

    return grid 
}
```