# 🔥 Dijkstra's Algorithm & DFS Binary Search🔥 || Simple Fast and Easy || with Explanation 😈

**Author:** ayoubzulfiqar
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-with-minimum-effort/solutions/4050166/](https://leetcode.com/problems/path-with-minimum-effort/solutions/4050166/)

---

# \uD83D\uDD25 Dijkstra's Algorithm & DFS Binary Search\uD83D\uDD25 || Simple Fast and Easy || with Explanation \uD83D\uDE08\r
\r
\r
## Code - Dijkstra's Algorithm\r
\r
### Intuition\r
The goal of this code is to find the minimum effort required to traverse from the top-left corner to the bottom-right corner of a grid. Effort is defined as the maximum absolute difference in heights between adjacent cells. The code utilizes Dijkstra's algorithm to explore possible paths and find the minimum effort.\r
\r
### Approach\r
1. Initialize a 2D array `effort` to store the minimum effort required to reach each cell. Initialize `dx` and `dy` arrays to represent changes in x and y coordinates for four directions (up, down, left, right).\r
\r
2. Implement the `dijkstra` function, which performs Dijkstra's algorithm:\r
   - Initialize the number of rows and columns in the grid.\r
   - Create a 2D array `pq` to simulate a priority queue. Initialize `effort` values for each cell to a large value (1000 represents infinity).\r
   - Set the starting cell's effort to 0 and add it to the priority queue.\r
\r
3. While the priority queue is not empty, do the following:\r
   - Find the cell with the minimum `effort` value in the priority queue.\r
   - If the current cell is the bottom-right cell, return its `effort` value as the result.\r
   - Explore each of the four directions from the current cell:\r
     - Calculate the new `x` and `y` coordinates.\r
     - Check if the new coordinates are within bounds.\r
     - Calculate the new effort as the maximum of the current cell's effort and the absolute difference in heights between the current cell and the neighboring cell.\r
     - Update the `effort` for the neighboring cell if the new effort is smaller.\r
     - Mark the current cell as visited by setting its `effort` to a large value.\r
\r
4. Implement the `minimumEffortPath` function, which initializes `effort` values, runs `dijkstra` to find the minimum effort, and returns the result.\r
\r
### Space Complexity\r
- The space complexity is primarily determined by the 2D arrays `effort` and `pq`, both of size `rows` x `cols`.\r
- Therefore, the space complexity is O(`rows` * `cols`).\r
\r
### Time Complexity\r
- The code uses Dijkstra's algorithm to explore cells in the grid.\r
- In the worst case, each cell is visited at most once.\r
- The time complexity of Dijkstra's algorithm is O(`rows` * `cols`) since all cells are visited.\r
- Overall, the time complexity of the code is dominated by the Dijkstra's algorithm and is O(`rows` * `cols`).\r
\r
\r
```dart\r
import 'dart:math';\r
class Solution {\r
  List<List<int>> effort = List.generate(105, (_) => List<int>.filled(105, 0));\r
  List<int> dx = [0, 1, -1, 0];\r
  List<int> dy = [1, 0, 0, -1];\r
\r
  int dijkstra(List<List<int>> heights) {\r
    int rows = heights.length;\r
    int cols = heights[0].length;\r
\r
    List<List<int>> pq = List.generate(rows, (_) => List<int>.filled(cols, 0));\r
    for (int i = 0; i < rows; i++) {\r
      for (int j = 0; j < cols; j++) {\r
        pq[i][j] = i * cols + j;\r
        effort[i][j] = 1000;\r
      }\r
    }\r
\r
    effort[0][0] = 0;\r
    pq[0][0] = 0;\r
\r
    while (true) {\r
      int minEffort = 1000;\r
      int minEffortX = -1;\r
      int minEffortY = -1;\r
\r
      for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols; j++) {\r
          if (effort[i][j] < minEffort) {\r
            minEffort = effort[i][j];\r
            minEffortX = i;\r
            minEffortY = j;\r
          }\r
        }\r
      }\r
\r
      if (minEffortX == rows - 1 && minEffortY == cols - 1) {\r
        return minEffort;\r
      }\r
\r
      for (int i = 0; i < 4; i++) {\r
        int newX = minEffortX + dx[i];\r
        int newY = minEffortY + dy[i];\r
\r
        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {\r
          int newEffort = max(effort[minEffortX][minEffortY],\r
              (heights[minEffortX][minEffortY] - heights[newX][newY]).abs());\r
\r
          if (newEffort < effort[newX][newY]) {\r
            effort[newX][newY] = newEffort;\r
          }\r
        }\r
      }\r
\r
      // Mark this cell as visited by setting its effort to a very large value\r
      effort[minEffortX][minEffortY] = 1000;\r
    }\r
  }\r
\r
  int minimumEffortPath(List<List<int>> heights) {\r
    return dijkstra(heights);\r
  }\r
}\r
```\r
\r
## Code - DFS Binary Search\r
\r
## Intuition\r
This code seeks to find the minimum effort required to traverse a grid from the top-left corner to the bottom-right corner, considering effort as the maximum absolute difference in heights between adjacent cells. It employs binary search combined with depth-first search (DFS) to determine the minimum effort.\r
\r
## Approach\r
1. Initialize a 2D `visited` array to track visited cells and define `directionsX` and `directionsY` arrays for directional changes.\r
2. Implement the `dfs` function for DFS:\r
   - If the current cell is visited, return.\r
   - Mark the current cell as visited.\r
   - If the current cell is the bottom-right cell, return.\r
   - Explore neighboring cells, calculating new effort and recursively calling `dfs` if effort is within limit.\r
3. Implement `minimumEffortPath`:\r
   - Initialize grid dimensions, visited array, and binary search limits.\r
   - Perform binary search:\r
     - Calculate the mid-point effort.\r
     - Reset visited array and run `dfs` with the mid-point effort.\r
     - Adjust search range based on whether the bottom-right cell was reached.\r
   - Return the lower limit as the minimum effort.\r
\r
## Space Complexity\r
- Space complexity: O(rows * cols) due to the 2D `visited` array.\r
\r
## Time Complexity\r
- Time complexity: O(log(limit) * rows * cols), where `limit` is the upper bound on effort. DFS explores the grid once per binary search iteration.\r
\r
```dart\r
class Solution {\r
  late List<List<bool>> visited;\r
  final directionsX = [0, 1, -1, 0];\r
  final directionsY = [1, 0, 0, -1];\r
  late int numRows, numCols;\r
\r
  void dfs(int x, int y, int limitEffort, List<List<int>> heights) {\r
    if (visited[x][y]) return;\r
    visited[x][y] = true;\r
\r
    if (x == numRows - 1 && y == numCols - 1) return;\r
\r
    for (int i = 0; i < 4; i++) {\r
      int newX = x + directionsX[i];\r
      int newY = y + directionsY[i];\r
\r
      if (newX < 0 || newX >= numRows || newY < 0 || newY >= numCols) continue;\r
\r
      int newEffort = (heights[x][y] - heights[newX][newY]).abs();\r
      if (newEffort <= limitEffort) {\r
        dfs(newX, newY, limitEffort, heights);\r
      }\r
    }\r
  }\r
\r
  int minimumEffortPath(List<List<int>> heights) {\r
    numRows = heights.length;\r
    numCols = heights[0].length;\r
\r
    visited = List.generate(numRows, (i) => List<bool>.filled(numCols, false));\r
\r
    int lowerLimit = 0;\r
    int upperLimit = 1000000;\r
\r
    while (lowerLimit < upperLimit) {\r
      int mid = (upperLimit + lowerLimit) ~/ 2;\r
      for (var row in visited) {\r
        row.fillRange(0, numCols, false);\r
      }\r
\r
      dfs(0, 0, mid, heights);\r
\r
      if (visited[numRows - 1][numCols - 1]) {\r
        upperLimit = mid;\r
      } else {\r
        lowerLimit = mid + 1;\r
      }\r
    }\r
\r
    return lowerLimit;\r
  }\r
}\r
```\r
### Disclaimer:-\r
This Solution is not available in DART Programming language with is a bummer.\r
Hurts my feeling. But as a man we should implement it no matter what.\r
We are not bunch of wussies who gonna skip it if it's not available in one language we love.\r
Instead we will conquer the sea and rivers and cross the mountains to see what's lies beyond our horizons.\r
\r
\r
## [GitHub](https://github.com/ayoubzulfiqar/leetcode)\r
\r
Visit my github where I implemented more than 200+ Leetcode Solutions