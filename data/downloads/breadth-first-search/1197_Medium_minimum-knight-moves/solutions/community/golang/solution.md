# Simple DP solution with explaination.

**Author:** huisheng
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-knight-moves/solutions/1555305/](https://leetcode.com/problems/minimum-knight-moves/solutions/1555305/)

---

Since the moves from [0, 0] to any [x, y] is the same to [|x|, |y|]. We can only focus on finding the moves from [0, 0] to [|x|, |y|]
Here we use dynamic programing with memo, start from `(|x|, |y|)` to `(0,0)`. In this case, the only moves will be restricted to two: either `(-1, -2)` or `(-2, -1)`

```golang
// DP with memo
func minKnightMoves(x, y int) int {
    memo := make(map[[2]int]int)
    return dp(abs(x), abs(y), memo)
}

func dp(x int, y int, memo map[[2]int]int) int {
    // base case
    if x ==0 && y == 0 { return 0 }
    
    if move, ok := memo[[2]int{x, y}]; ok {
        return move
    }
    
    // we always need 2 steps from a immediate coordinate(x+y == 2) to (0,0)
    if x + y == 2 { return 2 }
    
    ret := min(dp(abs(x-1), abs(y-2), memo), dp(abs(x-2), abs(y-1), memo)) + 1
    
    memo[[2]int{x, y}] = ret
    
    return ret
}

func min(a, b int) int {
    if a < b { return a }
    return b
}

func abs(a int) int {
    if a < 0 { return -a }
    return a
}
```