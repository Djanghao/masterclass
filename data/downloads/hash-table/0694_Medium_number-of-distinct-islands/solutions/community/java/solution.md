# [Java] DFS with Hash Set of Shape & Path Signature (detailed explanation)

**Author:** junhaowanggg
**Votes:** 17
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/426166/](https://leetcode.com/problems/number-of-distinct-islands/solutions/426166/)

---

Reference: [LeetCode](https://leetcode.com/problems/number-of-distinct-islands/)
Difficulty: <span class="orange">Medium</span>



## Problem

> Given a non-empty 2D array grid of `0`'s and `1`'s, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

> Count the number of distinct islands. An island is considered to be the same as another if and only if one island **can be translated (and not rotated or reflected)** to equal the other.

**Example:** 

```java
11000
11000
00011
00011 // 1

11011
10000
00001
11011 // 3

// Explanation:
11   1
1   11  // are considered different island shapes
```


## Analysis

### DFS (Shape)

The idea is to convert each island's lands to a form that is comparable. See the example below.

```java
0 0 0
0 0 0
0 1 0
0 1 1 // for this shape we have [(2, 1), (3, 1), (3, 2)].
// we should convert these coordinates to the following coordinates.

1 0 0 // for this shape we have [(0, 0), (1, 0), (1, 1)].
1 1 0
0 0 0
0 0 0
// then each "L" island has the same shape.
```

We also notice that a hash set list `[(0, 0), (1, 0), (1, 1)]` has the same hash code with a set list `[(1, 0), (1, 1), (0, 0)]`. The order does not count here.

One more thing! We also need to convert a coordinate `(x, y)` to a unique integer number, say `shapeId`. An obvious way to do that is by this conversion: `x * n + y`. Does this guarantee unique integer numbers?

**No**. Consider the case below:

```java
0 0 1 1 1  // shape 1
1 1 1 0 0
0 0 0 0 0
0 1 1 1 1  // shape 2
1 1 0 0 0
```

Unfortunately, two shapes are hashed to the hash code. It occurs because negative results exist. Since we take `(0, 2)` as the first coordinate, `(1, 0), (1, 1)` in the second row would be transformed to negative coordinates, which are then hashed to `shapeId`s that collide with the `1` in the previous row. To solve this problem, we use this conversion: `x * n * 2 + y`.


```java
int[][] direction = { {-1, 0}, {1, 0}, {0, -1}, {0, 1} };

public int numDistinctIslands(int[][] grid) {
  if (grid == null || grid.length == 0) {
    return 0;
  }
  int m = grid.length;
  int n = grid[0].length;
  Set<Set<Integer>> allShapes = new HashSet<>();
  boolean[][] marked = new boolean[m][n];
  // dfs
  for (int i = 0; i < m; ++i) {
    for (int j = 0; j < n; ++j) {
      if (!marked[i][j] && grid[i][j] == 1) {
        Set<Integer> shape = new HashSet<>();
        dfs(i, j, i, j, grid, marked, shape);
        if (shape.size() > 0) {
          allShapes.add(shape); // allShapes would do the checking for us
        }
      }
    }
  }
  return allShapes.size();
}

private void dfs(int i, int j, int i0, int j0, int[][] grid, boolean[][] marked, Set<Integer> shape) {
  int m = grid.length;
  int n = grid[0].length;
  marked[i][j] = true; // visit
  // transform to a top-left position
  int tx = i - i0, ty = j - j0;
  int shapeId = tx * n * 2 + ty; // critical!
  shape.add(shapeId);
  // for each neighbor
  for (int[] dir : direction) {
    int x = i + dir[0];
    int y = j + dir[1];
    if (x >= 0 && x < m && y >= 0 && y < n && !marked[x][y] && grid[x][y] == 1) {
      dfs(x, y, i0, j0, grid, marked, shape);
    }
  }
}
```

**Time:** `O(MN)`
**Space:** `O(MN)`



### DFS (Path Signature)

Use a similar idea but it is based on path signature. Let's define something like `directional id` as follows:

```java
        1/up
         |
3/left -   - 4/right
         |
        2/down
```

See the example below to know what it means:

```java
0 1 1 0
0 0 1 0
0 0 1 1
// Notice that the order of examining each direction does not matter, but it should be consistent throughout the process.
// The path ID is [0, 4, 2, 2, 4]. (the first element is always assigned as 0)
```

Again, the above strategy has an underlying issue. Consider the following example:

```java
1 1 0 // Path ID: [0, 4, 2, 4]
0 1 1
0 0 0
1 1 1 // Path ID: [0, 4, 2, 4]
0 1 0

// Add path.add(0)

1 1 0 // Path ID: [0, 4, 2, 4, 0, 0, 0]
0 1 1
0 0 0
1 1 1 // Path ID: [0, 4, 2, 0, 4, 0, 0]
0 1 0
```

This happens because of the order that we visit each node. It is not easy to understand why. The solution is to add `path.add(0)` to distinguish each call stack.

Last but not least, the path ID should be contained in an array or array list since the ordering matters.

```java
int[][] direction = { {-1, 0, 1}, {1, 0, 2}, {0, -1, 3}, {0, 1, 4} };

public int numDistinctIslands(int[][] grid) {
  if (grid == null || grid.length == 0) {
    return 0;
  }
  int m = grid.length;
  int n = grid[0].length;
  Set<List<Integer>> allPaths = new HashSet<>();
  boolean[][] marked = new boolean[m][n];
  // dfs
  for (int i = 0; i < m; ++i) {
    for (int j = 0; j < n; ++j) {
      if (!marked[i][j] && grid[i][j] == 1) {
        List<Integer> path = new ArrayList<>();
        dfs(i, j, 0, grid, marked, path);
        if (path.size() > 0) {
          allPaths.add(path); // allPaths would do the checking for us
        }
      }
    }
  }
  return allPaths.size();
}

private void dfs(int i, int j, int pid, int[][] grid, boolean[][] marked, List<Integer> path) {
  int m = grid.length;
  int n = grid[0].length;
  marked[i][j] = true; // visit
  path.add(pid); // add pid
  
  // for each neighbor
  for (int[] dir : direction) {
    int x = i + dir[0];
    int y = j + dir[1];
    int nextPid = dir[2];
    if (x >= 0 && x < m && y >= 0 && y < n && !marked[x][y] && grid[x][y] == 1) {
      dfs(x, y, nextPid, grid, marked, path);
    }
  }
  path.add(0); // critical!
}
```

**Time:** `O(MN)`
**Space:** `O(MN)`