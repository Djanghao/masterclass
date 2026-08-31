# Typescript O(1) with explanation

**Author:** JOlivier92
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4538633/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4538633/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The maximum number of moves that will EVER be required is 2. If only a rook is on the board, you can move to the same row, then column. If a bishop is on the board with a rook, and blocking the rook from taking, you can move the bishop, then take with the rook.

So the only cases we need to check, is to see if we can take the queen in 1 move with either the rook or the bishop. We can take the queen in 1 move with the rook under 2 conditions:
1. Both the rook and queen are in the same column, and the bishop is not between them
2. Both the rook and queen are in the same row, and the bishop is not between them

We can take the queen in 1 move with a bishop with the same sort of concept.
- The queen and bishop are diagonal to each other. We test this by making sure there is a 1:1 stepwise function between the rows and columns `Math.abs((bishop_row - queen_row) === (bishop_column - queen_column))`
- We also need to make sure that the rook is not between these two pieces. We do that by first checking if the rook is diagonal to the bishop, then checking if it's diagonal to the qeeun. Finally, we check if it's in between the two.

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minMovesToCaptureTheQueen(a: number, b: number, c: number, d: number, e: number, f: number): number {
    const rookQueenSameRow = a === e
    const rookQueenSameColumn = b === f
    const bishopQueenDiagonal = Math.abs(c - e) === Math.abs(d - f)

    if (bishopQueenDiagonal) {
        const rookDiagonalBishop = Math.abs(a - c) === Math.abs(b - d)
        const rookDiagonalQueen = Math.abs(a - e) === Math.abs(b - f)
        const rookBetween = rookDiagonalBishop && rookDiagonalQueen && ((a > c && a < e) || (a < c && a > e))
        if (!rookBetween) return 1
    }
    if (rookQueenSameRow) {
        const bishopSameRow = c === a
        const bishopBetween = (d > b && d < f) || (d < b && d > f)
        const bishopBlocking = bishopSameRow && bishopBetween
        if (!bishopBlocking) return 1
    }
    if (rookQueenSameColumn) {
        const bishopSameColumn = d === b
        const bishopBetween = (c > a && c < e) || (c < a && c > e)
        const bishopBlocking = bishopSameColumn && bishopBetween
        if (!bishopBlocking) return 1
    }
    return 2
};
```