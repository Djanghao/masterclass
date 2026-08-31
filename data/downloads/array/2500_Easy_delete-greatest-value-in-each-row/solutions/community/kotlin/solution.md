# Kotlin Declarative Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/6034521/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/6034521/)

---

# Code
```kotlin []
import java.util.Deque
import java.util.LinkedList

class Solution {
  
  fun isEmpty(usefulGrid: Array<LinkedList<Int>>) =
    usefulGrid.all { row -> row.isEmpty() }

  fun nextStepInOperation(usefulGrid: Array<LinkedList<Int>>): Int {
    var res = 0
    for (row in usefulGrid)
      res = max(res, row.pollFirst())
    return res
  }

  fun deleteGreatestValue(grid: Array<IntArray>): Int {
    var usefulGrid = grid
      .map{ row -> LinkedList(row.sorted().toList()) }
      .toTypedArray()
    
    var res = 0
    while (!isEmpty(usefulGrid))
      res += nextStepInOperation(usefulGrid)
    return res
  }
}
```