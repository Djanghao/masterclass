# good luck

**Author:** jaikechen2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/candy-crush/solutions/4989791/](https://leetcode.com/problems/candy-crush/solutions/4989791/)

---



# Code
```
func candyCrush(board [][]int) [][]int {
    for mark (board){
        crush(board)
    }
    return board   
}

func crush(board [][]int) {
    m := len(board)
    n := len(board[0])
    for c := 0; c < n ; c ++{
        for r := m -1; r >= 0; r --{
            if board[r][c] < 0{
                shift(board, r, c)
                r ++
            }
        }
    }
}

func shift(board[][]int, row int, col int){
    // fmt.Println("before shift", board, row, col)
    for r := row; r > 0 ; r --{
        board[r][col] = board[r -1][col]
    }
    board[0][col] = 0
    // fmt.Println("after", board)
    // fmt.Println("")
}

func mark(board [][]int) bool{
    m := len(board)
    n := len(board[0])
    find := false
    for r := 0; r < m ; r ++{
        for c := 0; c < n ; c ++{
            v := cell(board, r, c)
            if  v != 0 && r+ 2 < m && v == cell(board, r + 1, c) && v == cell(board, r + 2, c){
                board[r][c] = -v
                board[r+1][c] = -v
                board[r+2][c] = -v
                find = true
            }

            if  v != 0 && c +2 < n && v == cell(board, r, c +1) && v == cell(board, r, c+2){
                board[r][c] = -v
                board[r][c + 1] = -v
                board[r][c+ 2] = -v
                find = true
            }
        }
    }
    return find
}

func cell(arr [][]int, r, c int) int{
    return abs(arr[r][c])
}

func abs(a int) int{
    if a < 0{
        return -a
    }
    return a
}
```