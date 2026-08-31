# Shape as String solution

**Author:** jsung23
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/5367867/](https://leetcode.com/problems/number-of-distinct-islands/solutions/5367867/)

---

# Intuition
We need a representation of the shape of each island such that islands' shapes can be compared.
One way to represent the islands' shapes is through a string representation where the string is comprised of (x,y) coordinates for each tile of the island, starting from the same origin in the context of the island shape e.g., from the bottom/top and left/right.

# Approach
To map each island is a straightforward dfs problem that can be accomplished with a `HashSet<(int, int)>` to track visited tiles and a recursive call to add each neighboring tile that is part of the island.

The order of the tiles for a given island matters for the string representation of the island's shape. We can accomplish a consistent ordering scheme through the `SortedSet<(int, int)> `in C# which sorts first by the first int, then the second.

After each island is mapped out, we can build a string representation of its shape through iterating on its `SortedSet<(int,int)> `of tiles and simply try to add the island's signature shape in string representation to a `HashMap<string>`.

`HashMap<string>.Count` returns the number of distinct islands.

# Complexity
- Time complexity:
O(N*M) for the nested loop though the amount of work the loop does is counterbalanced by the `MapIsland` recursive function.

- Space complexity:
O(N) for the `HashSet<string>` and `HashSet<(int,int)>`.

# Code
```
public class Solution {
    public int NumDistinctIslands(int[][] grid) {
        HashSet<string> uniqueIslandsSet = new HashSet<string>();

        HashSet<(int, int)> visited = new();        
        for (int i = 0; i < grid.Length; i++) {
            for (int j = 0; j < grid[i].Length; j++) {
                if (grid[i][j] == 1) {
                    if (visited.Contains((i, j))) {
                        continue;
                    }
                    Island isle = MapIsland(grid, new Island(), i, j, visited);
                    uniqueIslandsSet.Add(isle.GetShapeAsString());
                }
            }
        }
        return uniqueIslandsSet.Count;
    }

    // recursively map island
    public Island MapIsland(
        int[][] grid,
        Island isle, int x, int y, 
        HashSet<(int, int)> visited
    ) {
        visited.Add((x, y));
        isle.Add(x, y);
        // go in each of 4 directions
        (int, int) up = (0, -1);
        (int, int) down = (0, 1);
        (int, int) left = (-1, 0);
        (int, int) right = (1, 0);
        List<(int, int)> list = new() {up, down, left, right};
        foreach((int, int) t in list) {
            int newX = x + t.Item1;
            int newY = y + t.Item2;
            if (newX < 0 || newX >= grid.Length) {
                continue;
            }
            if (newY < 0 || newY >= grid[x].Length) {
                continue;
            }
            if (visited.Contains((newX, newY))) {
                continue;
            }

            if (grid[newX][newY] == 1) {
                MapIsland(grid, isle, newX, newY, visited);
            }
        }
        return isle;
    }
}

public class Island {
    public SortedSet<(int, int)> set;
    public Island() {
        set = new();
    }
    public void Add(int x, int y) {
        set.Add((x,y));
    }
    public string GetShapeAsString() {
        bool isFirst = true;
        int xOffset = 0;
        int yOffset = 0;
        StringBuilder result = new();
        foreach((int, int) t in set) {
            if (isFirst) {
                xOffset = t.Item1;
                yOffset = t.Item2;
                isFirst = false;
            }
            result.Append((t.Item1 - xOffset).ToString());
            result.Append((t.Item2 - yOffset).ToString());
        }
        return result.ToString();
    }
    public void PrintContents() {
        foreach((int, int) t in set) {
            Console.WriteLine("[" + t.Item1 + "]" + "[" + t.Item2 + "]");
        }
    }
}
```