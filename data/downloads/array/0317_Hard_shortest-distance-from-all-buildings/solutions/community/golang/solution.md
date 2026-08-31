# [Go][BFS] visit from building to land, beat 94%

**Author:** MavsLee
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/3099622/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/3099622/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
for the shortest distance problem can use BFS. one way is to visit from building to land, while for each land need to record how many builds have been visited to this land so far.

# Approach
<!-- Describe your approach to solving the problem. -->
1. starting from buildings to update distrance to each land
2. find result with the land has been reached by all lands
# Complexity
- Time complexity: 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
time O(k * n * m) - k is number of buildings

- Space complexity: 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
space O(n * m), stores grid info and seen map

# Code
```
var gridInfo = [][]*Info{}

type Info struct {
    val int
    buildCnt int
    totalDis int
}

func shortestDistance(grid [][]int) int {
    // starting from buildings to update distrance to each land
    // find result with the land has been reached by all lands 
    // time O(k * n * m), space O(n * m) k is number of buildings
    n := len(grid)
    m := len(grid[0])
    gridInfo = make([][]*Info, n)
    buildings := [][]int{}
    for i, g := range grid {
        gridInfo[i] = make([]*Info, m)
        for j, v := range g {
            gridInfo[i][j] = &Info{
                val: v,
                buildCnt: 0,
                totalDis: 0,
            }
            if v == 1 {
                buildings = append(buildings, []int{i, j})
            }
        }
    }
    for _, b := range buildings {
        visit(n, m, b[0], b[1])
    }
    res := -1
    for _, gi := range gridInfo {
        for _, g := range gi {
            if g.val == 0 && g.buildCnt == len(buildings) {
                if g.totalDis < res || res == -1 {
                    res = g.totalDis
                }      
            }
        }
    }
    return res
}

var dirx = []int{0, 0, 1, -1}
var diry = []int{1, -1, 0, 0}
// BFS to update land distance
func visit(n int, m int, x int, y int) {
    seen := make([][]bool, n)
    for i:=0; i < n; i++ {
        seen[i] = make([]bool, m)
    }
    queue := [][]int{}
    queue = append(queue, []int{x, y})
    seen[x][y] = true
    dis := 0
    for len(queue) > 0 {
        dis++
        newQueue := [][]int{}
        for _, cur := range queue {
            for i:= 0; i < 4; i++ {
                nx := cur[0] + dirx[i]
                ny := cur[1] + diry[i]
                if nx >=0 && nx < n && ny>=0 && ny < m && !seen[nx][ny] && gridInfo[nx][ny].val == 0 {
                    gridInfo[nx][ny].buildCnt++
                    gridInfo[nx][ny].totalDis += dis
                    newQueue = append(newQueue, []int{nx, ny})
                    seen[nx][ny] = true
                }
            }
        }
        queue = newQueue
    }
}
```