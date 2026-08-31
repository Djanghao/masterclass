# C# with Optimization

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/5963079/](https://leetcode.com/problems/the-knights-tour/solutions/5963079/)

---

```csharp
using Coord = (int Row, int Col);

public class Solution
{
    const int NotVisited = int.MinValue;

    public int[][] TourOfKnight(int m, int n, int r, int c)
    {
        var board = InitBoard(m, n);
        var moves = InitMoves(m, n);
        TryVisit(r, c, step: 0);
        return board;

        bool TryVisit(int row, int col, int step)
        {
            if (board[row][col] != NotVisited)
                return false;

            board[row][col] = step++;
            if (step == m * n)
                return true;

            foreach (var (nr, nc) in moves[row][col])
                if (TryVisit(nr, nc, step))
                    return true;

            board[row][col] = NotVisited;
            return false;
        }
    }

    static int[][] InitBoard(int m, int n)
    {
        var board = new int[m][];

        for (var row = 0; row < m; row++)
        {
            board[row] = new int[n];
            Array.Fill(board[row], NotVisited);
        }

        return board;
    }

    static List<Coord>[][] InitMoves(int m, int n)
    {
        var moves = new List<Coord>[m][];

        for (var row = 0; row < m; row++)
            moves[row] = new List<Coord>[n];

        for (var row = 0; row < m; row++)
        for (var col = 0; col < n; col++)
        {
            var list = moves[row][col] = new();

            foreach (var (mr, mc) in Movements)
                if (IsValid(row + mr, col + mc))
                    list.Add((row + mr, col + mc));
        }

        for (var row = 0; row < m; row++)
        for (var col = 0; col < n; col++)
        {
            var list = moves[row][col];

            list.Sort((a, b) =>
                moves[a.Row][a.Col].Count -
                moves[b.Row][b.Col].Count);
        }

        return moves;

        bool IsValid(int row, int col) =>
            row >= 0 && row < m && col >= 0 && col < n;
    }

    static Coord[] Movements =
    [
        (-1, -2), (+1, -2), (-2, -1), (+2, -1),
        (+1, +2), (-1, +2), (+2, +1), (-2, +1),
    ];
}
```