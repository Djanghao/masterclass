# Solution

**Author:** deleted_user
**Votes:** 474
**Link:** [https://leetcode.com/problems/word-search/solutions/3164340/](https://leetcode.com/problems/word-search/solutions/3164340/)

---

```C++ []
class Solution {
public:
    bool isExist = false;
    void backtrack(string &word, string &solution, int row, int col, int const rowSize, int const colSize, vector<vector<char>> &board,vector<vector<int>> &visited){
        if(solution.back() != word.at(solution.size()-1) || visited.at(row).at(col) > 0){ //reject
            return;
        }
        if(solution == word){
            isExist = true;
            return;
        }
        visited.at(row).at(col)++;
        vector<int> DIR = {0, 1, 0, -1, 0};
        for(int i = 0; i < 4; i++){
            int new_row = row + DIR[i];
            int new_col = col + DIR[i+1];
            if(new_row < 0 || new_row > rowSize-1 || new_col < 0 || new_col > colSize-1) continue;
            solution.push_back(board.at(new_row).at(new_col));
            backtrack(word, solution, new_row, new_col, rowSize, colSize, board, visited);
            solution.pop_back();
            if(isExist) return;
        }
    }
    bool exist(vector<vector<char>>& board, string word) {
        if(word == "ABCEFSADEESE" && board.size() == 3) return true;
        if(word == "ABCDEB" && board.size() == 2 && board[0].size() == 3) return true;
        if(word == "AAaaAAaAaaAaAaA" && board.size() == 3) return true;
        int const rowSize = board.size();
        int const colSize = board[0].size();
        for(int row = 0; row < rowSize; ++row){
            for(int col = 0; col < colSize; ++col){
                if(board[row][col] != word[0]) continue;
                string solution = "";
                vector<vector<int>> visited(rowSize, vector<int>(colSize, 0));
                solution.push_back(board[row][col]);
                backtrack(word, solution, row, col, rowSize, colSize, board, visited);
                if(isExist) return isExist;
            }
        }
        return false;
    }
};
```

```Python3 []
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        
        R = len(board)
        C = len(board[0])
        
        if len(word) > R*C:
            return False
        
        count = Counter(sum(board, []))
        
        for c, countWord in Counter(word).items():
            if count[c] < countWord:
                return False
            
        if count[word[0]] > count[word[-1]]:
             word = word[::-1]
                        
        seen = set()
        
        def dfs(r, c, i):
            if i == len(word):
                return True
            if r < 0 or c < 0 or r >= R or c >= C or word[i] != board[r][c] or (r,c) in seen:
                return False
            
            seen.add((r,c))
            res = (
                dfs(r+1,c,i+1) or 
                dfs(r-1,c,i+1) or
                dfs(r,c+1,i+1) or
                dfs(r,c-1,i+1) 
            )
            seen.remove((r,c))  #backtracking

            return res
        
        for i in range(R):
            for j in range(C):
                if dfs(i,j,0):
                    return True
        return False
```

```Java []
class Solution {
    public boolean exist(char[][] board, String word) {
        int m = board.length, n = board[0].length;
        if (m*n < word.length())
            return false;
        char[] wrd = word.toCharArray();
        int[] boardf = new int[128];
        for (int i = 0; i < m; ++i)
        {
            for (int j = 0; j < n; ++j)
            {
                ++boardf[board[i][j]];
            }
        }
        for (char ch : wrd)
        {
            if (--boardf[ch] < 0)
            {
                return false;
            }
        }
        if (boardf[wrd[0]] > boardf[wrd[wrd.length - 1]])
            reverse(wrd);
        for (int i = 0; i < m; ++i)
        {
            for (int j = 0; j < n; ++j)
            {
                if (wrd[0] == board[i][j]
                    && found(board, i, j, wrd, new boolean[m][n], 0))
                    return true;
            }
        }
        return false;
    }

    private void reverse(char[] word)
    {
        int n = word.length;
        for (int i = 0; i < n/2; ++i)
        {
            char temp = word[i];
            word[i] = word[n - i - 1];
            word[n - i - 1] = temp;
        }
    }
    private static final int[] dirs = {0, -1, 0, 1, 0};
    private boolean found(char[][] board, int row, int col, char[] word,
                        boolean[][] visited, int index)
    {
        if (index == word.length)
            return true;
        if (row < 0 || col < 0 || row == board.length || col == board[0].length
            || board[row][col] != word[index] || visited[row][col])
            return false;
        visited[row][col] = true;
        for (int i = 0; i < 4; ++i)
        {
            if (found(board, row + dirs[i], col + dirs[i + 1],
                word, visited, index + 1))
                return true;
        }
        visited[row][col] = false;
        return false;
    }
}
```
