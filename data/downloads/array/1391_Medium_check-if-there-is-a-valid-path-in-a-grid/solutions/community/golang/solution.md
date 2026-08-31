# [Go] BFS

**Author:** nghnam
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/3546663/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/3546663/)

---


# Code
```
func hasValidPath(grid [][]int) bool {
    m, n := len(grid), len(grid[0])
    up, down, left, right := [2]int{-1, 0}, [2]int{1, 0}, [2]int{0, -1}, [2]int{0, 1}
    directions := [][2]int{up, down, left, right}
    validNext := map[int]map[[2]int][]int{
        1: {left: {1, 4, 6}, right: {1, 3, 5}},
        2: {up: {2, 3, 4}, down: {2, 5, 6}},
        3: {left: {1, 4, 6}, down: {2, 5, 6}},
        4: {right: {1, 3, 5}, down: {2, 5, 6}},
        5: {left: {1, 4, 6}, up: {2, 3, 4}},
        6: {right: {1, 3, 5}, up: {2, 3, 4}},
    }
    visited := make([][]int, m)
    for i := 0; i < m; i++ {
        visited[i] = make([]int, n)
    }
    visited[0][0] = 1
    queue := make([][2]int, 0, 10)
    queue = append(queue, [2]int{0, 0})
    for len(queue) > 0 {
        x, y := queue[0][0], queue[0][1]
        queue = queue[1:]
        if x == m-1 && y == n-1 {
            return true
        }
        curr := grid[x][y]
        // fmt.Println(curr)
        for _, dir := range directions {
            dx, dy := x+dir[0], y+dir[1]
            if dx >= 0 && dx < m && dy >= 0 && dy < n && visited[dx][dy] == 0 {
                // fmt.Println(curr, dir)
                for _, next := range validNext[curr][dir] {
                    // fmt.Println(curr, next)
                    if next == grid[dx][dy] {
                        queue = append(queue, [2]int{dx, dy})
                        visited[dx][dy] = 1
                    }
                }
            }
        }
    }

    return false
}
```