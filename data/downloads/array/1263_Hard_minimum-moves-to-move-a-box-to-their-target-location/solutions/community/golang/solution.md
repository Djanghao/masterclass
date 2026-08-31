# [Golang] A-Star

**Author:** vasakris
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/2647970/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/2647970/)

---

```
type State struct {
    Box []int
    Person []int
    TotalDistanceToTarget int
    DistanceToBox int
    Moves int
}

func minPushBox(grid [][]byte) int {
    m := len(grid)
    n := len(grid[0])
    
    visited := make(map[string]bool)
    var target, box, person []int
    for r := 0; r < m; r++ {
        for c := 0; c < n; c++ {
            if grid[r][c] == 'S' {
                person = []int{r, c}
            } else if grid[r][c] == 'B' {
                box = []int{r, c}
            } else if grid[r][c] == 'T' {
                target = []int{r, c}
            }
        }
    }
    
    minHeap := &MinHeap{}
    heap.Push(minHeap, State{box, person, calculateDistance(box, target), calculateDistance(box, person), 0})
    
    for minHeap.Len() > 0 {
        state := heap.Pop(minHeap).(State)
        currBox := state.Box
        currPerson := state.Person
        
        if currBox[0] == target[0] && currBox[1] == target[1] {
            return state.Moves
        }
        
        key := fmt.Sprintf("%d-%d-%d-%d", currBox[0], currBox[1], currPerson[0], currPerson[1])

        if visited[key] {
            continue
        }
        visited[key] = true
        
        for _, dir := range [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}} {
            newPerson := []int{currPerson[0] + dir[0], currPerson[1] + dir[1]}
            if !ValidMove(newPerson, grid) {
                continue
            }
            
            // Now person may come on Box Cell, which is like pushing Box
            if currBox[0] == newPerson[0] && currBox[1] == newPerson[1] {
                newBox := []int{currBox[0] + dir[0], currBox[1] + dir[1]}
                if !ValidMove(newBox, grid) {
                    continue
                }
                heap.Push(minHeap, State{newBox, newPerson, calculateDistance(newBox, target)+state.Moves+1, calculateDistance(newBox, newPerson), state.Moves+1})
            } else {
                heap.Push(minHeap, State{currBox, newPerson, state.TotalDistanceToTarget, calculateDistance(currBox, newPerson), state.Moves})
            }
        }
    }
    
    return -1
}

func calculateDistance(start, end []int) int {
    return abs(start[0]-end[0]) + abs(start[1]-end[1])
}

func ValidMove(cell []int, grid [][]byte) bool {
    r := cell[0]
    c := cell[1]
    if r < 0 || r == len(grid) || c < 0 || c == len(grid[0]) || grid[r][c] == '#' {
        return false
    }
    return true
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}

type MinHeap []State

func (h MinHeap) Len() int {
    return len(h)
}

func (h MinHeap) Less(i int, j int) bool {
    if h[i].TotalDistanceToTarget == h[j].TotalDistanceToTarget {
        return h[i].DistanceToBox < h[j].DistanceToBox
    }
    return h[i].TotalDistanceToTarget < h[j].TotalDistanceToTarget
}
                          
func (h MinHeap) Swap(i int, j int) {
    h[i], h[j] = h[j], h[i]
} 
                          
func (h *MinHeap) Push(a interface{}) {
    *h = append(*h, a.(State))
}

func (h *MinHeap) Pop() interface{} {
    l := len(*h)
    res := (*h)[l - 1]
    *h = (*h)[:l - 1]
    return res
}
```