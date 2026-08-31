# Initial Enum.zip and then Pattern Matching all the way

**Author:** dnhoangson
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463970/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463970/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
Idk

# Code
```
defmodule Solution do
  @spec min_cost(colors :: String.t, needed_time :: [integer]) :: integer
  def min_cost(colors, needed_time) do
    color_graph = colors |> String.graphemes()

    Enum.zip(color_graph, needed_time)
    |> traverse(0)
  end

  defp traverse([], accumulator), do: accumulator

  defp traverse([{char, time_a} | [{char, time_b} | tail]], accumulator) when time_a > time_b,
    do: traverse([{char, time_a} | tail], accumulator + time_b)

  defp traverse([{char, time_a} | [{char, time_b} | tail]], accumulator) when time_a <= time_b,
    do: traverse([{char, time_b} | tail], accumulator + time_a)

  defp traverse([_ | tail], accumulator), do: traverse(tail, accumulator)
end
```