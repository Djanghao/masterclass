# Count, Transpose and Reverse

**Author:** votrubac
**Votes:** 34
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1486511/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1486511/)

---

We use a separate grid (`h`, initially set to `-1`) to count matching letters horizontally:
- Detect the potential start of the word (`j == 0 || board[i][j - 1] == '#'`).
	- Set initial count `h[i][j]` to `0`.
- Increment count if the next space is empty or matches the corresponding letter in the string.
	- `h[i][j] = h[i][j - 1] + 1`.
- Check if the is nothing after the word (`j == n - 1 || board[i][j + 1] == '#'`).
	- Do not set count otherwise to stop matching the word.

Note that we need to repeat the same procedure 3 more times, transposing the board and reversing the string.
 
**C++**
```cpp
bool check(vector<vector<char>>& board, string word) {
    int m = board.size(), n = board[0].size();
    vector<vector<int>> h(m, vector<int>(n, -1));
    for (int i = 0; i < m; ++i)
        for (int j = 0; j < n; ++j)
            if (j == 0 || board[i][j - 1] == '#' || (j > 0 && h[i][j - 1] != -1)) {
                int pos = j == 0 ? 0 : h[i][j - 1] + 1;
                if (board[i][j] == ' ' || board[i][j] == word[pos]) {
                    if (pos == word.size() - 1) {
                        if (j == n - 1 || board[i][j + 1] == '#')
                            return true;
                    }
                    else
                       h[i][j] = pos; 
                }
            }
    return false;
}
bool placeWordInCrossword(vector<vector<char>>& board, string word) {
    int m = board.size(), n = board[0].size();
    vector<vector<char>> transposed(n, vector<char>(m));
    for (int i = 0; i < m; ++i)
        for (int j = 0; j < n; ++j)
            transposed[j][i] = board[i][j];
    return check(board, word) || check(board, string(rbegin(word), rend(word))) ||
        check(transposed, word) || check(transposed, string(rbegin(word), rend(word))) ;
}
```