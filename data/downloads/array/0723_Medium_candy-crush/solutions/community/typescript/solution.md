# TypeScript O(m * n) Solution (without using extra space)

**Author:** wtlin1228
**Votes:** 1
**Link:** [https://leetcode.com/problems/candy-crush/solutions/3719947/](https://leetcode.com/problems/candy-crush/solutions/3719947/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Mark the crushable candies then crush them.

# Approach
<!-- Describe your approach to solving the problem. -->
Loop {
    a. mark crushable rows (optimized with early return)
    b. mark crushable cols (optimized with early return)
    c. crush candies if needed
}

# Complexity
- Time complexity: $$O(m * n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// Time complexity: O(m * n)
// Space complexity: O(1)
function candyCrush(board: number[][]): number[][] {
  while (markBoard(board)) {
    crushTheCandies(board)
  }
  
  return board
};

// Time complexity: O(m * n)
// Space complexity: O(1)
function markBoard(board: number[][]): boolean {
  // the order matters because we don't deal with negative in markCrushableCandiesByRow
  const isAnyRowMarked = markCrushableCandiesByRow(board)
  const isAnyColMarked = markCrushableCandiesByCol(board)
  return isAnyColMarked || isAnyRowMarked
}

// Time complexity: O(m * n)
// Space complexity: O(1)
function crushTheCandies(board: number[][]) {
  const rowSize = board.length
  const colSize = board[0].length
  for (let col = 0; col < colSize; col++) {
    let crushCount = 0
    for (let row = rowSize - 1; row >= 0; row--) {
      const candy = board[row][col]
      if (candy === 0) {
        break
      } else if (candy < 0) {
        crushCount += 1
        board[row][col] = 0
      } else if (crushCount > 0) {
        board[row + crushCount][col] = candy
        board[row][col] = 0
      }
    }
  }
}

function markCrushableCandiesByRow(board: number[][]): boolean {
  let isMarked = false

  // from bottom to top, stop at all-0 row [0, 0, 0, 0, ..., 0]
  for (let row = board.length - 1; row >= 0; row--) {
    let isZeroRow = true
    let prevCandy = 0
    let candyCount = 0
    
    for (let col = 0; col < board[0].length; col++) {
      const candy = board[row][col]

      if (candy !== 0) {
        isZeroRow = false
      }
      
      if (candy === prevCandy) {
        candyCount += 1
      } else {
        if (prevCandy !== 0 && candyCount >= 3) {
          for (let i = 1; i <= candyCount; i++) {
            isMarked = true
            mark(board, row, col - i)
          }
        }
        prevCandy = candy
        candyCount = 1
      }
    }

    if (prevCandy !== 0 && candyCount >= 3) {
      for (let i = 1; i <= candyCount; i++) {
        isMarked = true
        mark(board, row, board[0].length - i)
      }
    }

    if (isZeroRow) {
      // we can rearly return because no new candy will be added
      return isMarked
    }
  }

  return isMarked
}

function markCrushableCandiesByCol(board: number[][]): boolean {
  let isMarked = false

  // from bottom to top, stop at 0
  for (let col = 0; col < board[0].length; col++) {
    let prevCandy = 0
    let candyCount = 0
    
    for (let row = board.length - 1; row >= 0; row--) {
      // need to remove the negative sign marked by markCrushableCandiesByRow
      const candy = Math.abs(board[row][col])

      if (candy === 0) {
        // we can rearly return because no new candy will be added
        if (prevCandy !== 0 && candyCount >= 3) {
          for (let i = 1; i <= candyCount; i++) {
            isMarked = true
            mark(board, row + i, col)
          }
        }
        break
      }
      
      if (candy === prevCandy) {
        candyCount += 1
      } else {
        if (prevCandy !== 0 && candyCount >= 3) {
          for (let i = 1; i <= candyCount; i++) {
            isMarked = true
            mark(board, row + i, col)
          }
        }
        prevCandy = candy
        candyCount = 1
      }
    }

    if (prevCandy !== 0 && candyCount >= 3) {
      for (let i = 0; i < candyCount; i++) {
        isMarked = true
        mark(board, i, col)
      }
    }
  }

  return isMarked
}

function mark(board: number[][], row: number, col: number) {
  const hasBeenMarked = board[row][col] < 0
  if (hasBeenMarked) {
    return
  }
  board[row][col] = board[row][col] * -1
}
```