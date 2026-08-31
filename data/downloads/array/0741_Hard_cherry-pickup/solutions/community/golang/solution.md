# Go golang clean(?) solution using map. Too much code, better next time

**Author:** karsten_agathon
**Votes:** 1
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/2048559/](https://leetcode.com/problems/cherry-pickup/solutions/2048559/)

---

With struct:
```
type State struct {
    PosA Pos
    PosB Pos
}

type Pos struct {
    Row int
    Col int
}

func (p *Pos) Add(pos Pos) {
    p.Row += pos.Row
    p.Col += pos.Col
}

func cherryPickup(grid [][]int) int {
    n := len(grid)
    dp := map[State]int{State{Pos{0, 0}, Pos{0, 0}}: grid[0][0]}
    
    for step := 1; step <= 2*(n-1); step++ {
        nextDp := map[State]int{}
        
        for i := max(0, step-(n-1)); i <= min(step, n-1); i++ {
            posA := Pos{i, step-i}

            if grid[posA.Row][posA.Col] == -1 {
                continue
            }
            
            for j := max(0, step-(n-1)); j <= min(step, n-1); j++ {
                posB := Pos{j, step-j}
                
                if grid[posB.Row][posB.Col] == -1 {
                    continue
                }
                
                state := State{posA, posB}
                cherry := calculate(grid, dp, state) 
                
                if cherry == -1 {
                    continue
                }
                
                nextDp[state] = cherry
            }
        }
        
        dp = nextDp  
        
        if len(dp) == 0 {
            return 0
        }
    }
    
    return dp[State{Pos{n-1, n-1}, Pos{n-1, n-1}}]
}

func calculate(grid [][]int, dp map[State]int, state State) int {
    posA, posB := state.PosA, state.PosB
    
    cherry := 0
    if grid[posA.Row][posA.Col] == 1 {
        cherry++
    }
    
    if posA != posB && grid[posB.Row][posB.Col] == 1 {
        cherry++
    }
        
    prevStates := createPreviousStates(dp, state)
    
    if len(prevStates) == 0 {
        return -1
    } 
    
    prevMax := 0
    for _, prevState := range prevStates {
        prevMax = max(prevMax, dp[prevState])
    }
    
    return prevMax + cherry
}

func createPreviousStates(dp map[State]int, state State) []State {
    result := []State{}
    moves := []Pos{{-1, 0}, {0, -1}}
    
    for _, moveA := range moves {
        for _, moveB := range moves {
            prevState := state
            prevState.PosA.Add(moveA)
            prevState.PosB.Add(moveB)
            
            if _, found := dp[prevState]; !found {
                continue
            }
            
            result = append(result, prevState)
        }
    }
    
    return result
}

func max(i, j int) int {
    if i > j {
        return i
    }
    
    return j
}

func min(i, j int) int {
    if i < j {
        return i
    }
    
    return j
}
```

With array:
```
func cherryPickup(grid [][]int) int {
    n := len(grid)
    dp := map[[2][2]int]int{ [2][2]int{{0,0},{0,0}}: grid[0][0] }
    
    for step := 1; step <= 2*(n-1); step++ {
        nextDp := map[[2][2]int]int{}
        
        for i := max(0, step-(n-1)); i <= min(step, n-1); i++ {
            posA := [2]int{i, step-i}

            if grid[posA[0]][posA[1]] == -1 {
                continue
            }
            
            for j := max(0, step-(n-1)); j <= min(step, n-1); j++ {
                posB := [2]int{j, step-j}
                
                if grid[posB[0]][posB[1]] == -1 {
                    continue
                }
                
                state := [2][2]int{posA, posB}
                cherry := calculate(grid, dp, state) 
                
                if cherry == -1 {
                    continue
                }
                
                nextDp[state] = cherry
            }
        }
        
        dp = nextDp  
        
        if len(dp) == 0 {
            return 0
        }
    }
    
    return dp[[2][2]int{{n-1, n-1}, {n-1, n-1}}]
}

func calculate(grid [][]int, dp map[[2][2]int]int, state [2][2]int) int {
    cherry := 0
    
    if grid[state[0][0]][state[0][1]] == 1 {
        cherry++
    }
    
    if state[0] != state[1] && grid[state[1][0]][state[1][1]] == 1 {
        cherry++
    }
        
    prevStates := createPreviousStates(dp, state)
    
    if len(prevStates) == 0 {
        return -1
    } 
    
    prevMax := 0
    for _, prevState := range prevStates {
        prevMax = max(prevMax, dp[prevState])
    }
    
    return prevMax + cherry
}

func createPreviousStates(dp map[[2][2]int]int, state [2][2]int) [][2][2]int {
    result := [][2][2]int{}
    moves := [][2]int{{-1, 0}, {0, -1}}
    
    for _, moveA := range moves {
        for _, moveB := range moves {
            prevState := state
            
            prevState[0][0] += moveA[0]
            prevState[0][1] += moveA[1]
            prevState[1][0] += moveB[0]
            prevState[1][1] += moveB[1]
            
            if _, found := dp[prevState]; !found {
                continue
            }
            
            result = append(result, prevState)
        }
    }
    
    return result
}

func max(i, j int) int {
    if i > j {
        return i
    }
    
    return j
}

func min(i, j int) int {
    if i < j {
        return i
    }
    
    return j
}
```