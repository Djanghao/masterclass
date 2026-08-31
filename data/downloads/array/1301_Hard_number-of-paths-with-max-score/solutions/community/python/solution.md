# Python 3 solution, faster than 70% of solutions - 2d dynamic programming

**Author:** mhviraf
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-paths-with-max-score/solutions/1250536/](https://leetcode.com/problems/number-of-paths-with-max-score/solutions/1250536/)

---

```
class Solution:
    def pathsWithMaxScore(self, board: List[str]) -> List[int]:
        n = len(board)-1
        self.board = [[int(_) if _.isdigit() else _ for _ in x] for x in board]
        self.board[n][n] = 0
        self.board[0][0] = 0
        self.scores = [[0 for _ in range(n+2)] for x in range(n+2)]
        self.counts = [[0 for _ in range(n+2)] for x in range(n+2)]
        self.counts[n][n] = 1
        for i in range(n, -1, -1):
            for j in range(n, -1, -1):
                if self.board[i][j] == 'X':
                    continue
                highest_score = max(self.scores[i+1][j],
                            self.scores[i+1][j+1],
                            self.scores[i][j+1])
                score = highest_score + self.board[i][j]
                self.scores[i][j] = score
                
                for i_x, j_x in [[i+1, j], [i+1, j+1], [i, j+1]]:
                    if self.scores[i_x][j_x] == highest_score:
                        self.counts[i][j] += self.counts[i_x][j_x]
        
        if self.counts[0][0] == 0:
            return [0, 0]
        else:
            return [self.scores[0][0], self.counts[0][0] % (10**9+7)]
