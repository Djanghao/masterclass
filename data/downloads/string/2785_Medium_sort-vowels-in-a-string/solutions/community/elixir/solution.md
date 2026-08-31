# Elixir Simple Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4008439/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4008439/)

---

```
defmodule Solution do
  @spec sort_vowels(s :: String.t()) :: String.t()
  def sort_vowels(s) do
    cs = String.graphemes(s)

    vowels = Enum.filter(cs, &is_vowel?/1) |> Enum.sort()

    cs
    |> Enum.reduce({[], vowels}, fn c, {ans, vs} ->
      if is_vowel?(c) do
        [v | vs] = vs
        {[v | ans], vs}
      else
        {[c | ans], vs}
      end
    end)
    |> elem(0)
    |> Enum.reverse()
    |> Enum.join("")
  end

  defp is_vowel?(c) do
    String.downcase(c) in ["a", "e", "i", "o", "u"]
  end
end

```