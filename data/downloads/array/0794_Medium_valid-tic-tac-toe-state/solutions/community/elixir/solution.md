# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/3220854/](https://leetcode.com/problems/valid-tic-tac-toe-state/solutions/3220854/)

---

Very interesting problem to implement.
# Code
```elixir
defmodule Solution do
  @spec valid_tic_tac_toe(board :: [String.t]) :: boolean
  def valid_tic_tac_toe(board) do
    chars =
      Enum.map(board, &String.to_charlist/1)
      |> Enum.concat()
    diff = Enum.count(chars, &(&1 == ?X)) -
          Enum.count(chars, &(&1 == ?O))
    win =
      Enum.with_index(chars)
      |> Map.new(fn {ch, i} -> {i, ch} end)
      |> winners()

    case {win, diff} do
      {[], _} -> diff in 0..1
      {[?X], 1} -> true
      {[?O], 0} -> true
      _ -> false
    end
  end

  defp winners(map) do
    [[0,1,2],[3,4,5],[6,7,8],
     [0,3,6],[1,4,7],[2,5,8],
     [0,4,8],[2,4,6]]
    |> Enum.flat_map(fn line ->
      Enum.map(line, &(Map.get(map, &1)))
      |> then(fn
        [w, w, w] when w != ?\\s -> [w]
        _ -> []
      end)
    end)
    |> Enum.uniq()
  end
end
```