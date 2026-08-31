# Kotlin: DFS

**Author:** artemasoyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/surrounded-regions/solutions/2884951/](https://leetcode.com/problems/surrounded-regions/solutions/2884951/)

---

```
class Solution {
    fun solve(board: Array<CharArray>): Unit {
        fun dfs(r: Int, c: Int) {
            if (r !in board.indices || c !in board[0].indices || board[r][c] != 'O') return
            board[r][c] = 'T'
            dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1)
        }
        traverse(board) { r, c -> 
            if (r in listOf(0, board.lastIndex) || c in listOf(0, board[0].lastIndex)) dfs(r,c)
        }
        traverse(board) { r, c -> 
            if (board[r][c] == 'O') board[r][c] = 'X'
            if (board[r][c] == 'T') board[r][c] = 'O'
        }
    }

    fun traverse(board: Array<CharArray>, code: (Int, Int) -> Unit) {
        for (r in 0 until board.size) {
            for (c in 0 until board[0].size) {
                code(r, c)    
            }
        }
    }
}
```