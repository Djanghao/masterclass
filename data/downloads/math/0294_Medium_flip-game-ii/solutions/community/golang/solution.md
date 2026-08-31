# A Good Go Solution

**Author:** ankur123rana
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/5658433/](https://leetcode.com/problems/flip-game-ii/solutions/5658433/)

---

# Code
```
var dp map[uint64][2]*int
func canWin(currentState string) bool {
    dp = make(map[uint64][2]*int);
    state := uint64(0)
    for i:=0;i<len(currentState);i++ {
        if currentState[i] == '+' {
            state = state | (1<<i);
        }
    }

    if GetWinner(state,0) == 0 {
        return true
    }
    return false; 
}

func GetWinner(state uint64,player int) int {   
    v,ok := dp[state];
    if ok && v[player] != nil {
        return *v[player]
    }

    winner := 1 - player; 
    for i:=0;i<60;i++ {
        if state&(1<<i) > 0 && state&(1<<(i+1)) > 0 {
            mask := uint64(^((1<<i) | 1<<(i+1)))
            newState := state & mask;
            if GetWinner(newState,1-player) == player {
                winner = player
                break;
            }
        }
    }
    if _,ok := dp[state]; !ok {
        dp[state] = [2]*int{}
    }
    res := [2]*int{}
    res[player] = &winner
    dp[state] = res; 
    return winner
}


```