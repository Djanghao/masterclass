# Scala 100% Solution.

**Author:** pimverkerk
**Votes:** 0
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5759804/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5759804/)

---


# Approach
 - Fill the Matrix with -1.
 - Start moving right and remember direction
 - Change direction when hitting boundary or non -1

# Code
```scala []
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
    def spiralMatrix(m: Int, n: Int, head: ListNode): Array[Array[Int]] = {
        val spiral = Array.fill[Array[Int]](m)(Array.fill[Int](n)(-1))

        def fillAndMove(x: Int, y: Int, direction: Int, node: ListNode): Array[Array[Int]] = {
            if(node == null) return spiral
            spiral(x)(y) = node.x

            //Continue Direction
            if(direction == 0 && y < n-1 && spiral(x)(y+1) < 0) fillAndMove(x, y+1, 0, node.next)
            else if (direction == 1 && x < m-1 && spiral(x+1)(y) < 0) fillAndMove(x+1, y, 1, node.next)
            else if (direction == 2 && y > 0 && spiral(x)(y-1) < 0) fillAndMove(x, y-1, 2, node.next)
            else if (direction == 3 && x > 0 && spiral(x-1)(y) < 0) fillAndMove(x-1, y, 3, node.next)
            //Find new Direction
            else if (y < n-1 && spiral(x)(y+1) < 0) fillAndMove(x, y+1, 0, node.next)
            else if (x < m-1 && spiral(x+1)(y) < 0) fillAndMove(x+1, y, 1, node.next)
            else if (y > 0 && spiral(x)(y-1) < 0) fillAndMove(x, y-1, 2, node.next)
            else if (x > 0 && spiral(x-1)(y) < 0) fillAndMove(x-1, y, 3, node.next)
            else spiral
        }

        fillAndMove(0,0,0,head)
    }
}
```