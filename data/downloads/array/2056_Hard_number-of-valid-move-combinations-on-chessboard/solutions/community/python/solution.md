# [Python] constant time check for each piece

**Author:** chuan-chih
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/1549099/](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/1549099/)

---

With the constraints of 4 pieces and 1 queen among them at most, the answer is at most 15 ** 3 * 28 = 94500 (3 rooks + 1 queen near the center). Using a set for each square to check for the presence of a piece at time t and maintain the desired state with constant time O(length of the chess board).

```
class Solution:
    def countCombinations(self, pieces: List[str], positions: List[List[int]]) -> int:
        board = [[set() for _ in range(8)] for _ in range(8)]
        n = len(pieces)
        for pos in positions:
            pos[0] -= 1
            pos[1] -= 1
        all_time = set(range(1, 8))
        def recur(i):
            if i == n:
                return 1
            ans = 0
            line = [(0, 1), (1, 0), (0, -1), (-1, 0)]
            diag = [(1, 1), (1, -1), (-1, 1), (-1, -1)]
            r, c = positions[i]
            if not board[r][c] & all_time:
                board[r][c] |= all_time
                ans += recur(i + 1)
                board[r][c].clear()
            directions = []
            if pieces[i] in ("queen", "rook"):
                directions.extend(line)
            if pieces[i] in ("queen", "bishop"):
                directions.extend(diag)                
            for dr, dc in directions:
                x, y = r + dr, c + dc
                count = 1
                while 0 <= x < 8 and 0 <= y < 8 and count not in board[x][y]:
                    board[x][y].add(count)
                    count += 1
                    rest = set(range(count, 8))
                    if not board[x][y] & rest:
                        board[x][y] |= rest
                        ans += recur(i + 1)
                        board[x][y] -= rest
                    x += dr
                    y += dc
                count -= 1
                x -= dr
                y -= dc
                while count:
                    board[x][y].remove(count)
                    count -= 1
                    x -= dr
                    y -= dc
            return ans
        return recur(0)
```

The bit mask version is even faster as it completely hides the constant factor of 8, but both easily get AC (530 ms vs. 236 ms).
```
class Solution:
    def countCombinations(self, pieces: List[str], positions: List[List[int]]) -> int:
        board = [[0] * 8 for _ in range(8)]
        n = len(pieces)
        for pos in positions:
            pos[0] -= 1
            pos[1] -= 1
        all_time = 2 ** 7 - 1
        def recur(i):
            if i == n:
                return 1
            ans = 0
            line = [(0, 1), (1, 0), (0, -1), (-1, 0)]
            diag = [(1, 1), (1, -1), (-1, 1), (-1, -1)]
            r, c = positions[i]
            if not board[r][c]:
                board[r][c] |= all_time
                ans += recur(i + 1)
                board[r][c] -= all_time
            directions = []
            if pieces[i] in ("queen", "rook"):
                directions.extend(line)
            if pieces[i] in ("queen", "bishop"):
                directions.extend(diag)                
            for dr, dc in directions:
                x, y = r + dr, c + dc
                bit = 1
                rest = all_time
                while 0 <= x < 8 and 0 <= y < 8 and not bit & board[x][y]:
                    board[x][y] |= bit
                    rest -= bit
                    bit <<= 1
                    if not board[x][y] & rest:
                        board[x][y] |= rest
                        ans += recur(i + 1)
                        board[x][y] -= rest
                    x += dr
                    y += dc
                bit >>= 1
                x -= dr
                y -= dc
                while bit:
                    board[x][y] -= bit
                    bit >>= 1
                    x -= dr
                    y -= dc
            return ans
        return recur(0)
```