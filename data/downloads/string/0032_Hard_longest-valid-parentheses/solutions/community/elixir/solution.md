# Elixir Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/6111341/](https://leetcode.com/problems/longest-valid-parentheses/solutions/6111341/)

---

# Approach
1. Scan the string `s` for the indices of every pair of empty parens `()`. Those pairs are valid.
2. For each pair of indices, try expanding them to the farthest pair of parens `(((...()...)))`.
3. Merge the pairs that are adjacent to each other.
4. Loop from step 2 to 3 until the list of indices does not change.
5. Calculate all the lengths of those ranges and find the max.

# Code
```elixir []
defmodule Solution do
  @spec longest_valid_parentheses(s :: String.t) :: integer
  def longest_valid_parentheses(s) do
    s
    |> scan(0, [])
    |> Stream.iterate(fn ranges ->
      ranges
      |> expand(s, [])
      |> merge([])
    end)
    |> Stream.chunk_every(2, 1)
    |> Enum.find(fn [a, b] -> a == b end)
    |> hd()
    |> Stream.map(fn {a, b} -> b - a + 1 end)
    |> Enum.max(fn -> 0 end)
  end

  defp scan(<<?(, ?), s::binary>>, i, acc) do
    scan(s, i + 2, [{i, i + 1} | acc])
  end

  defp scan(<<_, s::binary>>, i, acc) do
    scan(s, i + 1, acc)
  end

  defp scan(<<>>, _i, acc) do
    acc
  end

  defp expand([], _s, acc) do
    acc
  end

  defp expand([h | t], s, acc) do
    expand(t, s, [expand_one(h, s) | acc])
  end

  defp expand_one({i, j}, s) when i == 0 or j == byte_size(s) - 1 do
    {i, j}
  end

  defp expand_one({i, j}, s) do
    cond do
      :binary.at(s, i - 1) != ?( -> {i, j}
      :binary.at(s, j + 1) != ?) -> {i, j}
      true -> expand_one({i - 1, j + 1}, s)
    end
  end

  defp merge([{a, b} | t], [{c, d} | acc]) when d + 1 == a do
    merge(t, [{c, b} | acc])
  end

  defp merge([h | t], acc) do
    merge(t, [h | acc])
  end

  defp merge([], acc) do
    acc
  end
end
```