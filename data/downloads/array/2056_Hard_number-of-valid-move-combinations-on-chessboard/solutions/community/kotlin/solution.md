# [Kotlin] 300 ms. Recursive solution

**Author:** atrubin
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/1549589/](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/1549589/)

---

```
enum class PieceType(val direction: Array<Pair<Int, Int>>) {
    rook(arrayOf(Pair(0, 1), Pair(-1, 0), Pair(1, 0), Pair(0, -1))),
    bishop(arrayOf(Pair(-1, 1), Pair(1, 1), Pair(-1, -1), Pair(1, -1))),
    queen(rook.direction.plus(bishop.direction))
}

class Solution {

    companion object {
        private const val ROW_LENGTH = 8

        private var stepRange = 0 until ROW_LENGTH

        private val answerCombination = PieceType.values().size * ROW_LENGTH * ROW_LENGTH
    }

    private var pieces: Array<PieceType> = emptyArray()
    private var positions: Array<IntArray> = emptyArray()

    private var currentAnswer: Int = 0

    private val answerSet = HashSet<Int>()

    private val pieceMovement = Array(ROW_LENGTH, { Array(ROW_LENGTH, { IntArray(ROW_LENGTH) }) })
    private val cellId =Array(PieceType.values().size) { enumId ->
        Array(ROW_LENGTH) { row ->
            IntArray(ROW_LENGTH) { column ->
                enumId * ROW_LENGTH * ROW_LENGTH + row * ROW_LENGTH + column
            }
        }
    }

    private fun calcPosition(row: Int, column: Int, step: Int, direction: Pair<Int, Int>)
            : Pair<Int, Int> = Pair(row + step * direction.first, column + step * direction.second)

    private fun updatePieceMovement(
        row: Int, column: Int, step: Int, direction: Pair<Int, Int>,
        change: Int
    ):Boolean {
        var check = true

        (0 until step).forEach { currentStep ->
            val pair = calcPosition(row, column, currentStep, direction)
            pieceMovement[currentStep][pair.first][pair.second] += change
            if (pieceMovement[currentStep][pair.first][pair.second]>1){
                check = false
            }
        }
        val pair = calcPosition(row, column, step, direction)
        (step until ROW_LENGTH).forEach { currentStep ->
            pieceMovement[currentStep][pair.first][pair.second] += change
            if (pieceMovement[currentStep][pair.first][pair.second]>1){
                check = false
            }
        }

        return check
    }

    private fun countCombinations(index: Int) {
        if (index == positions.size) {
            answerSet.add(currentAnswer)
            return
        }

        val startRow = positions[index][0]
        val startColumn = positions[index][1]

        pieces[index].direction.forEach { direction ->
            kotlin.run loop@{
                stepRange.forEach { step ->
                    val row = startRow + step * direction.first
                    val column = startColumn + step * direction.second

                    if (row !in stepRange || column !in stepRange) {
                        return@loop
                    }

                    if (updatePieceMovement(startRow, startColumn, step, direction, change = 1)) {
                        currentAnswer *= answerCombination
                        currentAnswer += cellId[pieces[index].ordinal][row][column]
                        countCombinations(index + 1)
                        currentAnswer -= cellId[pieces[index].ordinal][row][column]
                        currentAnswer /= answerCombination
                    }

                    updatePieceMovement(startRow, startColumn, step, direction, change = -1)
                }
            }
        }
    }

    fun countCombinations(pieces: Array<String>, positions: Array<IntArray>): Int {
        this.pieces = Array(pieces.size, { PieceType.valueOf(pieces[it]) })
        this.positions = Array(positions.size) {
            intArrayOf(positions[it][0] - 1, positions[it][1] - 1)
        }

        countCombinations(0)

        return answerSet.size
    }
}
```