# Scala divide and conquer

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/3615967/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/3615967/)

---

# Intuition
TBD

# Approach
TBD

# Complexity
- Time complexity:
O(log(M max N))

- Space complexity:
O(log(M max N))

# Code
```
/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Sea {
 *     def hasShips(topRight: Array[Int], bottomLeft: Array[Int]): Boolean = {}
 * }
 */

object Solution {
    def countShips(sea: Sea, topRight: Array[Int], bottomLeft: Array[Int]): Int = {
        (bottomLeft, topRight) match {
            case (Array(x1,y1), Array(x2,y2)) if x2 >= x1 && y2 >= y1 && sea.hasShips(Array(x2,y2),Array(x1,y1)) => 
                if(x1 == x2 && y1 == y2) {
                    1
                } else {
                    val midY = (y2 + y1) / 2
                    val midX = (x2 + x1) / 2
                    List(
                        countShips(sea, Array(midX, midY), Array(x1, y1)),
                        countShips(sea, Array(x2, midY), Array(midX + 1, y1)),
                        countShips(sea, Array(midX, y2), Array(x1, midY + 1)),
                        countShips(sea, Array(x2, y2), Array(midX + 1, midY + 1))
                    ).sum
                }
            case _ => 0
        }
    }
}
```