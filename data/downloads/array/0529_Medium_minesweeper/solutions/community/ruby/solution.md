# [Ruby] Easy to understand BFS solution w/ comments

**Author:** gxespino
**Votes:** 0
**Link:** [https://leetcode.com/problems/minesweeper/solutions/1867941/](https://leetcode.com/problems/minesweeper/solutions/1867941/)

---

```ruby
HIDDEN_MINE = "M"
REVEALED_BLANK = "B"
REVEALED_MINE = "X"

def update_board(board, click)
  queue = [click]
  clicked = {}

  while queue.any?
    current = queue.shift
    row, col = current[0], current[1]

    # If we click on a hidden mine, the game is over
    if board[row][col] == HIDDEN_MINE
      board[row][col] = REVEALED_MINE
      return board
    end

    # Skip if we repeat a click
    next if clicked[current]
    clicked[current] = true

    adjacent_mines_count = 0

    # BFS Search on all the valid adjacent squares
    adjacent_squares(row, col, board).each do |adj_square|
      adj_row, adj_col = adj_square[0], adj_square[1]

      # If an adjacent square is a hidden mine, increment counter
      if board[adj_row][adj_col] == HIDDEN_MINE
        adjacent_mines_count += 1
      end
    end

    # After BFS search, if any adjacent mines were uncovered
    # we change the current square to reflect that amount
    # otherwise we add all the adjacent squares to the queue
    if adjacent_mines_count > 0
      board[row][col] = adjacent_mines_count.to_s
    else
      board[row][col] = REVEALED_BLANK
      queue += adjacent_squares(row, col, board)
    end
  end

  board
end

def adjacent_squares(row, col, board)
  adjacent = []
  adjacent << [row-1, col-1] if row > 0 && col > 0 # up left
  adjacent << [row-1, col]   if row > 0 # up
  adjacent << [row-1, col+1] if row > 0 && col < board[0].length - 1 # up right
  adjacent << [row,   col+1] if col < board[0].length - 1 # right
  adjacent << [row+1, col+1] if row < board.length - 1 && col < board[0].length - 1 # down right
  adjacent << [row+1, col]   if row < board.length - 1 # down
  adjacent << [row+1, col-1] if row < board.length - 1 && col > 0 # down left
  adjacent << [row,   col-1] if col > 0 # left
  adjacent
end
```