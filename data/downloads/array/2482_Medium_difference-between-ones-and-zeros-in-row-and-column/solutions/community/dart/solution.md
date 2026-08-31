# Solution in O(n^2) Time and Space Complexity

**Author:** aromalsk
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4405692/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4405692/)

---



# Complexity
- Time complexity: 
  The worst-case time complexity is O(n^2)

n represents the total number of elements in the grid 
The solution involves iterating through the entire grid twice: once to calculate onesRow, onesCol, zeroRow, zeroCol, and another time to populate the diff matrix. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
 The worst-case space complexity is also O(n^2)


Four lists (onesRow, onesCol, zeroRow, zeroCol) are created, each having a length equal to either the number of rows or columns of the grid
A new matrix diff is generated with dimensions equal to the grid's dimensions.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> onesMinusZeros(List<List<int>> grid) {
    List<int> onesRow = List.filled(grid.length, 0);
    List<int> onesCol = List.filled(grid[0].length, 0);
    List<int> zeroRow = List.filled(grid.length, 0);
    List<int> zeroCol = List.filled(grid[0].length, 0);

    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[0].length; j++) {
        onesRow[i] += grid[i][j];
        onesCol[j] += grid[i][j];

        if (grid[i][j] == 0) {
          zeroRow[i] += 1;
          zeroCol[j] += 1;
        }
      }
    }

    List<List<int>> diff = List.generate(
      grid.length,
      (_) => List.filled(grid[0].length, 0),
    );

    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[0].length; j++) {
        int num = (onesRow[i]) + (onesCol[j]) - (zeroRow[i]) + -(zeroCol[j]);
        diff[i][j] = num;
      }
    }
    
    return diff;
  }
}
```