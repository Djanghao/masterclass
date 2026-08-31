# 👌👌👌👌👌Runtime 436 ms Beats 60.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4779457/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4779457/)

---

# Code
```
object Solution {
    def minMovesToCaptureTheQueen(rx: Int, ry: Int, bx: Int, by: Int, qx: Int, qy: Int): Int = {
        if (canBishopCaptureQueen(bx, by, qx, qy, rx, ry) || canRookCaptureQueen(rx, ry, qx, qy, bx, by)) {
        return 1
        }
        return 2
    }

    def canBishopCaptureQueen(bx: Int, by: Int, qx: Int, qy: Int, rx: Int, ry: Int): Boolean = {
        (onUpwardDiagonal(bx, by, qx, qy) && (!onUpwardDiagonal(bx, by, rx, ry) || !isInTheMiddle(bx, rx, qx))) ||
        (onDownwardDiagonal(bx, by, qx, qy) && (!onDownwardDiagonal(bx, by, rx, ry) || !isInTheMiddle(bx, rx, qx)))
    }

    def canRookCaptureQueen(rx: Int, ry: Int, qx: Int, qy: Int, bx: Int, by: Int): Boolean = {
        (onHorizontalLine(rx, qx) && (!onHorizontalLine(rx, bx) || !isInTheMiddle(ry, by, qy))) ||
        (onVerticalLine(ry, qy) && (!onVerticalLine(ry, by) || !isInTheMiddle(rx, bx, qx)))
    }

    def onUpwardDiagonal(x1: Int, y1: Int, x2: Int, y2: Int): Boolean = {
        y1 - x1 == y2 - x2
    }

    def onDownwardDiagonal(x1: Int, y1: Int, x2: Int, y2: Int): Boolean = {
        y1 + x1 == y2 + x2
    }

    def onHorizontalLine(x1: Int, x2: Int): Boolean = {
        x1 == x2
    }

    def onVerticalLine(y1: Int, y2: Int): Boolean = {
        y1 == y2
    }

    def isInTheMiddle(start: Int, mayBeMiddle: Int, end: Int): Boolean = {
        val (updatedStart, updatedEnd) = if (end < start) (end, start) else (start, end)
        updatedStart < mayBeMiddle && mayBeMiddle < updatedEnd
    }
}
```