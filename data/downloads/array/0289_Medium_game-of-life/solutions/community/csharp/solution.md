# Short two-pass in-place solution

**Author:** anikit
**Votes:** 7
**Link:** [https://leetcode.com/problems/game-of-life/solutions/1939049/](https://leetcode.com/problems/game-of-life/solutions/1939049/)

---

**Idea:** Use the second bit of each cell to store its new state.

**Pass 1:** For each cell, count its neighbors and, if it stays or becomes alive, set its second bit (`+= 2`).
**Pass 2:** Discard the previous state which is stored in the first bit (`/= 2`).

**Notes:**
- When counting neighbors, only consider the first bit (`% 2`)
- When counting neighbors, it's OK to count the cell itself. We only need to modify the survival/born condition a little.

```csharp
public void GameOfLife(int[][] board)
{
    int m = board.Length;
    int n = board[0].Length;
    
	// Pass 1: Calculate the new state
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
        {
			// count neighbors
			int count = 0;
            for (int p = Math.Max(i - 1, 0); p < Math.Min(i + 2, m); p++)
                for (int q = Math.Max(j - 1, 0); q < Math.Min(j + 2, n); q++)
                    count += board[p][q] % 2;
					
            if (count == 3 || count - board[i][j] == 3)
                board[i][j] += 2;
        }
    
	// Pass 2: Discard the previous state
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            board[i][j] /= 2;
}
```