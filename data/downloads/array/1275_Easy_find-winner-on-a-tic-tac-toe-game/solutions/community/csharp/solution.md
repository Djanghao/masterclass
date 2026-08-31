# C# | Fast and Easy to read solution

**Author:** neerex
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/3247372/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/3247372/)

---


# Code
```
public class Solution 
{
    public string Tictactoe(int[][] moves) 
    {
        // 0 3 6
        // 1 4 7
        // 2 5 8
        if (moves.Length < 5) return "Pending";
        int[][] winCombinations = new int[][]
        {
            new[] {0,1,2}, new[] {3,4,5}, new[] {6,7,8}, // verticals
            new[] {0,4,8}, new[] {2,4,6},                // diagonals
            new[] {0,3,6}, new[] {1,4,7}, new[] {2,5,8}  // horizontals
        };
        int[] x = new int[9];
        int[] o = new int[9];
        bool xMove = true;

        foreach (var move in moves)
        {
            var index = move[0] + move[1] * 3;
            if (xMove) x[index] = 1;
            else o[index] = 1;
            xMove = !xMove;
        }

        foreach (var combination in winCombinations)
        {
            if (combination.All(i => x[i] == 1)) return "A";
            if (combination.All(i => o[i] == 1)) return "B";
        }

        return moves.Length == 9 ? "Draw" : "Pending";
    }
}
```