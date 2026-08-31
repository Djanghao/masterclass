# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/surrounded-regions/solutions/1935366/](https://leetcode.com/problems/surrounded-regions/solutions/1935366/)

---

```
class Solution {
    func solve(_ board: inout [[Character]]) {
        let row = board.count
        let col = board[0].count
        var map = Array(repeating: Array(repeating: 0, count: col) , count: row)
        //  1...n
        var index = 1
        var indexs: [Int] = []
        
        for i in 0..<row {
            for j in 0..<col where board[i][j] == "O" && map[i][j] < 1 {
                markRegion(i, j, board, &map, index, &indexs)
                index += 1
            } 
        }
        
        for i in 0..<row {
            for j in 0..<col where map[i][j] > 0 && indexs.contains(map[i][j]) == false { board[i][j] = "X" }
        }
    }
    

    func markRegion(_ i: Int, _ j: Int, _ board: [[Character]], _ map: inout [[Int]], _ index: Int, _ indexs: inout [Int]) {
        let row = board.count
        let col = board[0].count
        
        if i >= 0 && i < row && j >= 0 && j < col {
            if board[i][j] == "O" && map[i][j] == 0 {
                map[i][j] = index
                markRegion(i + 1, j, board, &map, index, &indexs)
                markRegion(i - 1, j, board, &map, index, &indexs)
                markRegion(i, j - 1, board, &map, index, &indexs)
                markRegion(i, j + 1, board, &map, index, &indexs) 
            }
            
        } else {
            indexs.append(index)
        }
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.