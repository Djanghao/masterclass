# Go beats 100%/100%, O(MN) time, O(1) space, without modifying array

**Author:** virtyaluk
**Votes:** 3
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/582934/](https://leetcode.com/problems/battleships-in-a-board/solutions/582934/)

---

```go
func countBattleships(board [][]byte) int {
    ans := 0
    
    for i := 0; i < len(board); i++ {
        for j := 0; j < len(board[i]); j++ {
            if board[i][j] == '.' {
                continue
            }
            
            if i > 0 && board[i - 1][j] == 'X' {
                continue
            }
            
            if j > 0 && board[i][j - 1] == 'X' {
                continue
            }
            
            ans++
        }
    }
    
    return ans
}
```