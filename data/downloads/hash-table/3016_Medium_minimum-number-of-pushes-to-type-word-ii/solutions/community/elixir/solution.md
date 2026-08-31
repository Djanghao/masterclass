# Elixir & Ruby - Greedy Solution

**Author:** Aetherus
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5594139/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/5594139/)

---

# Code
```Elixir []
defmodule Solution do
  @spec minimum_pushes(word :: String.t) :: integer
  def minimum_pushes(word) do
    word
    |> String.to_charlist()
    |> Enum.frequencies()
    |> Map.values()
    |> Enum.sort(:desc)
    |> Enum.chunk_every(8)
    |> Enum.with_index(1)
    |> Enum.map(fn {chunk, i} ->
      Enum.sum(chunk) * i
    end)
    |> Enum.sum()
  end
end
```

```Ruby []
def minimum_pushes(word)
  word.each_char
      .tally
      .values
      .sort_by!(&:-@)
      .each_slice(8)
      .with_index(1)
      .sum{|chunk, i| chunk.sum * i}
end
```