# Elixir Map Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2995100/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2995100/)

---

```
defmodule Solution do
  @spec minimum_rounds(tasks :: [integer]) :: integer
  def minimum_rounds(tasks) do
    tasks
    |> Enum.reduce(%{}, fn t, acc -> Map.update(acc, t, 1, &(&1 + 1)) end)
    |> Enum.reduce_while(0, fn {_, v}, ans ->
      if v == 1 do
        {:halt, -1}
      else
        {:cont, ans + ceil(v / 3)}
      end
    end)
  end
end

```