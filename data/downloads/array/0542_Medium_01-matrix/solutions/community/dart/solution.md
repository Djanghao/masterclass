# BFS Approach with comments

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/01-matrix/solutions/4508221/](https://leetcode.com/problems/01-matrix/solutions/4508221/)

---

# Complexity
- Time complexity: O(m * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';

typedef RowCol = (int r, int c);

class Solution {
  // Unfortunately Dart does not have a max int constant, so we use this
  static const int maxInt =  0x7FFFFFFFFFFFFFFF;

  List<List<int>> updateMatrix(List<List<int>> mat) {
    final rows = mat.length;
    final cols = mat[0].length;

    final queue = Queue<RowCol>();

    // Add the [RowCol] for all cells with a 0 value to our queue.
    // These cells keep their 0 values.
    // Other cells are updated with the [maxInt] value.
    // Note that we are updating [mat] in place.
    for (int r = 0; r < rows; r++){
      for (int c = 0; c < cols; c++){
        mat[r][c] == 0
          ? queue.add((r, c))
          : mat[r][c] = maxInt;        
      }
    }

    // Makes it easier for us to loop over each direction
    // These values will be added to the current cell postion to traverse our matrix.
    final dirAddends = <RowCol>[
      (-1, 0),              // Up
      (1, 0),               // Down
      (0, -1),              // Left
      (0, 1),               // Right
    ];

    while (queue.isNotEmpty){
      // Get the row and col of our current cell
      final (r, c) = queue.removeFirst();

      // Loop to check adjacent cells 
      // Each iteration goes in a different direction [up, down, left, right]
      for (final (rAddend, cAddend) in dirAddends){
        int nextRow = r + rAddend;
        int nextCol = c + cAddend;

        // Continue if the next cell is out of bounds
        if (nextRow < 0 || nextCol < 0 || nextRow >= rows || nextCol >= cols) continue;
        // Continue if we've already calculated the nearest zero
        if (mat[nextRow][nextCol] != maxInt) continue;

        // Increment the next cell's value by 1
        //
        // Essentially we are starting with all the cells that equal 0
        // Each valid adjacent cell to the 0 value cells will be 1
        // Each valid adjacent cell to the 1 value cells will be 2
        // Each valid adjacent cell to the 2 value cells will be 3
        // So on and so forth...
        mat[nextRow][nextCol] = mat[r][c] + 1;

        // Add the next cell to the [queue] so we can then check its adjacent cells
        queue.add((nextRow, nextCol));
      }
    }

    return mat;
  }
}
```