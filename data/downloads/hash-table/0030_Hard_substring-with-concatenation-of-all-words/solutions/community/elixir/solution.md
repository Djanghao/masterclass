# Elixir Map Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/2419596/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/2419596/)

---

```elixir
defmodule Solution do
  @spec find_substring(s :: String.t(), words :: [String.t()]) :: [integer]
  def find_substring(s, words) do
    len = length(words)

    size = words |> hd() |> String.length()

    map = words_to_map(words)

    aux(String.graphemes(s), 0, map, size, len, [])
  end

  def words_to_map(words) do
    words
    |> Enum.reduce(%{}, fn w, acc ->
      Map.update(acc, w, 1, &(&1 + 1))
    end)
  end

  def aux(lst, index, map, size, len, ans) do
    if length(lst) < size * len do
      ans
    else
      m2 =
        lst
        |> Enum.take(size * len)
        |> Enum.chunk_every(size)
        |> Enum.map(&Enum.join/1)
        |> words_to_map()

      ans =
        if m2 == map do
          [index | ans]
        else
          ans
        end

      aux(tl(lst), index + 1, map, size, len, ans)
    end
  end
end
```