# TS solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/6027754/](https://leetcode.com/problems/available-captures-for-rook/solutions/6027754/)

---

searchDirection Function: This function takes rowStep and colStep to define a direction (up, down, left, or right). It increments the position until it finds a pawn ("p") or a bishop ("B").
Loop in Four Directions: The four calls to searchDirection cover all four directions around the rook, counting any capturable pawns.

# Complexity
- Time complexity: 0ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 50.38mb
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function numRookCaptures(board: string[][]): number {
  let rookRow = -1, rookCol = -1
  
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j< 8; j++) {
      if (board[i][j] == "R") {
        rookRow = i
        rookCol = j
        break
      }
    }
    if (rookRow !== -1) break
  }
  
  let captures = 0
  
  const searchDirections = (rowStep: number, colStep: number) => {
    let row = rowStep + rookRow
    let col = colStep + rookCol
    
    while (row >= 0 && row < 8 && col >= 0 && col < 8) {
      if (board[row][col] == "B") break
      if (board[row][col] == "p") {
        captures++
        break
      }
      row += rowStep
      col += colStep
    }
  }
  
  searchDirections(1, 0)
  searchDirections(-1, 0)
  searchDirections(0, 1)
  searchDirections(0, -1)
  
  return captures
  
};
```