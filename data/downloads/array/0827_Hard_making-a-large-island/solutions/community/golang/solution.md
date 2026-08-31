# GO Solution | Simple Intuition | DFS

**Author:** yanwan
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/5838635/](https://leetcode.com/problems/making-a-large-island/solutions/5838635/)

---

# Intuition
1. Calculate the area of each isolated island and mark it at the same time. The mark of different isolated islands starts from 2; And record the map: mark -> area.
2. Traverse the map again, if encountering 0, look at the islands near it(left/right, up/down), count the total area + 1, and record the maximum area.

# Complexity
- Time complexity:
O(N  * M), N=#rows of grid, M=#columns of grid

- Space complexity:
O(N * M)

# Code
```golang []
var directions [][]int = [][]int{{0,-1},{0,1},{-1,0},{1,0}}

func largestIsland(grid [][]int) (result int) {
    N, M := len(grid), len(grid[0])
    visited := make([][]bool, N)
    for i:=0; i<N; i++{
        visited[i] = make([]bool, M)
    }

    mark := 2
    mark2Area := make(map[int]int)
    for i:=0; i<N;i++{
        for j:=0; j<M;j++{
            if grid[i][j] == 1 && !visited[i][j]{
                mark2Area[mark] = dfs(grid, visited, i, j, mark)
                result = max(result, mark2Area[mark])
                mark++
            }
        }
    }

    markVisited := make(map[int]int)
    for i:=0; i<N;i++{
        for j:=0;j<M;j++{
            if grid[i][j] == 0{
                // \u627E\u4E0E\u5176\u8FDE\u63A5\u7684\u5C9B\u5C7F
                count := 1
                for k:=0; k<len(directions);k++{
                    nearx := i + directions[k][0]
                    neary := j + directions[k][1]
                    
                    if nearx < 0 || nearx >= N || neary < 0 || neary >= M{
                        continue
                    }
                    nearMark := grid[nearx][neary]
                    if nearMark > 0{
                         _, hasMarkVisited := markVisited[nearMark]
                         if !hasMarkVisited{
                             markVisited[nearMark] = 1
                             count += mark2Area[nearMark]
                         }
                    }
                }
                result = max(result, count)
                for key, _ := range markVisited{
                    delete(markVisited, key)
                }
            }
        }
    }

    return result
    
}

func dfs(grid [][]int, visited [][]bool, startx int, starty int, mark int) int{
    N, M := len(grid), len(grid[0])
    grid[startx][starty] = mark
    result := 1
    
    for i:=0; i<len(directions);i++{
        nextx := startx + directions[i][0]
        nexty := starty + directions[i][1]
        
        if nextx < 0 || nextx >= N || nexty < 0 || nexty >=M {
            continue
        }
        
        if grid[nextx][nexty] == 1 && !visited[nextx][nexty]{
            visited[nextx][nexty] = true
            result += dfs(grid, visited, nextx, nexty, mark)
        }
    }
    return result
}

```