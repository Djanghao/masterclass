# Elixir - tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5757421/](https://leetcode.com/problems/snake-in-matrix/solutions/5757421/)

---

# Complexity
- Time complexity:
O(n) where n is the number of commands

- Space complexity:
O(1)

# Code
```elixir []
defmodule Solution do
  @spec final_position_of_snake(n :: integer, commands :: [String.t]) :: integer
  def final_position_of_snake(n, commands), do: do_final_position(n, commands, [0, 0])

  defp do_final_position(n, [], [i, j]), do: (i * n) + j
  defp do_final_position(n, [command | rest], [i, j]) do
    new_loc = case command do
      "UP" -> [i - 1, j]
      "DOWN" -> [i + 1, j]
      "LEFT" -> [i, j - 1]
      "RIGHT" -> [i, j + 1]
    end
    do_final_position(n, rest, new_loc)
  end
end
```