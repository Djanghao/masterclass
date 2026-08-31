# Easy Solution | Beats 92.66% 🔥🔥 | Backtracking | Java, C++, Python, JavaScript, Kotlin, PHP

**Author:** onefineday01
**Votes:** 3
**Link:** [https://leetcode.com/problems/word-search/solutions/4898839/](https://leetcode.com/problems/word-search/solutions/4898839/)

---

# Code

```Java []
class Solution {
    public boolean exist(char[][] board, String word) {
        char[] s = word.toCharArray();
        int n = board.length, m = board[0].length, l = s.length;
        boolean[][] dp = new boolean[n][m];
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(board[i][j] == s[0]) {
                    if(helper(i, j, 0, s, board, dp, n, m, l)) return true;
                }
            }
        }
        return false;
    }
    private boolean helper(int i, int j, int pos, char[] s, char[][] board, boolean[][] dp, int n, int m, int l) {
        if(i >= n || i < 0 || j >= m || j < 0 || dp[i][j] || pos >= l || board[i][j] != s[pos]) return false;
        if(pos == l-1) return true;
        dp[i][j] = true;
        if( helper(i-1, j, pos+1, s, board, dp, n, m, l)
            || helper(i, j+1, pos+1, s, board, dp, n, m, l)
            || helper(i+1, j, pos+1, s, board, dp, n, m, l)
            || helper(i, j-1, pos+1, s, board, dp, n, m, l)) 
                return true;
        dp[i][j] = false;;
        return false;
    }
}
```
```C++ []
class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        vector<vector<bool>> dp(board.size(), vector<bool>(board[0].size(), false));
        for (int i = 0; i < board.size(); ++i) {
            for (int j = 0; j < board[0].size(); ++j) {
                if (board[i][j] == word[0]) {
                    if (helper(i, j, 0, word, board, dp)) return true;
                }
            }
        }
        return false;
    }
    
private:
    bool helper(int i, int j, int pos, string& s, vector<vector<char>>& board, vector<vector<bool>>& dp) {
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || dp[i][j] || pos >= s.length() || board[i][j] != s[pos]) return false;
        if (pos == s.length() - 1) return true;
        dp[i][j] = true;
        if (helper(i - 1, j, pos + 1, s, board, dp) || helper(i, j + 1, pos + 1, s, board, dp) || helper(i + 1, j, pos + 1, s, board, dp) || helper(i, j - 1, pos + 1, s, board, dp)) 
            return true;
        dp[i][j] = false;
        return false;
    }
};

```
```Python []
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        dp = [[False for _ in range(len(board[0]))] for _ in range(len(board))]
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == word[0]:
                    if self.helper(i, j, 0, word, board, dp):
                        return True
        return False
    
    def helper(self, i, j, pos, s, board, dp):
        if i < 0 or i >= len(board) or j < 0 or j >= len(board[0]) or dp[i][j] or pos >= len(s) or board[i][j] != s[pos]:
            return False
        if pos == len(s) - 1:
            return True
        dp[i][j] = True
        if (self.helper(i - 1, j, pos + 1, s, board, dp) or
            self.helper(i, j + 1, pos + 1, s, board, dp) or
            self.helper(i + 1, j, pos + 1, s, board, dp) or
            self.helper(i, j - 1, pos + 1, s, board, dp)):
            return True
        dp[i][j] = False
        return False

```
```Javascript []
var exist = function(board, word) {
    const dp = Array.from(Array(board.length), () => Array(board[0].length).fill(false));
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (helper(i, j, 0, word, board, dp)) return true;
            }
        }
    }
    return false;
};

function helper(i, j, pos, s, board, dp) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || dp[i][j] || pos >= s.length || board[i][j] !== s[pos]) return false;
    if (pos === s.length - 1) return true;
    dp[i][j] = true;
    if (helper(i - 1, j, pos + 1, s, board, dp) ||
        helper(i, j + 1, pos + 1, s, board, dp) ||
        helper(i + 1, j, pos + 1, s, board, dp) ||
        helper(i, j - 1, pos + 1, s, board, dp)) return true;
    dp[i][j] = false;
    return false;
}
```
```Kotlin []
class Solution {
    fun exist(board: Array<CharArray>, word: String): Boolean {
        val dp = Array(board.size) { BooleanArray(board[0].size) { false } }
        for (i in board.indices) {
            for (j in board[0].indices) {
                if (board[i][j] == word[0]) {
                    if (helper(i, j, 0, word, board, dp)) return true
                }
            }
        }
        return false
    }
    
    private fun helper(i: Int, j: Int, pos: Int, s: String, board: Array<CharArray>, dp: Array<BooleanArray>): Boolean {
        if (i < 0 || i >= board.size || j < 0 || j >= board[0].size || dp[i][j] || pos >= s.length || board[i][j] != s[pos]) return false
        if (pos == s.length - 1) return true
        dp[i][j] = true
        if (helper(i - 1, j, pos + 1, s, board, dp) ||
            helper(i, j + 1, pos + 1, s, board, dp) ||
            helper(i + 1, j, pos + 1, s, board, dp) ||
            helper(i, j - 1, pos + 1, s, board, dp)) return true
        dp[i][j] = false
        return false
    }
}

```
```Php []
class Solution {
    function exist($board, $word) {
        $dp = array_fill(0, count($board), array_fill(0, count($board[0]), false));
        for ($i = 0; $i < count($board); $i++) {
            for ($j = 0; $j < count($board[0]); $j++) {
                if ($board[$i][$j] === $word[0]) {
                    if ($this->helper($i, $j, 0, $word, $board, $dp)) return true;
                }
            }
        }
        return false;
    }
    
    function helper($i, $j, $pos, $s, $board, &$dp) {
        if ($i < 0 || $i >= count($board) || $j < 0 || $j >= count($board[0]) || $dp[$i][$j] || $pos >= strlen($s) || $board[$i][$j] !== $s[$pos]) return false;
        if ($pos == strlen($s) - 1) return true;
        $dp[$i][$j] = true;
        if ($this->helper($i - 1, $j, $pos + 1, $s, $board, $dp) ||
            $this->helper($i, $j + 1, $pos + 1, $s, $board, $dp) ||
            $this->helper($i + 1, $j, $pos + 1, $s, $board, $dp) ||
            $this->helper($i, $j - 1, $pos + 1, $s, $board, $dp)) return true;
        $dp[$i][$j] = false;
        return false;
    }
}


```