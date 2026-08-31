# Why Use BFS? Search Every Possible Path vs Search A Possible Path

**Author:** longluo
**Votes:** 81
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2043319/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2043319/)

---

[Leetcode](https://leetcode.com/) [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix).

# Intuition

1. If we want to find **a possible path**, **DFS** will be more efficient. Because DFS will return a possible path if found, while it may not the shortest path.  

2. **BFS** will try **every possible path** at the same time. 

3. If we want to find the shortest of all possible paths, **BFS is more efficient**. It's impossible for DFS to determine which is the shortest before trying all possible paths. 

# BFS

Use BFS to **Level Traversal**.

```java
    public int shortestPathBinaryMatrix(int[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return -1;
        }

        int ans = 0;

        int row = grid.length;
        int col = grid[0].length;

        if (grid[0][0] == 1 || grid[row - 1][col - 1] == 1) {
            return -1;
        }

        int[][] dirs = {{-1, -1}, {-1, 0}, {-1, 1}, {0, -1}, {0, 1}, {1, -1}, {1, 0}, {1, 1}};

        boolean[][] visited = new boolean[row][col];

        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0, 0});
        visited[0][0] = true;

        while (!queue.isEmpty()) {
            int size = queue.size();
            ans++;

            for (int i = 0; i < size; i++) {
                int[] curPos = queue.poll();

                if (curPos[0] == row - 1 && curPos[1] == col - 1) {
                    return ans;
                }

                for (int[] dir : dirs) {
                    int nextX = curPos[0] + dir[0];
                    int nextY = curPos[1] + dir[1];

                    if (nextX < 0 || nextX >= row || nextY < 0 || nextY >= col || visited[nextX][nextY] || grid[nextX][nextY] == 1) {
                        continue;
                    }

                    visited[nextX][nextY] = true;
                    queue.offer(new int[]{nextX, nextY});
                }
            }
        }

        return -1;
    }
```

## Analysis

- **Time Complexity**: $O(n^2)$.
- **Space Complexity**: $O(n^2)$.

------------

All suggestions are welcome. 
If you have any query or suggestion please comment below.
Please upvote\uD83D\uDC4D if you like\uD83D\uDC97 it. Thank you:-)

Explore More [Leetcode Solutions](https://leetcode.com/discuss/general-discussion/1868912/My-Leetcode-Solutions-All-In-One). \uD83D\uDE09\uD83D\uDE03\uD83D\uDC97
