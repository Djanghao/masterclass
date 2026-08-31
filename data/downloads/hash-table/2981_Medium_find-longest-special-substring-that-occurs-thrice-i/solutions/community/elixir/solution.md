# Elixir Solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6130895/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/6130895/)

---

# Code
```elixir []
defmodule Solution do
  @spec maximum_length(s :: String.t) :: integer
  def maximum_length(s) do
    Regex.scan(~r/(.)\\1*/, s, capture: :first)
    |> Enum.map(fn [<<c, _::binary>> = s] ->
      len = byte_size(s)
      
      for l <- 1..len, into: %{} do
        {{l, c}, len - l + 1}
      end
    end)
    |> Enum.reduce(fn map1, map2 ->
      Map.merge(map1, map2, fn _k, v1, v2 -> v1 + v2 end)
    end)
    |> Enum.sort(:desc)
    |> Enum.find(fn {_, count} ->
      count >= 3
    end)
    |> case do
      nil -> -1
      {{len, _}, _} -> len
    end
  end
end
```