# O(1) extra space solution, with 1ms time accepted answer

**Author:** someshzalani
**Votes:** 1
**Link:** [https://leetcode.com/problems/game-of-life/solutions/4223193/](https://leetcode.com/problems/game-of-life/solutions/4223193/)

---

# Intuition
Since state is to be evaluated at once, we need to keep the old state, so either we can use extra space and assign back to original matrix or do an inplace state update

# Approach
For every cell we evaluate the state change, if there is state change we set the state change accordingly.
At the end reevaluate the state change in the same matrix.

# Complexity
- Time complexity:
O(m*n) since only single traversal is required

- Space complexity:
no extra space required, so O(1)

# Code
```
var (
    StateChange01 = 2
    StateChange10 = 3
)
func gameOfLife(board [][]int)  {
    for i := range board {
        for j := range board[i] {
            curr := board[i][j]
            if curr == 0 {
                liveCount := getNeighbourCount(board, i,j,1)
                if liveCount == 3 {
                    board[i][j] = 2
                }
            } else {
                liveCount := getNeighbourCount(board, i,j,1)
                if liveCount < 2 || liveCount > 3 {
                    board[i][j] = 3
                }
            }
        }
    }
    for i := range board {
        for j := range board[i] {
            if board[i][j] == 2 {
                board[i][j] = 1
            } else if board[i][j] == 3 {
                board[i][j] = 0
            }
        }
    }
}

func getCurrState(a int) int {
    //state change 0-1
    if a == StateChange01 {
        return 0
    }
    //state change 1-0
    if a == StateChange10 {
        return 1
    }
    return a
}

func getNeighbourCount(board [][]int, i,j, state int) int {
    rows := []int{0, 0 , 1, 1, -1, -1 , 1, -1}
    columns := []int{1, -1, 1, -1, -1, 1, 0, 0}
    count := 0
    for k := range rows {
        if validateCoordinate(i+rows[k], j+columns[k], len(board), len(board[i])) {
            if getCurrState(board[i+rows[k]][j+columns[k]]) == state {
                count++
            }
        }
    }
    return count
}

func validateCoordinate(i,j , m ,n int ) bool {
    if i<0 || i >= m || j<0 || j >= n{
        return false
    }
    return true
}
```