# [Swift] 2D sorted matrix traversal

**Author:** berkuqo
**Votes:** 2
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/1652290/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/1652290/)

---

```swift
//
// Since the goal is to find the leftmost 1 on the left and each row is sorted in  non-decreasing order
// we can start from top right and iterate to bottom left
//    if current item is 1 -> go left (to find the leftmost 1)
//    if current item is 0 -> no need to check left (since its sorted) go down
// while doing above logic, keep a result (column index of leftmost 1)
//
// Similar logic to "240. Search a 2D Matrix II" question https://leetcode.com/problems/search-a-2d-matrix-ii/
//

class Solution {
  func leftMostColumnWithOne(_ binaryMatrix: BinaryMatrix) -> Int {
    let dimensions = binaryMatrix.dimensions()
    let rowCount = dimensions[0]
    let columnCount = dimensions[1]
    
    var currentRow = 0
    var currentColumn = columnCount - 1
    var result = -1
    
    while currentRow < rowCount && currentColumn >= 0 {
      if binaryMatrix.get(currentRow, currentColumn) == 1 {
        result = currentColumn
        currentColumn -= 1
      } else {
        currentRow += 1
      }
    }
    
    return result
  }
}
```