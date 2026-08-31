# Elixir: single pipeline

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/goat-latin/solutions/5018751/](https://leetcode.com/problems/goat-latin/solutions/5018751/)

---

You could do this all in one pass (including the String.split/1). Further, you could use `Stream` equivalents to the `Enum` functions.
However, the strings are short (<= 150 chars), so `Stream` may not be practically more performant. I also found the sgmented bits to be more readable/more compartamized to each part of the problem (over marginal performance gains)

# Code
```
defmodule Solution do
  @spec to_goat_latin(sentence :: String.t) :: String.t
  def to_goat_latin(sentence) do
    sentence
    |> String.split()
    |> Enum.map(fn
      <<x, _::binary>> = word when x in ~c"aeioiuAEIOU" -> word
      <<x, rest::binary>> -> rest <> <<x>>
    end)
    |> Enum.with_index(1)
    |> Enum.map_join(" ", fn {word, count} ->
      word <> "ma" <> String.duplicate("a", count)
    end)
  end
end
```