# Elixir - Bitmask + Prefix XOR

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5790258/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5790258/)

---

# Code
```elixir []
defmodule Solution do
  @spec find_the_longest_substring(s :: String.t) :: integer
  def find_the_longest_substring(s) do
    s
    |> :binary.bin_to_list()
    |> Enum.map(fn
      ?a -> 0b1
      ?e -> 0b10
      ?i -> 0b100
      ?o -> 0b1000
      ?u -> 0b10000
      _ -> 0
    end)
    |> Enum.scan(&Bitwise.bxor/2)
    |> then(&[0 | &1])  # <-- This is extremely tricky and hacky.
    |> Enum.with_index()
    |> Enum.reduce(%{}, fn {n, j}, map ->
      Map.update(map, n, {j, j}, fn {i, _} ->
        {i, j}
      end)
    end)
    |> Map.values()
    |> Enum.map(fn {i, j} ->
      j - i
    end)
    |> Enum.max()
  end
end
```