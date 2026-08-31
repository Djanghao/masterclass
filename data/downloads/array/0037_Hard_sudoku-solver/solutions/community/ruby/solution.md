# Recursive Ruby Solution

**Author:** ksodha93
**Votes:** 1
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/4116617/](https://leetcode.com/problems/sudoku-solver/solutions/4116617/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(9^n*2) -> O(9!)^9 -> For each row, first box will have 9 possibilities, second one will have 8 possibilities...For first row, complexity would be: 9 x 8 x 7 x...x 1 = 9!
And we have 9 rows hence (9!)^9

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(81) -> O(1)

# Code
```
# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def solve_sudoku(board)
    return if board.length == 0 || board == [[]]

    solve(board)
end

def solve(board)
    (0...9).each do |r|
        (0...9).each do |c|
            if board[r][c] == '.'
                ('1'..'9').each do |n|
                    if is_valid(board, r, c, n)
                        board[r][c] = n # temporarily add the num
                        if solve(board)
                            return true
                        else
                            board[r][c] = '.'
                        end
                    end
                end
                return false
            end
        end
    end
    true
end

<!-- def is_valid(board, row, col, num)
    (0...9).each do |i|
        # check row
        return false if board[i][col] != '.' && board[i][col] == num

        # check column
        return false if board[row][i] != '.' && board[row][i] == num

        # check square box
        return false if board[3*(row/3) + i/3][3*(col/3) + i%3] != '.' && board[3*(row/3) + i/3][3*(col/3) + i%3] == num

    end
    true
end -->

def is_valid(board, row, col, num)
    # check rows
    (0...9).each do |i|
        return false if board[i][col] == num
    end

    # check columns
    (0...9).each do |i|
        return false if board[row][i] == num
    end

    # check squraebox
    grid_row = 3 * (row / 3)
    grid_column = 3 * (col / 3)

    (grid_row...grid_row+3).each do |i|
        (grid_column...grid_column+3).each do |j|
            return false if board[i][j] == num
        end
    end
    true
end
```