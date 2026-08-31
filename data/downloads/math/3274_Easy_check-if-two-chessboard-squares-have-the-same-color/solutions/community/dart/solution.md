# dart simple method

**Author:** _abhiramks
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5961151/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5961151/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []

class Solution {
  bool checkTwoChessboards(String coordinate1, String coordinate2) {
    return isBlack(coordinate1) == isBlack(coordinate2);
  }

  bool isBlack(String coordinate) {
    int columnIndex = coordinate.codeUnitAt(0) - 'a'.codeUnitAt(0); 
    int row = int.parse(coordinate[1]) - 1; 
    return (columnIndex + row) % 2 == 1;
  }
}

```