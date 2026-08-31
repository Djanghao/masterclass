# C# BFS & DFS Solution

**Author:** saifudinhasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/5834374/](https://leetcode.com/problems/coloring-a-border/solutions/5834374/)

---

# Code
```csharp []
    public int[][] ColorBorderDFSIter(int[][] grid, int row, int col, int color) {
        HashSet<(int y, int x)> visited = new();
        int baseColor = grid[row][col];
        if (baseColor == color) return grid;
        Stack<(int x, int y)> s = new();
        s.Push((row, col));

        while (s.Count > 0) {
            (int y, int x) = s.Pop();
            if (
                y < 0 || x < 0 ||
                y >= grid.Length || x >= grid[0].Length ||
                grid[y][x] != baseColor || visited.Contains((y, x))
            ) continue;

            visited.Add((y, x));
        
            bool up = y - 1 >= 0 && (grid[y - 1][x] == baseColor || visited.Contains((y - 1, x)));
            bool left = x - 1 >= 0 && (grid[y][x - 1] == baseColor || visited.Contains((y, x - 1)));
            bool down = y + 1 < grid.Length && (grid[y + 1][x] == baseColor || visited.Contains((y + 1, x)));
            bool right = x + 1 < grid[0].Length && (grid[y][x + 1] == baseColor || visited.Contains((y, x + 1)));
            bool surrounded = up && left && down && right;
            
            if (!surrounded) grid[y][x] = color;

            s.Push((y + 1, x));
            s.Push((y - 1, x));
            s.Push((y, x + 1));
            s.Push((y, x - 1));
        }

        return grid;
    }
```
```csharp []
    public int[][] ColorBorderBFS(int[][] grid, int row, int col, int color) {
        HashSet<(int y, int x)> visited = new();
        int baseColor = grid[row][col];
        if (baseColor == color) return grid;
        Queue<(int x, int y)> q = new();
        q.Enqueue((row, col));

        while (q.Count > 0) {
            (int y, int x) = q.Dequeue();
            if (
                y < 0 || x < 0 ||
                y >= grid.Length || x >= grid[0].Length ||
                grid[y][x] != baseColor || visited.Contains((y, x))
            ) continue;

            visited.Add((y, x));
        
            bool up = y - 1 >= 0 && (grid[y - 1][x] == baseColor || visited.Contains((y - 1, x)));
            bool left = x - 1 >= 0 && (grid[y][x - 1] == baseColor || visited.Contains((y, x - 1)));
            bool down = y + 1 < grid.Length && (grid[y + 1][x] == baseColor || visited.Contains((y + 1, x)));
            bool right = x + 1 < grid[0].Length && (grid[y][x + 1] == baseColor || visited.Contains((y, x + 1)));
            bool surrounded = up && left && down && right;
            
            if (!surrounded) grid[y][x] = color;

            q.Enqueue((y + 1, x));
            q.Enqueue((y - 1, x));
            q.Enqueue((y, x + 1));
            q.Enqueue((y, x - 1));
        }

        return grid;
    }
```
```csharp []
    public int[][] ColorBorderDFS(int[][] grid, int row, int col, int color) {
        HashSet<(int y, int x)> visited = new();
        int baseColor = grid[row][col];
        if (baseColor == color) return grid;

        void DFS(int y, int x) {
            if (
                y < 0 || x < 0 ||
                y >= grid.Length || x >= grid[0].Length ||
                grid[y][x] != baseColor || visited.Contains((y, x))
            ) return;

            visited.Add((y, x));
        
            bool up = y - 1 >= 0 && (grid[y - 1][x] == baseColor || visited.Contains((y - 1, x)));
            bool left = x - 1 >= 0 && (grid[y][x - 1] == baseColor || visited.Contains((y, x - 1)));
            bool down = y + 1 < grid.Length && (grid[y + 1][x] == baseColor || visited.Contains((y + 1, x)));
            bool right = x + 1 < grid[0].Length && (grid[y][x + 1] == baseColor || visited.Contains((y, x + 1)));
            bool surrounded = up && left && down && right;
            
            if (!surrounded) grid[y][x] = color;

            DFS(y + 1, x);
            DFS(y - 1, x);
            DFS(y, x + 1);
            DFS(y, x - 1);
        }
        DFS(row, col);

        return grid;
    }

```