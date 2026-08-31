# Dart solution

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/5088557/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/5088557/)

---

# Approach
- translate the moves into a grid
- count the number of token for each lines, columns and diagonals (8 in total)

# Complexity
- Time complexity: O(m.n) We iterate through the grid
- Space complexity: O(m.n) We store the grid

# Code
```
class Solution {
  List<List<String>> grid = [];

  String tictactoe(List<List<int>> moves) {
    // fill the grid
    grid = List.generate(3, (_) => List.filled(3, ' '));
    for (var (iMove, [i, j]) in moves.indexed) {
      grid[i][j] = iMove.isEven ? 'A' : 'B';
    }    

    // 3 lines  + 3 columns + 2 diagonals
    var counts = List.generate(8, (_) => {});

    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        counts[i].incr(grid[i][j]); // counts for the row
        counts[3 + i].incr(grid[j][i]); // counts for the col
      }
      counts[6].incr(grid[i][i]); // counts diagonal from top-right
      counts[7].incr(grid[i][2 - i]); // counts diagonal from top-left
    }
    
    // test the results
    for (var count in counts) {
      if (count['A'] == 3) return 'A';
      if (count['B'] == 3) return 'B';
    }
    return moves.length < 9 ? 'Pending' : 'Draw';
  }
}

extension on Map {
  void incr(key) => this[key] = (this[key] ?? 0) + 1;
}
```