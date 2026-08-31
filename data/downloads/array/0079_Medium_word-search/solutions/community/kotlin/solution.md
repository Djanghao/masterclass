# [C++, Java, Kotlin] Simple Explained Solution ✅

**Author:** Z3ROsum
**Votes:** 7
**Link:** [https://leetcode.com/problems/word-search/solutions/4965137/](https://leetcode.com/problems/word-search/solutions/4965137/)

---

# Approach
So, the idea is to go through all the positions, and if a position in the matrix contains the first character of the word, I start a depth-first search starting from that position.
At each step, I check if I can go left, right, up, or down (if those positions\u2019 characters match the next character in the word) and continue. If I get to the end of the word, then it exists.

# Complexity
- Time complexity:
$$O((mn)^2)$$

- Space complexity:
$$O(2mn)$$

# Code
```kotlin []
class Solution {
    var dirs = listOf(1 to 0, -1 to 0, 0 to 1, 0 to -1)
    var board = arrayOf<CharArray>()
    var word = ""
    fun exist(board: Array<CharArray>, word: String): Boolean {
        this.board = board
        this.word = word
        
        var visited = Array(board.size) { BooleanArray(board[0].size) }
        for (i in board.indices)
            for (j in board[0].indices)
                if (board[i][j] == word[0] && check(i, j, 0, visited))
                    return true
        return false
    }
    fun check(i: Int, j: Int, strIdx: Int, visited: Array<BooleanArray>): Boolean {
        if (strIdx == word.length - 1) return true
        visited[i][j] = true
        var next = word[strIdx + 1]
        for ((x, y) in dirs) {
            if (i + x !in board.indices || j + y !in board[0].indices) continue
            if (board[i + x][j + y] != next || visited[i + x][j + y]) continue
            
            if (check(i + x, j + y, strIdx + 1, visited)) return true
        }
        visited[i][j] = false
        return false
    }
}
```
```Java []
public class Solution {
    private int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    private char[][] board;
    private String word;

    public boolean exist(char[][] board, String word) {
        this.board = board;
        this.word = word;

        boolean[][] visited = new boolean[board.length][board[0].length];
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == word.charAt(0) && check(i, j, 0, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean check(int i, int j, int strIdx, boolean[][] visited) {
        if (strIdx == word.length() - 1) {
            return true;
        }
        visited[i][j] = true;
        char next = word.charAt(strIdx + 1);
        for (int[] dir : dirs) {
            int x = i + dir[0];
            int y = j + dir[1];
            if (x >= 0 && x < board.length && y >= 0 && y < board[0].length
                    && board[x][y] == next && !visited[x][y]) {
                if (check(x, y, strIdx + 1, visited)) {
                    return true;
                }
            }
        }
        visited[i][j] = false;
        return false;
    }
}

```
```C++ []
class Solution {
private:
    vector<pair<int, int>> dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    vector<vector<char>> board;
    string word;

public:
    bool exist(vector<vector<char>>& board, string word) {
        this->board = board;
        this->word = word;

        vector<vector<bool>> visited(board.size(), vector<bool>(board[0].size(), false));
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if (board[i][j] == word[0] && check(i, j, 0, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

private:
    bool check(int i, int j, int strIdx, vector<vector<bool>>& visited) {
        if (strIdx == word.length() - 1) {
            return true;
        }
        visited[i][j] = true;
        char next = word[strIdx + 1];
        for (const auto& dir : dirs) {
            int x = i + dir.first;
            int y = j + dir.second;
            if (x >= 0 && x < board.size() && y >= 0 && y < board[0].size()
                    && board[x][y] == next && !visited[x][y]) {
                if (check(x, y, strIdx + 1, visited)) {
                    return true;
                }
            }
        }
        visited[i][j] = false;
        return false;
    }
};
```
