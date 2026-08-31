# Python 3 solution with comments

**Author:** derek-y
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/1767406/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/1767406/)

---

```
class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        # keep track of the "net score" of each row/col/diagonal
        # player A adds 1 to the "net score" of each row/col/diagonal they play in,
        # player B subtracts 1
        # scores[0], scores[1] and scores[2] are for rows 0, 1 and 2
        # scores[3], scores[4] and scores[5] are for cols 0, 1 and 2
        # scores[6] and scores[7] are for the forward and backward diagonal
        scores = [0] * 8
        for i, (row, col) in enumerate(moves):
            if i % 2 == 0:  # player A is playing
                x = 1
            else:  # player B is playing
                x = -1
            scores[row] += x
            scores[col + 3] += x
            if row == col:
                scores[6] += x
            if 2 - row == col:
                scores[7] += x
        for score in scores:
            if score == 3:
                return 'A'
            elif score == -3:
                return 'B'
        return 'Draw' if len(moves) == 9 else 'Pending'