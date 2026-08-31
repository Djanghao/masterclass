# Kotlin code with picture

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/1225623/](https://leetcode.com/problems/rectangle-overlap/solutions/1225623/)

---

```
    /**
        x1y2_____x2y2
        |         | 
        |    X1Y2_|_______X2Y2
        |     |   |         |
        x1y1__|__x2y1       |
              |             |
             X1Y1_________X2Y1
    **/
    fun isRectangleOverlap(rect1: IntArray, rect2: IntArray): Boolean {
        val (x1, y1, x2, y2) = rect1
        val (X1, Y1, X2, Y2) = rect2
        val sharedAreaBottomX = maxOf(x1, X1)
        val sharedAreaBottomY = maxOf(y1, Y1)
        val sharedAreaTopX = minOf(x2, X2)
        val sharedAreaTopY = minOf(y2, Y2)
        if (sharedAreaBottomX < sharedAreaTopX && sharedAreaBottomY < sharedAreaTopY)
            return true
        return false
    }
```


Works for https://leetcode.com/problems/rectangle-area/
```
    fun computeArea(x1: Int, y1: Int, x2: Int, y2: Int, X1: Int, Y1: Int, X2: Int, Y2: Int): Int {
        val area1 = (x2 - x1) * (y2 - y1)
        val area2 = (X2 - X1) * (Y2 - Y1)
        val sharedAreaBottomX = maxOf(x1, X1)
        val sharedAreaBottomY = maxOf(y1, Y1)
        val sharedAreaTopX = minOf(x2, X2)
        val sharedAreaTopY = minOf(y2, Y2)
        var overlap = 0
        if (sharedAreaBottomX < sharedAreaTopX && sharedAreaBottomY < sharedAreaTopY)
            overlap = (sharedAreaTopX - sharedAreaBottomX) * (sharedAreaTopY - sharedAreaBottomY)
        return area1 + area2 - overlap
    }
```