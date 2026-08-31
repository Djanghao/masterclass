# Go BFS and Soring

**Author:** casd82
**Votes:** 1
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/762792/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/762792/)

---

I need a gun, to keep myself among.

Sorting O(R*C (logR + logC)):
```
func allCellsDistOrder(R int, C int, r0 int, c0 int) [][]int {
    res := make([][]int, 0, R*C)
    for i := 0; i < R; i++ {
        for j := 0; j < C; j++ {
            res = append(res, []int{i, j})
        }
    }
    
    sort.Slice(res, func(i, j int) bool {
        dist1 := abs(res[i][0] - r0) + abs(res[i][1] - c0)
        dist2 := abs(res[j][0] - r0) + abs(res[j][1] - c0)
        return dist1 < dist2
    })
    
    return res
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```

BFS O(R*C):
```
type coord struct{
    r int
    c int
}

var directions = []coord{{0, 1}, {1, 0}, {-1, 0}, {0, -1}}

func allCellsDistOrder(R int, C int, r0 int, c0 int) [][]int {
    visited := make(map[coord]struct{})
    res := make([][]int, 0, R*C)
    q := []coord{}
    
    q = append(q, coord{r0, c0})
    for len(q) != 0 {
        curr := q[0]
        q = q[1:]
        
        if _, ok := visited[curr]; ok {
            continue
        }
        
        visited[curr] = struct{}{}
        res = append(res, []int{curr.r, curr.c})
        
        for _, dir := range directions {
            newCoord := coord{curr.r + dir.r, curr.c + dir.c}
            if newCoord.r >= 0 && newCoord.r < R && newCoord.c >= 0 && newCoord.c < C {
                q = append(q, newCoord)
            }
        }
    }
    
    return res
}
```