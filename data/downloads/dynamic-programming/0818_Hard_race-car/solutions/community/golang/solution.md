# [Golang] BFS

**Author:** vasakris
**Votes:** 2
**Link:** [https://leetcode.com/problems/race-car/solutions/2732215/](https://leetcode.com/problems/race-car/solutions/2732215/)

---

```
type State struct {
    Position int
    Speed int
    Steps int
}

func racecar(target int) int {
    minHeap := &MinHeap{}
    heap.Push(minHeap, State{0, 1, 0})
    visited := make(map[string]bool)
    
    for minHeap.Len() > 0 {
        state := heap.Pop(minHeap).(State)
        
        if state.Position == target {
            return state.Steps
        }
        
        if state.Position + state.Speed <= 2 * target {
            nextPosition := state.Position + state.Speed
            nextSpeed := 2*state.Speed
            nextSteps := state.Steps+1
            
            key := strconv.Itoa(nextPosition) + "-" + strconv.Itoa(nextSpeed)
            if !visited[key] {
                heap.Push(minHeap, State{nextPosition, nextSpeed, nextSteps})
                visited[key] = true
            }
        } 
        if state.Position >= (target/2) {
            nextPosition := state.Position
            nextSpeed := 1
            nextSteps := state.Steps+1
            
            if state.Speed > 0 {
                nextSpeed = -1
            }
            
            key := strconv.Itoa(nextPosition) + "-" + strconv.Itoa(nextSpeed)
            if !visited[key] {
                heap.Push(minHeap, State{nextPosition, nextSpeed, nextSteps})
                visited[key] = true
            }            
        }
    }
    
    return -1
}

type MinHeap []State

func (h MinHeap) Len() int {
    return len(h)
}

func (h MinHeap) Less(i int, j int) bool {
    if h[i].Steps == h[j].Steps {
        return h[i].Position < h[j].Position
    }
    return h[i].Steps < h[j].Steps
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