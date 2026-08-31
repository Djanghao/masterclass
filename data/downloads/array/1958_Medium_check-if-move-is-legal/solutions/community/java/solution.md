# [Java/Python 3]Check 8 directions.

**Author:** rock
**Votes:** 14
**Link:** [https://leetcode.com/problems/check-if-move-is-legal/solutions/1389273/](https://leetcode.com/problems/check-if-move-is-legal/solutions/1389273/)

---

**Q & A**

Q1: Why `size` is initialized to `2`?
A1: We actually check the cells starting from the `2nd` one, and the first one is the cell we are allowed to change color. 

**End of Q & A**

----

Starting from the given cell, check if any of the 8 directions has a good line.

For each direction:
Check if any of the neighbors is empty, if yes, break; otherwise, keep checking till encounter a cell of same color, return true if size no less than `3`, otherwise break.

```java
    private static final int[][] d = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}, {1, 1}, {-1, -1}, {1, -1}, {-1, 1}};
    public boolean checkMove(char[][] board, int r, int c, char color) {
        for (int k = 0; k < 8; ++k) {
            for (int i = r + d[k][0], j = c + d[k][1], size = 2; 0 <= i && i < 8 && 0 <= j && j < 8; i += d[k][0], j += d[k][1], ++size) {
                if (board[i][j] == '.' || size < 3 && board[i][j] == color) {
                    break;
                } 
                if (board[i][j] == color) {
                    return true;
                }
            }
        }
        return false;
    }
```
```python
    def checkMove(self, board: List[List[str]], r: int, c: int, color: str) -> bool:
        for dr, dc in (0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (-1, -1), (1, -1), (-1, 1):
            i, j = r + dr, c + dc
            size = 2
            while 8 > i >= 0 <= j < 8:
                if board[i][j] == '.'or size < 3 and board[i][j] == color:
                    break 
                if board[i][j] == color:
                    return True    
                i += dr
                j += dc
                size += 1
        return False
```