# Beats 96.78% || Short 7-line Python solution (with detailed explanation)

**Author:** julialokot
**Votes:** 321
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/3277043/](https://leetcode.com/problems/valid-sudoku/solutions/3277043/)

---


1)It initializes an empty list called "res", which will be used to store all the valid elements in the board.

2)It loops through each cell in the board using two nested "for" loops.
For each cell, it retrieves the value of the element in that cell and stores it in a variable called "element".

3)If the element is not a dot ('.'), which means it's a valid number, the method adds three tuples to the "res" list:

- The first tuple contains the row index (i) and the element itself.
- The second tuple contains the element itself and the column index (j).
- The third tuple contains the floor division of the row index by 3 (i // 3), the floor division of the column index by 3 (j // 3), and the element itself. This tuple represents the 3x3 sub-grid that the current cell belongs to.

4)After processing all the cells, the method checks if the length of "res" is equal to the length of the set of "res".

```
class Solution(object):
    def isValidSudoku(self, board):
        res = []
        for i in range(9):
            for j in range(9):
                element = board[i][j]
                if element != '.':
                    res += [(i, element), (element, j), (i // 3, j // 3, element)]
        return len(res) == len(set(res))

```