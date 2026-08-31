# SUPER EASY 💪, EK DUM LALLU 🤣

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5502127/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5502127/)

---

Sure, here is the requested format:

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
My first thought is to scan the matrix row by row, find the minimum element in each row, and then check if this element is also the maximum element in its column.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Traverse each row to find the minimum element in the row and note its column index.
2. Check if this minimum element is the maximum element in its column by comparing it with other elements in the same column.
3. If the element satisfies both conditions (minimum in row and maximum in column), add it to the list of lucky numbers.
4. Return the list of lucky numbers.

# Complexity
- Time complexity: $$O(m \	imes n)$$
  - We need to traverse each element in the matrix to find the minimum in the rows and maximum in the columns.
- Space complexity: $$O(1)$$
  - We are using a fixed amount of extra space for storing variables and the result list.

# Code
```dart
import 'dart:math';

class Solution {
  List<int> luckyNumbers(List<List<int>> matrix) {
    List<int> sol = []; 

    // Traverse each row
    for (int i = 0; i < matrix.length; i++) {
      int lowestInRow = 1000000; 
      int lowestIndex = 0;
      
      // Find the minimum element in the row
      for (int j = 0; j < matrix[0].length; j++) {
        if (lowestInRow > matrix[i][j]) {
          lowestInRow = matrix[i][j];
          lowestIndex = j;
        }            
      }
      
      int maxInCol = 0;

      // Check if it is the maximum in its column
      for (int k = 0; k < matrix.length; k++) {
        maxInCol = max(maxInCol, matrix[k][lowestIndex]);
      }

      // If it satisfies both conditions, add to the result list
      if (lowestInRow == maxInCol) {
        sol.add(maxInCol);
      }
    }
    
    return sol;
  }
}
```

This solution traverses the matrix efficiently and ensures that we find all possible lucky numbers, even if there are multiple ones.