# reduce_while solution in Elixir

**Author:** DJAruun
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-crossing/solutions/5524384/](https://leetcode.com/problems/path-crossing/solutions/5524384/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
defmodule Solution do
  @spec is_path_crossing(path :: String.t) :: boolean
  def is_path_crossing(path) do
      path
      |> String.graphemes()
      |> Enum.reduce_while({false, [{0, 0}]}, fn v, {crossed, acc} ->
        {x, y} = List.first(acc)

        current_coord = case v do
          "N" -> {x, y - 1}
          "S" -> {x, y + 1}
          "W" -> {x - 1, y}
          "E" -> {x + 1, y}
        end

        if Enum.member?(acc, current_coord) do
          {:halt, {true}}
        else
          {:cont, {crossed, [current_coord | acc]}}
        end
      end)
      |> elem(0)
  end
end
```