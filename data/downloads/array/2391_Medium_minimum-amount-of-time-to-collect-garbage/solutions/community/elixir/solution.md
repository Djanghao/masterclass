# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4309487/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4309487/)

---

After reversing `travel`, prepend a `0` to make the code simpler.
# Code
```elixir
defmodule Solution do
  @spec garbage_collection(garbage :: [String.t], travel :: [integer]) :: integer
  def garbage_collection(garbage, travel) do
    [0 | Enum.reverse(travel)]
    |> Enum.zip(Enum.reverse(garbage))
    |> Enum.reduce({0, MapSet.new()}, fn {t, g}, {ans, set} ->
      ans = ans + t * MapSet.size(set) + String.length(g)
      set =
        String.to_charlist(g)
        |> MapSet.new()
        |> MapSet.union(set)
      {ans, set}
    end)
    |> elem(0)
  end
end
```