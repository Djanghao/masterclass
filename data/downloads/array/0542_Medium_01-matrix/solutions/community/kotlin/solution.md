# Kotlin BFS Solution

**Author:** asoka009su
**Votes:** 2
**Link:** [https://leetcode.com/problems/01-matrix/solutions/3081671/](https://leetcode.com/problems/01-matrix/solutions/3081671/)

---


```
class Solution {
    fun updateMatrix(mat: Array<IntArray>): Array<IntArray> {
        if(mat.size == 0) return mat

        val queue = ArrayDeque<Pair<Int, Int>>()

        mat.forEachIndexed {x, row ->
            row.forEachIndexed { y, value ->
                if(value == 0) {
                    queue.addLast(Pair(x, y))
                } else {
                    mat[x][y] = -1 // not yet visited
                }
            }
        }

        val neighbors = arrayOf(Pair(0, 1), Pair(1, 0), Pair(0, -1), Pair(-1, 0))
        while(queue.isNotEmpty()) {
            val (x, y) = queue.removeFirst()

            neighbors.forEach loop@ {
                val xN = it.first + x
                val yN = it.second + y

                if(xN < 0 || xN == mat.size || yN < 0 || yN == mat[0].size || mat[xN][yN] != -1) return@loop

                mat[xN][yN] = mat[x][y] + 1
                queue.addLast(Pair(xN, yN))
            }
        } 
       return mat
    }
}
```