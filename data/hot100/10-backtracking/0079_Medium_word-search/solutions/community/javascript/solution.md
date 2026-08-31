# ✅96.45%🔥Easy Solution🔥with explanation🔥

**Author:** MrAke
**Votes:** 427
**Link:** [https://leetcode.com/problems/word-search/solutions/4965052/](https://leetcode.com/problems/word-search/solutions/4965052/)

---

# Intuition
#### The problem can be solved by traversing the grid and performing a depth-first search (DFS) for each possible starting position. At each cell, we check if the current character matches the corresponding character of the word. If it does, we explore all four directions (up, down, left, right) recursively until we find the complete word or exhaust all possibilities.
---

# Approach
#### 1. Implement a recursive function `backtrack` that takes the current position `(i, j)` in the grid and the current index `k` of the word.
#### 2.Base cases:
 - ##### If `k` equals the length of the word, return `True`, indicating that the word has been found.
 - ##### If the current position `(i, j)` is out of the grid boundaries or the character at `(i, j)` does not match the character at index `k` of the word, return `False`.
#### 3.Mark the current cell as visited by changing its value or marking it as empty.
#### 4. Recursively explore all four directions (up, down, left, right) by calling `backtrack` with updated positions `(i+1, j), (i-1, j), (i, j+1), and (i, j-1)`.
#### 5.If any recursive call returns `True`, indicating that the word has been found, return `True`.
#### 6. If none of the recursive calls returns `True`, reset the current cell to its original value and return `False`.
#### 7. Iterate through all cells in the grid and call the `backtrack` function for each cell. If any call returns `True`, return `True`, indicating that the word exists in the grid. Otherwise, return `False`.

---

# Complexity
- ## Time complexity:
#### $$O(m * n * 4^l)$$, where m and n are the dimensions of the grid and l is the length of the word. The $$4^l$$ factor represents the maximum number of recursive calls we may have to make for each starting cell.

- ## Space complexity:
#### $$O(l)$$, where l is the length of the word. The space complexity is primarily due to the recursive stack depth during the DFS traversal.

---
# Code

```python []
class Solution:
    def exist(self, board, word):
        def backtrack(i, j, k):
            if k == len(word):
                return True
            if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or board[i][j] != word[k]:
                return False
            
            temp = board[i][j]
            board[i][j] = ''
            
            if backtrack(i+1, j, k+1) or backtrack(i-1, j, k+1) or backtrack(i, j+1, k+1) or backtrack(i, j-1, k+1):
                return True
            
            board[i][j] = temp
            return False
        
        for i in range(len(board)):
            for j in range(len(board[0])):
                if backtrack(i, j, 0):
                    return True
        return False
```
```C++ []
class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size();
        int n = board[0].size();
        
        function<bool(int, int, int)> backtrack = [&](int i, int j, int k) {
            if (k == word.length()) {
                return true;
            }
            if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[k]) {
                return false;
            }
            
            char temp = board[i][j];
            board[i][j] = '\\0';
            
            if (backtrack(i + 1, j, k + 1) || backtrack(i - 1, j, k + 1) || 
                backtrack(i, j + 1, k + 1) || backtrack(i, j - 1, k + 1)) {
                return true;
            }
            
            board[i][j] = temp; 
            return false;
        };
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (backtrack(i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
};

```
```java []
public class Solution {
    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;

        boolean[][] visited = new boolean[m][n];
        boolean result = false;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == word.charAt(0)) {
                    result = backtrack(board, word, visited, i, j, 0);
                    if (result) return true;
                }
            }
        }
        
        return false;
    }
    
    private boolean backtrack(char[][] board, String word, boolean[][] visited, int i, int j, int index) {
        if (index == word.length()) {
            return true;
        }
        
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] != word.charAt(index)) {
            return false;
        }
        
        visited[i][j] = true;
        
        if (backtrack(board, word, visited, i + 1, j, index + 1) ||
            backtrack(board, word, visited, i - 1, j, index + 1) ||
            backtrack(board, word, visited, i, j + 1, index + 1) ||
            backtrack(board, word, visited, i, j - 1, index + 1)) {
            return true;
        }
        
        visited[i][j] = false;
        return false;
    }
}

```
```javascript []
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    const backtrack = (i, j, k) => {
        if (k === word.length) {
            return true;
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word.charAt(k)) {
            return false;
        }
        
        const temp = board[i][j];
        board[i][j] = '\\0'; 
        
        const result = backtrack(i + 1, j, k + 1) || 
                       backtrack(i - 1, j, k + 1) || 
                       backtrack(i, j + 1, k + 1) || 
                       backtrack(i, j - 1, k + 1);
        
        board[i][j] = temp; 
        return result;
    };
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

```
```C# []
public class Solution {
    public bool Exist(char[][] board, string word) {
        int m = board.Length;
        int n = board[0].Length;
        
        Func<int, int, int, bool> backtrack = null;
        backtrack = (i, j, k) => {
            if (k == word.Length) {
                return true;
            }
            if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[k]) {
                return false;
            }
            
            char temp = board[i][j];
            board[i][j] = '\\0';
            bool result = backtrack(i + 1, j, k + 1) || 
                          backtrack(i - 1, j, k + 1) || 
                          backtrack(i, j + 1, k + 1) || 
                          backtrack(i, j - 1, k + 1);
            
            board[i][j] = temp; 
            return result;
        };
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (backtrack(i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}

```
---


![Screenshot 2023-08-20 065922.png](./images/0.png)



