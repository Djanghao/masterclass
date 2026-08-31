# Clean solution with BFS and sorting

**Author:** ilya-chumakov
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/6015977/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/6015977/)

---

# Approach
1. Use BFS + visited set to iterate over all cells in the grid.
2. Add each cell that satisfies conditions to a list.
3. Sort the list, take the first `k` cells.

# Complexity
Let's define $$N = rows * columns $$, it's the maximum size of resulting one-dimentional cell list. Then:

- Time complexity: $$O(N * log(N))$$, because the list is sorted.

- Space complexity: $$O(N)$$: as a hash set of size N is created, and sorting by `OrderBy` also takes $$O(N)$$.

# Code
```csharp []
public record struct Point(int Row, int Column, int Distance);

public class Solution
{
    private static readonly int[][] Moves = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    private const int Wall = 0;
    private const int Empty = 1;

    public IList<IList<int>> HighestRankedKItems(
        int[][] grid, int[] pricing, int[] start, int k)
    {
        var q = new Queue<Point>();
        q.Enqueue(new Point(start[0], start[1], 0));
        var items = new List<Point>();
        var visited = new HashSet<(int, int)>();

        while (q.Count > 0)
        {
            int layerSize = q.Count;

            while (layerSize-- > 0)
            {
                var point = q.Dequeue();
                int r = point.Row;
                int c = point.Column;

                if (!visited.Add((r, c))) continue;

                if (IsInPriceRange(r, c, grid, pricing))
                {
                    items.Add(point);
                }

                foreach (var move in Moves)
                {
                    if (TryCreatePointFrom(grid, point, move, out Point dest))
                    {
                        q.Enqueue(dest);
                    }
                }
            }
        }

        return items
            .OrderBy(p => p.Distance)
            .ThenBy(p => grid[p.Row][p.Column])
            .ThenBy(p => p.Row)
            .ThenBy(p => p.Column)
            .Take(k)
            .Select(IList<int> (p) => new List<int> { p.Row, p.Column })
            .ToList();
    }

    private static bool TryCreatePointFrom(
        int[][] grid, Point src, int[] move, out Point dest)
    {
        int row = src.Row + move[0];
        int column = src.Column + move[1];

        if (!IsValid(row, column, grid.Length, grid[0].Length)
            || grid[row][column] == Wall)
        {
            dest = default;
            return false;
        }

        dest = new Point(row, column, src.Distance + 1);
        return true;
    }

    private static bool IsInPriceRange(int r, int c, int[][] grid, int[] pricing)
    {
        int price = grid[r][c];

        return price != Empty && pricing[0] <= price && price <= pricing[1];
    }

    private static bool IsValid(int r, int c, int rows, int columns)
    {
        return 0 <= r && r < rows && 0 <= c && c < columns;
    }
}
```