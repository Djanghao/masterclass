# C & Elixir - Bottom-up Dynamic Programming

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/3616333/](https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/3616333/)

---

We don't need to store all the columns in the memo. We just need to keep the memo of the previous (or should I say the next?) column while populating the memo of the current column, thus we just need to keep two columns of memo.

# Complexity
- **Time Complexity**
    - C: $$O(R \\cdot C)$$
    - Elixir: $$O(C \\cdot R \\log R)$$
-  **Space Complexity**
    - C: $$O(R)$$
    - Elixir: $$O(R \\log R)$$ (ignoring garbage)

Where $$R$$ is the number of rows and $$C$$ is the number of columns of the input matrix.

# Code
```C []
static inline int max(int a, int b) {
  return a > b ? a : b;
}

int maxMoves(int** grid, int rows, int* pcols) {
  int cols = pcols[0];

  int memo[rows][2];

  int prev = 0;

  for (int i = 0; i < rows; i++) {
    memo[i][prev] = 0;
  }

  for (int j = cols - 2; j >= 0; j--) {
    int curr = !prev;

    for (int i = 0; i < rows; i++) {
      int val = grid[i][j];

      int max_moves = 0;

      if (i - 1 >= 0 && grid[i - 1][j + 1] > val) {
        max_moves = max(max_moves, memo[i - 1][prev] + 1);
      }

      if (grid[i][j + 1] > val) {
        max_moves = max(max_moves, memo[i][prev] + 1);
      }

      if (i + 1 < rows && grid[i + 1][j + 1] > val) {
        max_moves = max(max_moves, memo[i + 1][prev] + 1);
      }

      memo[i][curr] = max_moves;
    }

    prev = curr;
  }

  int ret = 0;

  for (int i = 0; i < rows; i++) {
    ret = max(ret, memo[i][prev]);
  }

  return ret;
}
```

```Elixir []
defmodule Solution do
  @spec max_moves(grid :: [[integer]]) :: integer
  def max_moves(grid) do
    rows = length(grid)
    cols = length(hd(grid))

    grid =
      for {row, i} <- Stream.with_index(grid, 1),
          {val, j} <- Stream.with_index(row, 1),
          into: %{},
          do: {{i, j}, val}

    memo = Map.new(1..rows, &{&1, 0})

    Enum.reduce((cols - 1)..1//-1, memo, fn j, prev_memo ->
      Enum.reduce(1..rows, %{}, fn i, curr_memo ->
        coord = {i, j}
        val = grid[coord]

        [
          i - 1,
          i,
          i + 1
        ]
        |> Enum.reject(& &1 < 1 or &1 > rows)
        |> Enum.filter(&grid[{&1, j + 1}] > val)
        |> Enum.map(&prev_memo[&1] + 1)
        |> Enum.max(fn -> 0 end)
        |> then(&Map.put(curr_memo, i, &1))
      end)
    end)
    |> Map.values()
    |> Enum.max()
  end
end
```