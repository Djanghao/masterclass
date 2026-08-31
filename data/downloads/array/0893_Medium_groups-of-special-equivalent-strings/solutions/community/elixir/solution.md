# Elixir : 2 Maps for 1 word

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/2928026/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/2928026/)

---

Convert each word to 2 Maps, which count odd index chars and even index chars respectively. Words belonging to the same group will have identical result Maps.
# Code
```elixir
defmodule Solution do
  @spec num_special_equiv_groups(words :: [String.t]) :: integer
  def num_special_equiv_groups(words) do
    Enum.map(words, &special/1)
    |> Enum.uniq()
    |> Enum.count()
  end

  defp special(word) do
    String.codepoints(word)
    |> Enum.with_index()
    |> Enum.reduce({%{}, %{}}, fn {c, i}, {odd, even} ->
      if rem(i, 2) == 1 do
        {Map.update(odd, c, 1, &(&1 + 1)), even}
      else
        {odd, Map.update(even, c, 1, &(&1 + 1))}
      end
    end)
  end
end
```