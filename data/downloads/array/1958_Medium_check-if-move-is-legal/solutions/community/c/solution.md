# Trace in 8 directions

**Author:** votrubac
**Votes:** 28
**Link:** [https://leetcode.com/problems/check-if-move-is-legal/solutions/1390122/](https://leetcode.com/problems/check-if-move-is-legal/solutions/1390122/)

---

Easy problem but the implementation could be a bit tricky to get right.

Starting from the free cell - our move, we trace in all 8 directions:
1. We break if we hit a free cell or a wall.
2. We keep going while the cell color is the opposite of `color`, incrementing `x`.
3. If the cell color is `color`:
	- We return true if `x > 1`. It means that we have at least one cell of the opposite color in between.
	- We break otherwise. We have two cells with the same color next to each other.

**C++**
```cpp
bool checkMove(vector<vector<char>>& board, int rMove, int cMove, char color) {
    int dir[10] = {0, 1, 0, -1, 0, 1, 1, -1, -1, 1};
    for (int d = 0; d < 9; ++d)
        for (int x = 1; ; ++x) {
            int i = rMove + x * dir[d], j = cMove + x * dir[d + 1];
            if (i < 0 || j < 0 || i >= 8 || j >= 8 || board[i][j] == '.')
                break;
            if (board[i][j] == color) {
                if (x > 1)
                    return true;
                break;
            }
        }
    return false;
}
```