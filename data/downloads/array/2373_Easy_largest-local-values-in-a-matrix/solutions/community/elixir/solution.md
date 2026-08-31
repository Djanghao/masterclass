# Elixir simple solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5145381/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5145381/)

---

# Approach
2 passes of comparing 3 items is a little bit faster than comparing 9 items once.

# Code
```
defmodule Solution do
  @spec largest_local(grid :: [[integer]]) :: [[integer]]
  def largest_local(grid) do
    Enum.map(grid, fn row ->
      Enum.chunk_every(row, 3, 1, :discard)
      |> Enum.map(&Enum.max/1)
    end)
    |> Enum.chunk_every(3, 1, :discard)
    |> Enum.map(fn chunk ->
      Enum.zip_with(chunk, &Enum.max/1)
    end)
  end
end
```