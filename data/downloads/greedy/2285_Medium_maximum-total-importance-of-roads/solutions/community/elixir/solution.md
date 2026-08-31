# Elixir solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/4238498/](https://leetcode.com/problems/maximum-total-importance-of-roads/solutions/4238498/)

---

# Intuition
Assign higher values to cities which are connected by more roads.
# Code
```
defmodule Solution do
  @spec maximum_importance(n :: integer, roads :: [[integer]]) :: integer
  def maximum_importance(n, roads) do
    Enum.concat(roads)
    |> Enum.frequencies()
    |> Map.values()
    |> Enum.sort(:desc)
    |> Enum.with_index(fn x, i -> x * (n - i) end)
    |> Enum.sum()
  end
end
```