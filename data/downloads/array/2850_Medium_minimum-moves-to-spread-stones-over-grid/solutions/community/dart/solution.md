# [Dart] Simple BFS Solution

**Author:** hyungzin
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4024749/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4024749/)

---

# Intuition
dart simple BFS solution

# Approach
visit for back track
focus on the stones > 1
add the list (deep copy with original) at every new case

# Complexity
- Time complexity:


- Space complexity:

# Code
```
import 'dart:collection';
class Solution {
    final visit = <String>{};
  int minimumMoves(List<List<int>> grid) {
      int cnt = 0;
       final q = Queue<List<List<int>>>();
      q.add(grid);
      visit.add(grid.expand((row) => row).join());
      while (q.isNotEmpty){
          final newQ = Queue<List<List<int>>>();
          while (q.isNotEmpty){
              final g = q.removeFirst();
              
              int y0 = -1;
              int x0 = -1;
              loop: for (int i = 0; i < 3; i++){
                  for (int j = 0; j < 3; j++){
                      if (g[i][j] > 1){
                          y0 = i;
                          x0 = j;
                          break loop;
                      }
                  }
              }
            //   print('g: $g, cnt: $cnt, y: $y0, x: $x0');
              if (y0 == -1) return cnt;
    //           up
              if (y0 > 0){
                  final newG = g.map((list) => List<int>.from(list)).toList();;
                  newG[y0 - 1][x0]++;
                  newG[y0][x0]--;
                  final sG = newG.expand((row) => row).join();
                  if (!visit.contains(sG)){
                      visit.add(sG);
                      newQ.add(newG);
                  }
              }
    //           down
              if (y0 < 2){
                  final newG = g.map((list) => List<int>.from(list)).toList();;
                  newG[y0 + 1][x0]++;
                  newG[y0][x0]--;
                  final sG = newG.expand((row) => row).join();
                  if (!visit.contains(sG)){
                      visit.add(sG);
                      newQ.add(newG);
                  }
              }
//               left
              if (x0 > 0){
                  final newG = g.map((list) => List<int>.from(list)).toList();;
                  newG[y0][x0 - 1]++;
                  newG[y0][x0]--;
                  final sG = newG.expand((row) => row).join();
                  if (!visit.contains(sG)){
                      visit.add(sG);
                      newQ.add(newG);
                  }
              }
//               right
              if (x0 < 2){
                  final newG = g.map((list) => List<int>.from(list)).toList();;
                  newG[y0][x0 + 1]++;
                  newG[y0][x0]--;
                  final sG = newG.expand((row) => row).join();
                  if (!visit.contains(sG)){
                      visit.add(sG);
                      newQ.add(newG);
                  }
              }
          }
          q.addAll(newQ);
          cnt++;
      }
      return cnt;
  }
}
```