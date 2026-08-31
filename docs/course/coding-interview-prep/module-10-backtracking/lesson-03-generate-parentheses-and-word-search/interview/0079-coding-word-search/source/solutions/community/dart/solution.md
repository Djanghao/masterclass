# Using backtracking approach with memoization.

**Author:** devesht709
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-search/solutions/4967169/](https://leetcode.com/problems/word-search/solutions/4967169/)

---

# Introduction

###### We maintain a visited matrix to keep track of visited cells to avoid revisiting them. By using backtracking with memoization, we prevent redundant computations and thus improve the time complexity. The overall time complexity of this approach remains similar to the DFS approach, but it might be faster in practice due to avoiding unnecessary computations.

# Time Complexity: O(m * n * 4^L)
# Code
```javascript []
var exist = function(board, word) {
    const visited = Array.from(Array(board.length), () => Array(board[0].length).fill(false));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack(board, word, i, j, 0, visited))
                return true;
        }
    }
    return false;
};

function backtrack(board, word, i, j, k, visited) {
    if (k === word.length)
        return true;
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] !== word.charAt(k))
        return false;

    visited[i][j] = true;
    if (backtrack(board, word, i + 1, j, k + 1, visited) ||
        backtrack(board, word, i - 1, j, k + 1, visited) ||
        backtrack(board, word, i, j + 1, k + 1, visited) ||
        backtrack(board, word, i, j - 1, k + 1, visited))
        return true;

    visited[i][j] = false;
    return false;
}

```
```python []
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        def backtrack(board, word, i, j, k, visited):
            if k == len(word):
                return True
            if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or visited[i][j] or board[i][j] != word[k]:
                return False
            
            visited[i][j] = True
            if backtrack(board, word, i + 1, j, k + 1, visited) \\
                    or backtrack(board, word, i - 1, j, k + 1, visited) \\
                    or backtrack(board, word, i, j + 1, k + 1, visited) \\
                    or backtrack(board, word, i, j - 1, k + 1, visited):
                return True

            visited[i][j] = False
            return False

        visited = [[False] * len(board[0]) for _ in range(len(board))]
        for i in range(len(board)):
            for j in range(len(board[0])):
                if backtrack(board, word, i, j, 0, visited):
                    return True
        return False


```
```java []
public class WordSearch {
    public boolean exist(char[][] board, String word) {
        boolean[][] visited = new boolean[board.length][board[0].length];
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (backtrack(board, word, i, j, 0, visited))
                    return true;
            }
        }
        return false;
    }

    private boolean backtrack(char[][] board, String word, int i, int j, int k, boolean[][] visited) {
        if (k == word.length())
            return true;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] != word.charAt(k))
            return false;

        visited[i][j] = true;
        if (backtrack(board, word, i + 1, j, k + 1, visited) ||
                backtrack(board, word, i - 1, j, k + 1, visited) ||
                backtrack(board, word, i, j + 1, k + 1, visited) ||
                backtrack(board, word, i, j - 1, k + 1, visited))
            return true;

        visited[i][j] = false;
        return false;
    }
}

```
```CPP []
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        vector<vector<bool>> visited(board.size(), vector<bool>(board[0].size(), false));
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if (backtrack(board, word, i, j, 0, visited))
                    return true;
            }
        }
        return false;
    }

private:
    bool backtrack(vector<vector<char>>& board, const string& word, int i, int j, int k, vector<vector<bool>>& visited) {
        if (k == word.length())
            return true;
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || visited[i][j] || board[i][j] != word[k])
            return false;

        visited[i][j] = true;
        if (backtrack(board, word, i + 1, j, k + 1, visited) ||
                backtrack(board, word, i - 1, j, k + 1, visited) ||
                backtrack(board, word, i, j + 1, k + 1, visited) ||
                backtrack(board, word, i, j - 1, k + 1, visited))
            return true;

        visited[i][j] = false;
        return false;
    }
};

```
``` Dart []
bool exist(List<List<String>> board, String word) {
  List<List<bool>> visited = List.generate(board.length, (index) => List.filled(board[0].length, false));
  for (int i = 0; i < board.length; i++) {
    for (int j = 0; j < board[0].length; j++) {
      if (backtrack(board, word, i, j, 0, visited))
        return true;
    }
  }
  return false;
}

bool backtrack(List<List<String>> board, String word, int i, int j, int k, List<List<bool>> visited) {
  if (k == word.length)
    return true;
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] != word[k])
    return false;

  visited[i][j] = true;
  if (backtrack(board, word, i + 1, j, k + 1, visited) ||
      backtrack(board, word, i - 1, j, k + 1, visited) ||
      backtrack(board, word, i, j + 1, k + 1, visited) ||
      backtrack(board, word, i, j - 1, k + 1, visited))
    return true;

  visited[i][j] = false;
  return false;
}


