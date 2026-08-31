# best dart solution beat 100% time ,space

**Author:** engthanoon1
**Votes:** 0
**Link:** [https://leetcode.com/problems/spiral-matrix-iii/solutions/5609183/](https://leetcode.com/problems/spiral-matrix-iii/solutions/5609183/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(Rows\u2217Cols)
- Space complexity:
O(Rows\u2217Cols)
# Code
```

class Solution {
  List<List<int>> spiralMatrixIII(
      int rows, int cols, int currentRow, int currentColumn) {
    String direction = "right";
    List<List<int>> couples = [
      [currentRow, currentColumn]
    ];
    List<int> temp;
    Set<String> visited =  {'(${currentRow},$currentColumn)'};
    while (couples.length < cols * rows) {
      switch (direction) {
        case "right":
          currentColumn++;
          if (visited.contains('(${currentRow + 1},${currentColumn})')) break;

          direction = "down";
          break;

        case "down":
          currentRow++;
          if (visited.contains('(${currentRow},${currentColumn - 1})')) break;

          direction = "left";
          break;

        case "left":
          currentColumn--;

          if (visited.contains('(${currentRow - 1},${currentColumn})')) {
            break;
          }

          direction = "up";
          break;

        case "up":
          currentRow--;
          if (visited.contains('(${currentRow},${currentColumn + 1})')) break;

          direction = "right";
          break;
        default:
      }
      temp = [currentRow, currentColumn];

      if (!visited.contains('($currentRow,$currentColumn)') &&
          currentColumn >= 0 &&
          currentRow >= 0 &&
          currentRow < rows &&
          currentColumn < cols) {
        couples.add(temp);
        visited.add('(${currentRow},$currentColumn)');
      }
    }
    return couples;
  }
}

```