# Python | O(NM) one-liner Solution without modifying board

**Author:** ahmadheshamzaki
**Votes:** 28
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/2523176/](https://leetcode.com/problems/battleships-in-a-board/solutions/2523176/)

---

- Full solution:
```python
class Solution:
    def countBattleships(self, board: List[List[str]]) -> int:
        count = 0
        
        for i, row in enumerate(board):
            for j, cell in enumerate(row):
                if cell == "X":
                    if (i == 0 or board[i - 1][j] == ".") and\\
                       (j == 0 or board[i][j - 1] == "."):
                            count += 1
                            
        return count
```

- One-liner version:
```python
class Solution:
    def countBattleships(self, board: List[List[str]]) -> int:
        return sum(1 for i, row in enumerate(board) for j, cell in enumerate(row) if cell == "X" and (i == 0 or board[i - 1][j] == ".") and (j == 0 or board[i][j - 1] == "."))
```

**Time compexity:** `O(n * m)`
**Space complexity:**`O(1)`