# Scala iterative solution O(m*n)

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/2757009/](https://leetcode.com/problems/bomb-enemy/solutions/2757009/)

---

```
object Solution {
    def maxKilledEnemies(grid: Array[Array[Char]]): Int = {
        val height = grid.length
        val width = grid(0).length
        val horizontalTargets = Array.fill(height)(Array.fill(width)(0))
        val verticalTargets = Array.fill(height)(Array.fill(width)(0))
        (0 until height).foreach {
            rowId => 
                var lastHorizontalWall = -1
                var horizontalEnemies = 0
                 (0 until width).foreach {
                    colId => 
                        grid(rowId)(colId) match {
                            case '0' =>
                            case 'E' =>
                                horizontalEnemies += 1
                            case 'W' =>
                                // if we met a wall apply counter to all previous pos
                                ((lastHorizontalWall + 1) until colId).foreach {
                                    pos => horizontalTargets(rowId)(pos) = horizontalEnemies
                                }
                                // reset counter
                                lastHorizontalWall = colId
                                horizontalEnemies = 0
                        }
                }
                // if counter is unreleased - release
                if(horizontalEnemies > 0) {
                    ((lastHorizontalWall + 1) until width).foreach {
                        pos => horizontalTargets(rowId)(pos) = horizontalEnemies
                    }
                }
        }
        (0 until width).foreach {
            colId => 
                var lastVerticalWall = -1
                var verticalEnemies = 0
                (0 until height).foreach {
                    rowId => {
                        grid(rowId)(colId) match {
                            case '0' =>
                            case 'E' =>
                                verticalEnemies += 1
                            case 'W' =>
                                // if we met a wall apply counter to all previous pos
                                ((lastVerticalWall + 1) until rowId).foreach {
                                    pos => verticalTargets(pos)(colId) = verticalEnemies
                                }
                                // reset counter
                                lastVerticalWall = rowId
                                verticalEnemies = 0
                        }
                    }
                }
                // if counter is unreleased - release
                if(verticalEnemies > 0) {
                    ((lastVerticalWall + 1) until height).foreach {
                        pos => verticalTargets(pos)(colId) = verticalEnemies
                    }
                }
        }
        var result = 0
        (0 until height).foreach {
            rowId => 
                 (0 until width).foreach {
                    colId => 
                        grid(rowId)(colId) match {
                            case '0' =>
                                result = result max (horizontalTargets(rowId)(colId) + verticalTargets(rowId)(colId))
                            case _ =>
                        }
                 }
        }
        result
    }
}
```