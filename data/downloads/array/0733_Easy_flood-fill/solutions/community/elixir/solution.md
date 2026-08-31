# Elixir, recursion, uses tuples

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/flood-fill/solutions/4255228/](https://leetcode.com/problems/flood-fill/solutions/4255228/)

---

# Approach
Converst the list into tuples from index based access. Uses recursion to start from the source pixel and recurses to adjacent pixels in four directions, until the complete grid has been updated.

# Complexity
- Time complexity:
O(m * n) where m and n are the number of rows and columns

- Space complexity:
O(m * n)

# Code
```
defmodule Solution do
  @spec flood_fill(image :: [[integer]], sr :: integer, sc :: integer, color :: integer) :: [[integer]]
  def flood_fill(image, sr, sc, color) do
    grid = Enum.map(image, &List.to_tuple/1) |> List.to_tuple
    src_col = get_el(grid, sr, sc)
    do_flood_fill(grid, sr, sc, src_col, color) |>
    Tuple.to_list |> Enum.map(&Tuple.to_list/1) 
  end

  defp do_flood_fill(grid, _, _, src_col, tgt_col) when src_col == tgt_col, do: grid
  defp do_flood_fill(grid, x, y, src_col, tgt_col) do
    cur_col = get_el(grid, x, y)
    cond do
      cur_col != src_col -> grid
      true -> 
        set_el(grid, x, y, tgt_col) |>
        do_flood_fill(x - 1, y, src_col, tgt_col) |>
        do_flood_fill(x + 1, y, src_col, tgt_col) |>
        do_flood_fill(x, y - 1, src_col, tgt_col) |>
        do_flood_fill(x, y + 1, src_col, tgt_col)
    end
  end

  defp get_el(grid, r, c) do
    elem(grid, r) |> elem(c)
  rescue
    _ -> nil
  end

  defp set_el(grid, r, c, val) do
    row = elem(grid, r) |> put_elem(c, val)
    put_elem(grid, r, row)
  end
end
```