# Swift Solution -- Clean & Easy Understand

**Author:** qilio
**Votes:** 19
**Link:** [https://leetcode.com/problems/word-search/solutions/346841/](https://leetcode.com/problems/word-search/solutions/346841/)

---

```
class Solution {
    func exist(_ board: [[Character]], _ word: String) -> Bool {
        guard board.count != 0, board[0].count != 0, word.count != 0 else { return false }
        
        let word = Array(word)
        let rows = board.count, cols = board[0].count
        var isVisited = Array(repeating: Array(repeating: false, count: cols), count: rows)
        
        for row in 0..<rows {
            for col in 0..<cols where board[row][col] == word.first {
                if check(board, word, row, col, 0, &isVisited) {
                    return true
                }
            }
        }
        return false
    }
    
    func check(_ board: [[Character]], _ word: [Character], _ row: Int, _ col: Int, _ index: Int, _ isVisited: inout [[Bool]]) -> Bool {
        // check if reached the end
        guard index < word.count else { return true }
        
        // check if it match requirements
        guard   row >= 0, 
                row < board.count, 
                col >= 0, 
                col < board[0].count,
                !isVisited[row][col],
                board[row][col] == word[index]
                else { return false }
        
        // once we found matched case, we mark isVisited as true
        isVisited[row][col] = true
        
        // try each way, to find if there any valid path
        let hasValidPath =  check(board, word, row-1, col, index+1, &isVisited) ||  // go up
                            check(board, word, row+1, col, index+1, &isVisited) ||  // go down
                            check(board, word, row, col-1, index+1, &isVisited) ||  // go left
                            check(board, word, row, col+1, index+1, &isVisited)     // go right
        
        // reset isVisited after each DFS search, for re use
        isVisited[row][col] = false
        
        return hasValidPath
    }
}
```