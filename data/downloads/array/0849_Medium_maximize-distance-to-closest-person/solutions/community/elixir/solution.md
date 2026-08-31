# Single pass Elixir solution (recursive)

**Author:** aedwardg
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/2033143/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/2033143/)

---

```
defmodule Solution do
  @spec max_dist_to_closest(seats :: [integer]) :: integer
  def max_dist_to_closest([a, b]), do: 1
  def max_dist_to_closest(seats) do
    traverse(seats, hd(seats), 0, 0)
  end
    
  defp traverse([], _, curr_max, curr), do: max(curr_max, curr)
  defp traverse([0 | t], first, curr_max, curr), do: traverse(t, first, curr_max, curr + 1)
  defp traverse([_ | t], 0, 0, curr), do: traverse(t, 0, max(0, curr), 0)
  defp traverse([_ | t], first, curr_max, curr), do: traverse(t, first, max(curr_max, div(curr + 1, 2)), 0)
end
```