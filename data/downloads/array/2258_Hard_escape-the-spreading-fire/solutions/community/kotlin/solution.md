# Kotlin solution by BFS plus Dijkstra's algorithm

**Author:** ttaaa
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-spreading-fire/solutions/3864678/](https://leetcode.com/problems/escape-the-spreading-fire/solutions/3864678/)

---

# Approach
BFS to emulate fire spreding and Dijkstra's Algorithm to find last day when we can start escaping from this point. 

# Complexity
- Time complexity:
$$O(col \\cdot row \\cdot \\log{(col \\cdot row)})$$ - Dijkstra with Heap


- Space complexity:
$$O(col \\cdot row)$$ - `visited[row][col]`

# Code
```
class Solution {
    private val moves = listOf(-1 to 0, 0 to -1, 0 to 1, 1 to 0)
    private val MAX_ANS = 1_000_000_000

    data class Path(val maxM: Int, val x: Int, val y: Int)

    fun maximumMinutes(grid: Array<IntArray>): Int {
        val rowCnt = grid.size
        val colCnt = grid.last().size

        val map = Array(rowCnt) { Array(colCnt) { Int.MAX_VALUE } }
        val fireCells = LinkedList<Pair<Int, Int>>()

        grid.withIndex().forEach { (i, row) ->
            row.withIndex().forEach { (j, cell) ->
                when (cell) {
                    1 -> {
                        fireCells += i to j
                        map[i][j] = 0
                    }
                    2 -> map[i][j] = -1
                }
            }
        }

        while (fireCells.isNotEmpty()) {
            val cell = fireCells.removeFirst()

            fun Pair<Int, Int>.possibleFireMoves(): List<Pair<Int, Int>> =
                moves.map { (this.first + it.first) to (this.second + it.second) }
                    .filter { it.first in 0 until rowCnt && it.second in 0 until colCnt }
                    .filter { map[it.first][it.second] == Int.MAX_VALUE }

            cell.possibleFireMoves().forEach { (x, y) ->
                map[x][y] = map[cell.first][cell.second] + 1
                fireCells.add(x to y)
            }
        }

        if (map[rowCnt - 1][colCnt - 1] != Int.MAX_VALUE) map[rowCnt - 1][colCnt - 1] += 1

        val queue = PriorityQueue<Path> { a, b -> -a.maxM.compareTo(b.maxM) }
        val visited = Array(rowCnt) { Array(colCnt) { Int.MAX_VALUE } }

        queue.add(Path(minOf(map[rowCnt - 1][colCnt - 1] - 1, MAX_ANS), x = rowCnt - 1, y = colCnt - 1))

        while (queue.isNotEmpty()) {
            queue.poll().also { (maxM, x, y) ->
                if (visited[x][y] < Int.MAX_VALUE) return@also
                visited[x][y] = maxM

                fun Pair<Int, Int>.possibleMoves(): List<Pair<Int, Int>> =
                    moves.map { (this.first + it.first) to (this.second + it.second) }
                        .filter { it.first in 0 until rowCnt && it.second in 0 until colCnt }
                        .filter { visited[it.first][it.second] == Int.MAX_VALUE }
                        .filter { map[it.first][it.second] != -1 }


                (x to y).possibleMoves().forEach { (newX, newY) ->
                    queue.add(Path(minOf(map[newX][newY] - 1, if (maxM == MAX_ANS) MAX_ANS else maxM - 1), newX, newY))
                }
            }
        }

        return if (visited[0][0] == Int.MAX_VALUE || visited[0][0] < 0) -1 else visited[0][0]
    }
}
```