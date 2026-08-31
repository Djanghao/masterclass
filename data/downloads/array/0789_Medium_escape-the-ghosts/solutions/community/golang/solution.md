# Manhattan Distance Go Solution

**Author:** destifo
**Votes:** 1
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/2986045/](https://leetcode.com/problems/escape-the-ghosts/solutions/2986045/)

---

```
import "math"


func manhattanDistance(x int, y int, x0 int, y0 int) int {
    return int(math.Abs(float64(x-x0)) + math.Abs(float64(y-y0)))
}


// O(n) time,
// O(1) space,
// Approach: math, manhattan distance
func escapeGhosts(ghosts [][]int, target []int) bool {
    pacman_dist := manhattanDistance(0, 0, target[0], target[1])
    
    for _, ghost := range ghosts {
        ghost_dist := manhattanDistance(ghost[0], ghost[1], target[0], target[1])
        
        if ghost_dist <= pacman_dist {
            return false
        }
    }
    return true
}
```