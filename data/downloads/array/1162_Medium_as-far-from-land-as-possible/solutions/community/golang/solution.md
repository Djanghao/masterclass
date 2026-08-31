# Golang | BFS

**Author:** pikachuu
**Votes:** 3
**Link:** [https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3166741/](https://leetcode.com/problems/as-far-from-land-as-possible/solutions/3166741/)

---

# Code
```
func maxDistance(grid [][]int) int {
    var m int = len(grid)
    var n int = len(grid[0])
    Queue := [][]int{}
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == 1 {
                Queue = append(Queue, []int{i, j})
            }
        }
    }
    if len(Queue) == m * n {return -1}
    var ans int = -1
    dirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
    for len(Queue) > 0 {
        ans++
        var s int = len(Queue)
        for i := 0; i < s; i++ {
            curr := Queue[0]
            Queue = Queue[1: len(Queue)]
            for _, dir := range dirs {
                var x int = curr[0] + dir[0]
                var y int = curr[1] + dir[1]
                if x >= 0 && y >= 0 && x < m && y < n && grid[x][y] == 0 {
                    grid[x][y] = 1
                    Queue = append(Queue, []int{x, y})
                }
            }
        }
    }
    return ans
}
```