# [Golang] Topological sort

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/3237904/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/3237904/)

---

# Complexity
- Time complexity:
O(M*N)

- Space complexity:
O(M*N)

# Code
```
func longestIncreasingPath(matrix [][]int) int {
    m := len(matrix)
    n := len(matrix[0])
    
    inDegree := make([][]int, m)
    for i := 0; i < m; i++ {
        inDegree[i] = make([]int, n)
    }
    
    // O(M*N)
    for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
            for _, dir := range [][]int{{-1, 0}, {0, -1}, {1, 0}, {0, 1}} {
                nr := r + dir[0]
                nc := c + dir[1]
                if nr < 0 || nc < 0 || nr == m || nc == n || matrix[nr][nc] <= matrix[r][c] {
                    continue
                }
                inDegree[r][c]++
            }
        }
    }

    // O(M*N)
    queue := [][]int{}
    for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
            if inDegree[r][c] == 0 {
                queue = append(queue, []int{r, c})
            }
        }
    }

   // O(M*N)
    steps := 0
    for len(queue) > 0 {
        l := len(queue)
        for i := 0; i < l; i++ {
            r, c := queue[0][0], queue[0][1]
            queue = queue[1:]

            for _, dir := range [][]int{{-1, 0}, {0, -1}, {1, 0}, {0, 1}} {
                nr := r + dir[0]
                nc := c + dir[1]
                if nr < 0 || nc < 0 || nr == m || nc == n || matrix[nr][nc] >= matrix[r][c] {
                        continue
                }
                inDegree[nr][nc]--
                if inDegree[nr][nc] == 0 {
                    queue = append(queue, []int{nr, nc})
                }
            }
        }
        steps++           
    }
    
    return steps
}

```