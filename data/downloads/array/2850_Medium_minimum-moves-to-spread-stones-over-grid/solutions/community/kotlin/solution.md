# Bruteforced DFS recursion. Beats 100%

**Author:** novodimaporo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/6036459/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/6036459/)

---

# Intuition
I can't think of a way to solve this without bruteforce.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
To omit redundant computations, filter-out the cells that we are interested. The empty cells, and the cells with more than 1 stones. Bruteforced with DFS recursion.
<!-- Describe your approach to solving the problem. -->

# Improvements
Possible improvement is to apply pruning. Please suggest how.

# Code
```kotlin []
class Solution {

    data class Cell(val x: Int, val y: Int, val stoneCount: Int = 0)

    // Terminal case is if there is no more empty cells.
    // Bruteforced. Take the mininum number of moves
    // by trying all possible sorce of stone to fill
    // an empty cell.
    fun moveStone(
        moves: Int, 
        emptyCells: List<Cell>, 
        twoUpCells: List<Cell>
    ): Int {
        if (emptyCells.isEmpty()) return moves

        val emptyCell = emptyCells.first()
        var minChildMove = Int.MAX_VALUE

        twoUpCells.forEachIndexed {
            i, twoUpCell ->

            val newTwoUpCells = twoUpCells.toMutableList()
            val cellStoneMove = abs(emptyCell.x - twoUpCell.x) +
                    abs(emptyCell.y - twoUpCell.y)

            if (twoUpCell.stoneCount > 2) {
                newTwoUpCells[i] = twoUpCell.copy(stoneCount = twoUpCell.stoneCount-1)
            } else {
                newTwoUpCells.removeAt(i)
            }

            val childMove = moveStone(
                moves + cellStoneMove,
                emptyCells.drop(1),
                newTwoUpCells
            )

            if (childMove < minChildMove) { 
                minChildMove = childMove 
            }
        }

        return minChildMove
    }

    fun minimumMoves(grid: Array<IntArray>): Int {
        // Preprocess the grid, collect empty cells and 
        // cells with 2 or more stones.
        var emptyCells = mutableListOf<Cell>()
        var twoUpCells = mutableListOf<Cell>()

        grid.forEachIndexed {
            rowIndex, row ->
            row.forEachIndexed {
                columnIndex, stoneCount ->
                if (stoneCount == 0) {
                    emptyCells.add(Cell(rowIndex, columnIndex))
                } else if (stoneCount > 1) {
                    twoUpCells.add(Cell(rowIndex, columnIndex, stoneCount))
                }
            }
        }

        return moveStone(moves = 0, emptyCells, twoUpCells)
    }
}
```