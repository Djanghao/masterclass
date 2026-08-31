# Go Straightforward Solution - 0ms

**Author:** phea
**Votes:** 1
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/846263/](https://leetcode.com/problems/available-captures-for-rook/solutions/846263/)

---

https://github.com/phea/leetcode-go

```go
func numRookCaptures(board [][]byte) int {
    var row, col int
    for i := 0; i < 8; i++ {
        for j := 0; j < 8; j++ {
            if board[i][j] == byte('R'){
                row, col = i, j
            }
        }
    }
    
    
    var count int
    // north
    for i := row-1; i >= 0; i-- {
        if board[i][col] == byte('p') {
            count++
            break
        }
        
        if board[i][col] == byte('B') {
            break
        }
    }
    
    //south
    for i := row+1; i < 8; i++ {
        if board[i][col] == byte('p') {
            count++
            break
        }
        
        if board[i][col] == byte('B') {
            break
        }
    }
    
    // east
    for j := col+1; j < 8; j++ {
        if board[row][j] == byte('p') {
            count++
            break
        }
        
        if board[row][j] == byte('B') {
            break
        }
    }
    
    // west
    for j := col-1; j >= 0; j-- {
        if board[row][j] == byte('p') {
            count++
            break
        }
        
        if board[row][j] == byte('B') {
            break
        }
    }
    
    return count
}
```