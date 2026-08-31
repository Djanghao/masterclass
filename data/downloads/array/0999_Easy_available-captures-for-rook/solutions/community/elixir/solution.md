# Elixir, uses tuple

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/4305099/](https://leetcode.com/problems/available-captures-for-rook/solutions/4305099/)

---

# Approach
Converts the grid into a tuple for index based access. Traverses the tuple and finds the rook location. Traverses in four directions from the rook's location to calculate the rook captures.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec num_rook_captures(board :: [[char]]) :: integer
  def num_rook_captures(board) do 
    board = Enum.map(board, &List.to_tuple/1) |> List.to_tuple
    {rk_x, rk_y} = find_rook_loc(board, 7, 7)
    get_count(board, {rk_x, rk_y - 1}, :left) + get_count(board, {rk_x, rk_y + 1}, :right) +
    get_count(board, {rk_x - 1, rk_y}, :top) + get_count(board, {rk_x + 1, rk_y}, :bottom)
  end

  defp find_rook_loc(board, i, j) when j >= 0, do: if get_el(board, i, j) == ?R, do: {i, j}, else: find_rook_loc(board, i, j - 1)
  defp find_rook_loc(board, i, _), do: find_rook_loc(board, i - 1, 7)

  defp get_count(board, {x, y}, dir) when (x >= 0 and x <= 7) and (y >= 0 and  y <= 7) do
    case get_el(board, x, y) do
      ?. -> get_count(board, update_coord(x, y, dir), dir)
      ?p -> 1
      _ -> 0
    end
  end 
  defp get_count(_, _, _), do: 0

  defp update_coord(x, y, dir) do
    case dir do
      :left -> {x, y - 1}
      :right -> {x, y + 1}
      :top -> {x - 1, y}
      :bottom -> {x + 1, y}
    end
  end

  defp get_el(board, i, j), do: elem(board, i) |> elem(j)
end
```