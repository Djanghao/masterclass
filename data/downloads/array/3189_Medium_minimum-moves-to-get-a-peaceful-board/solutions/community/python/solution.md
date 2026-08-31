# That's a good one O(2N)

**Author:** vokasik
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solutions/5339143/](https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board/solutions/5339143/)

---

The first idea about brute force quite similar to https://leetcode.com/problems/n-queens/
Taking into account that N=500 and time complexity could be something like `O(N^(2N))` to try all possible options, we're moving on to something else!

Backtracking is not an option too with `O(N!)`

What's next?

After dry running a few examples it's quite obvious that the problem can be split into 2 parts:
- min moves to make all rooks not colliding in **rows**
- min moves to make all rooks not colliding in **cols**

Min moves examples for rows (same for columns):

```
1)
\u2610 \u2610 \u265C
\u2610 \u265C \u265C
\u2610 \u2610 \u2610

\u2610<\u265C \u265C 1 move
\u265C \u2610<\u265C 1 move
\u265C \u265C \u2610

2)
\u2610 \u265C \u2610
\u2610 \u265C \u265C
\u2610 \u2610 \u2610

\u2610<\u265C \u265C 1 move
\u265C \u2610 \u265C

3)
\u2610 \u265C \u2610
\u265C \u265C \u2610
\u2610 \u2610 \u2610

\u265C \u265C>\u2610 1 move
\u265C \u2610 \u265C
```
So the problem now reduces to find **minimum moves** to put rooks in empty spaces provided we have `N` spaces for `N` rooks and there might be > 1 rook in the same `row/col`.
From the constrains we will always have 1 rook per 1 space in a `row/col`, so something like this is out of question:
```
\u2610 \u265C \u2610 \u2610 \u2610 \u2610
\u265C \u265C \u2610 \u2610 \u2610 \u2610
\u2610 \u2610 \u2610 \u2610 \u2610 \u2610
\u2610 \u2610 \u2610 \u2610 \u2610 \u2610
\u2610 \u2610 \u2610 \u2610 \u2610 \u2610
\u2610 \u2610 \u2610 \u2610 \u2610 \u2610
```

2 more examples with a dry run:
```
1)
\u2610 \u2610 \u265C \u2610
\u2610 \u2610 \u265C \u2610
\u2610 \u2610 \u265C \u2610
\u2610 \u2610 \u265C \u2610

\u2610 \u2610 \u265C>\u2610 1 move
\u2610 \u2610 \u265C \u2610 0 moves
\u2610 \u2610<\u265C \u2610 1 move
\u2610<\u2610<\u265C \u2610 2 moves

2)
\u2610 \u265C \u2610 \u2610
\u2610 \u265C \u2610 \u2610
\u2610 \u265C \u2610 \u2610
\u2610 \u265C \u2610 \u2610

\u2610<\u265C \u2610 \u2610 1 move
\u2610 \u265C \u2610 \u2610 0 moves
\u2610 \u265C>\u2610 \u2610 1 move
\u2610 \u265C>\u2610>\u2610 2 moves
```
Now we understand what needs to be done, the question left: how to implement the idea???
The trick with `balance` from the problem https://leetcode.com/problems/distribute-coins-in-binary-tree/, becomes handy. We need to distribute rooks across `rows` and then `columns`:
> check balance idea from @awice in the coins problem, quite interesting

```
\u2610          \u2610          \u265C         \u2610
\u2610          \u2610          \u265C         \u2610
\u2610          \u2610          \u265C         \u2610
\u2610          \u2610          \u265C         \u2610
need 1     need 1     need 1    need 1
have 0     have 0     have 4    have 0
balance -1 balance -2 balance 1 balance 0
moves 1    moves 2    moves 1   moves 0
```

```
class Solution:
    def minMoves(self, rooks: List[List[int]]) -> int:
        N = len(rooks)
        row = [0] * N
        col = [0] * N
        for r,c in rooks:
            row[r] += 1
            col[c] += 1
        balance_row = balance_col = moves = 0
        for i in range(N):
            balance_row += row[i] - 1 # balance = cumulative_have - need for row/col
            balance_col += col[i] - 1
            moves += abs(balance_row) + abs(balance_col)
        return moves
```

Cheers!