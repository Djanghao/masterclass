# Infinite board solution

**Author:** StefanPochmann
**Votes:** 283
**Link:** [https://leetcode.com/problems/game-of-life/solutions/73217/](https://leetcode.com/problems/game-of-life/solutions/73217/)

---

For the second follow-up question, here's a solution for an infinite board. Instead of a two-dimensional array of ones and zeros, I represent the board as a set of live cell coordinates.

    def gameOfLifeInfinite(self, live):
        ctr = collections.Counter((I, J)
                                  for i, j in live
                                  for I in range(i-1, i+2)
                                  for J in range(j-1, j+2)
                                  if I != i or J != j)
        return {ij
                for ij in ctr
                if ctr[ij] == 3 or ctr[ij] == 2 and ij in live}

And here's a wrapper that uses the above infinite board solution to solve the problem we have here at the OJ (submitted together, this gets accepted):

    def gameOfLife(self, board):
        live = {(i, j) for i, row in enumerate(board) for j, live in enumerate(row) if live}
        live = self.gameOfLifeInfinite(live)
        for i, row in enumerate(board):
            for j in range(len(row)):
                row[j] = int((i, j) in live)