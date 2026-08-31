# So intuitive that I won't even write comments

**Author:** DanyZy
**Votes:** 2
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5761713/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5761713/)

---

# Code
```kotlin []
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {

    enum class Directions(val row: Int, val col: Int) {
        RIGHT(0, 1),
        DOWN(1, 0),
        LEFT(0, -1),
        UP(-1, 0)
    }

    fun spiralMatrix(m: Int, n: Int, head: ListNode?): Array<IntArray> {
        val res = Array(m) { IntArray(n) { -1 } }

        var node = head
        var direction = Directions.RIGHT
        var (i, j) = 0 to 0

        fun canMove(row: Int, col: Int): Boolean =
            row + direction.row in 0..<m &&
                    col + direction.col in 0..<n &&
                    res[row + direction.row][col + direction.col] == -1

        while (node != null) {
            res[i][j] = node.`val`
            
            if (!canMove(i,j)) direction = Directions.entries[(direction.ordinal + 1) % Directions.entries.size]
            i += direction.row; j += direction.col

            node = node.next
        }
        return res
    }
}
```