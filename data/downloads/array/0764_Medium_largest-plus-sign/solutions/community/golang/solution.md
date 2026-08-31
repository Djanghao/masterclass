# Brute force solution in Go

**Author:** jodawill
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/3878991/](https://leetcode.com/problems/largest-plus-sign/solutions/3878991/)

---

# Intuition
I often like to think of how I would approach a problem if I was asked to do it on paper.

# Approach
Iterate over the entire board, calculating the order for a plus sign at each cell. Once we have this list, we return the maximum from it.

This is a stupid approach, but it's fast enough to meet the time constraints, and it's easy to understand.

# Complexity
Let's call the size of the board $$n$$, which is a bit confusing because its size is the square of the `n` variable.

- Time complexity:
We iterate over the board, so that brings us up to $$O(n)$$ complexity. But for each cell, we could iterate as many times as $$\\frac{\\sqrt{n}}{2}-1$$ to check its neighbors. So, dropping the constants, this leads us to a total complexity of $$O(n^\\frac{3}{2})$$.

- Space complexity:
We never store more than the size of the board, which is $$O(n^2)$$.

# Code
```
// Returns the largest value from a slice of integers
func maxInt(plus_sizes ...int) int {
  var max int
  for _, x := range plus_sizes {
    if x > max {
      max = x
    }
  }
  return max
}

// Returns the size of the plus sign at board[i][j]
func getPlusSize(board [][]bool, i int, j int) int {
  // If the cell is a bomb, this plus size is actually zero
  if board[i][j] {
    return 0
  }

  // The smallest plus sign is simply a single cell surrounded by bombs,
  // so we initialize k to its order, which is 1
  k := 1

  // The nasty conditional here simply checks whether:
  // 1) The cells we're about to look at are within bounds
  // 2) The values on all four sides are not bombs
  for i-k >= 0 && i+k < len(board) && j-k >= 0 && j+k < len(board) && !(board[i-k][j] || board[i+k][j] || board[i][j-k] || board[i][j+k]) {
    // Simply increase k as we extend the plus sign
    k++
  }

  // And k is the final order
  return k
}

func orderOfLargestPlusSign(n int, mines [][]int) int {
  // Initialize the board with false values
  board := make([][]bool, n)
  for i := range board {
    board[i] = make([]bool, n)
  }

  // Place the mines on the board by flipping those cells to true
  for _, mine := range mines {
    board[mine[0]][mine[1]] = true
  }

  // Generate the list of the sizes of every plus sign on the board
  var plus_sizes []int
  for i := 0; i < n; i++ {
    for j := 0; j < n; j++ {
      if !board[i][j] {
        plus_sizes = append(plus_sizes, getPlusSize(board, i, j))
      }
    }
  }

  // Now return the largest one
  return maxInt(plus_sizes...)
}
```