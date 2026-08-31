# [Java] Readable DFS + explanation. O(nm) time. (Bonus: BFS)

**Author:** 133c7
**Votes:** 11
**Link:** [https://leetcode.com/problems/the-maze/solutions/1141843/](https://leetcode.com/problems/the-maze/solutions/1141843/)

---

**Idea**

* In each DFS call, try all four directions. Move as far as possible until we hit a wall.
* At the beginning of a DFS call, check if we have arrived at the destination.
* Keep track of visited cells to avoid an infinite loop.

**Code**

```java
class Solution {
    public boolean hasPath(int[][] maze, int[] start, int[] destination) {
        int rows = maze.length;
        int cols = maze[0].length;

        boolean[][] visited = new boolean[rows][cols];
        
        return dfs(maze, start[0], start[1], destination, visited);
    }
    
    private boolean dfs(int[][] maze, int row, int col, int[] destination, boolean[][] visited) {
	    // we have arrived at the destination
        if (row == destination[0] && col == destination[1]) {
            return true;
        }
        if (visited[row][col]) {
            return false;
        }
        
		// mark visited so that we don't visit again.
        visited[row][col] = true;

        // try to move all four directions
        return moveThenDFS(maze, row, col, destination, 1, 0, visited) ||
               moveThenDFS(maze, row, col, destination, -1, 0, visited) ||
               moveThenDFS(maze, row, col, destination, 0, 1, visited) ||
               moveThenDFS(maze, row, col, destination, 0, -1, visited);
    }
    
	// moveThenDFS tries to move as far as it can to the given direciton, then does DFS.
    private boolean moveThenDFS(int[][] maze, int row, int col, int[] destination, int drow, int dcol, boolean[][] visited) { 
        int rows = maze.length;
        int cols = maze[0].length;

        int r = row;
        int c = col;
        while (r + drow >= 0 && r + drow <= rows - 1 && c + dcol >= 0 && c + dcol <= cols - 1 && maze[r + drow][c + dcol] == 0) {
            r = r + drow;
            c = c + dcol;
        }
        
        return dfs(maze, r, c, destination, visited);
    }
}
```

**Analysis**

Let N = |rows|, M = |cols|

* Time comlexity: ~O(NM) because we visit each cell once at most.
* Space complexity: ~O(NM) due to the `visited` array and call stack.

**Bonus**

We can use BFS, too.

```java
class Solution {
    private class Cell {
        public int row;
        public int col;
        
        public Cell(int row, int col) {
            this.row = row;
            this.col = col;
        }
    }
    
    private int[][] dirs = new int[][]{{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
    
    public boolean hasPath(int[][] maze, int[] start, int[] destination) {
        int rows = maze.length;
        int cols = maze[0].length;

        boolean[][] visited = new boolean[rows][cols];
        
        Deque<Cell> q = new ArrayDeque<>();
        q.addFirst(new Cell(start[0], start[1]));
        visited[start[0]][start[1]] = true;

        while (q.size() > 0) {
            int size = q.size();
            
            for (int i = 0; i < size; i++) {
                Cell cell = q.removeLast();
                
                int r = cell.row;
                int c = cell.col;
                
                if (r == destination[0] && c == destination[1]) {
                    return true;
                }
                
                for (int[] dir : dirs) {
                    int nextRow = r;
                    int nextCol = c;
                    while (nextRow + dir[0] >= 0 && nextRow + dir[0] < rows && nextCol + dir[1] >= 0 && nextCol + dir[1] < cols && maze[nextRow + dir[0]][nextCol + dir[1]] == 0) {
                        nextRow = nextRow + dir[0];
                        nextCol = nextCol + dir[1];
                    }
                    
                    if (!visited[nextRow][nextCol]) {
                        q.addFirst(new Cell(nextRow, nextCol));
                        visited[nextRow][nextCol] = true;
                    }
                }
            }
        }
        
        return false;
    }
}
```