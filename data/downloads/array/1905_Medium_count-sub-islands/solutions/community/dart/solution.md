# [Dart] Iterative DFS

**Author:** MaratTazhetdinov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/5701127/](https://leetcode.com/problems/count-sub-islands/solutions/5701127/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We can solve this problem using Depth-First Search (DFS). The idea is to traverse all islands in grid2 and check if each island is a sub-island by comparing it with the corresponding area in grid1.

1) Initialization:

We first determine the number of rows and columns in the grids. We define a DFS function to explore and mark the connected components (islands) in grid2.

2) DFS Implementation:

We use an explicit stack to simulate DFS, which avoids potential stack overflow issues with deep recursion. For each cell (i, j) in grid2 that contains a 1, we start a DFS. As we traverse, if we find that a cell in grid2 is 1 but the corresponding cell in grid1 is 0, it means the island in grid2 is not a sub-island. During the traversal, we mark all visited cells in grid2 as 0 to avoid revisiting them.

3) Counting Sub-Islands:

We initialize a counter for sub-islands. If the DFS traversal confirms that an entire island in grid2 matches with grid1, we increment the sub-island counter.

# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
int countSubIslands(List<List<int>> grid1, List<List<int>> grid2) {

  final rows = grid1.length;
  final cols = grid1.first.length;

  bool isSubIsland = false;

  void dfs(int i, int j) {
    final List<(int, int)> stack = [];
    stack.add((i, j));

    while (stack.isNotEmpty) {
      final (r, c) = stack.removeLast();

      if (r < 0 || r >= rows || c < 0 || c >= cols || grid2[r][c] == 0) {
        continue;
      }

      if (grid1[r][c] != grid2[r][c]) {
        isSubIsland = false;
      }
      grid2[r][c] = 0;

      stack.add((r + 1, c));
      stack.add((r - 1, c));
      stack.add((r, c + 1));
      stack.add((r, c - 1));
    }
  }

  int count = 0;

  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      if (grid2[i][j] == 1) {
        isSubIsland = true;
        dfs(i, j);
        if (isSubIsland) {
          count++;
        }
      }
    }
  }

  return count;
}
```