# go dfs

**Author:** PatrickShawn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/5668278/](https://leetcode.com/problems/number-of-distinct-islands/solutions/5668278/)

---

# Code
```golang []
import "strings"
func numDistinctIslands(grid [][]int) int {
    islandShapes := make(map[string]bool)

    for i := range grid{
        for j := range grid[0]{
            if grid[i][j] == 1{
                path := make([]string, 0)
                dfs(grid, i,j, &path, "")
                key := strings.Join(path, "")
                islandShapes[key] = true
            }
        }
    }

    return len(islandShapes)
}

func dfs(grid [][]int, i int, j int, path *[]string, pathC string){
    if i < 0 || i >= len(grid){
        return 
    }

    if j < 0 || j >= len(grid[0]){
        return
    }

    if grid[i][j] == 0{
        return
    }

    grid[i][j] = 0

    *path = append(*path, pathC)
    dfs(grid, i+1, j,path, "D")
    dfs(grid, i-1, j,path, "U")
    dfs(grid, i, j+1,path, "R")
    dfs(grid, i, j-1,path, "L")

    // \u8FD9\u4E00\u6B65\u975E\u5E38\u91CD\u8981\uFF0C\u6807\u5FD7\u7740\u4E4B\u524D\u7684\u4E0A\u4E0B\u5DE6\u53F3\u662F\u4ECE\u54EA\u4E2A\u8282\u70B9\u4F38\u51FA\u6765\u7684
    *path = append(*path, "0")
}
```