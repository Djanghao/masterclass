# Dynamic programming

**Author:** harfangk
**Votes:** 0
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/3767567/](https://leetcode.com/problems/wildcard-matching/solutions/3767567/)

---

# Code
```
defmodule Solution do
  @spec is_match(s :: String.t, p :: String.t) :: boolean
  def is_match("", ""), do: true
  def is_match(s, ""), do: false
  def is_match(s, p) do
    dp = 
      (for i <- 0..String.length(s), j <- 0..String.length(p), into: %{}, do: {{i, j}, false})
      |> Map.put({0, 0}, true)
      |> handle_leading_wildcards(p, 0)

    map_s = string_to_map(s)
    map_p = string_to_map(p)

    result = 
      Enum.reduce(1..String.length(s), dp, fn i, outer_acc ->
        Enum.reduce(1..String.length(p), outer_acc, fn j, inner_acc -> 
          if (<<Map.get(map_p, j - 1)>> == "*") do
            val = Map.get(inner_acc, {i - 1, j}, false) or Map.get(inner_acc, {i, j - 1}, false)
            Map.put(inner_acc, {i, j}, val)
          else
            val = (Map.get(map_s, i - 1) == Map.get(map_p, j - 1) or <<Map.get(map_p, j - 1)>> == "?") and Map.get(inner_acc, {i - 1, j - 1}, false)
            Map.put(inner_acc, {i, j}, val)
          end
        end)
      end)
    Map.get(result, {String.length(s), String.length(p)})
  end

  defp handle_leading_wildcards(map, "", _), do: map
  defp handle_leading_wildcards(map, <<p::utf8, ps::binary>>, j) do
    if (<<p>> == "*") do
      map
      |> Map.put({0, j + 1}, true)
      |> handle_leading_wildcards(ps, j + 1)
    else
      map
    end
  end

  defp string_to_map(s), do: string_to_map(s, %{}, 0)
  defp string_to_map("", map, _), do: map
  defp string_to_map(<<c::utf8, cs::binary>>, map, i), do: string_to_map(cs, Map.put(map, i, c), i + 1)
end

```