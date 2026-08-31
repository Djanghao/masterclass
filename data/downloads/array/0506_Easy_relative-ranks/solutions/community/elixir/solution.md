# Elixir: Sort and map

**Author:** de4dbeef
**Votes:** 0
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5131789/](https://leetcode.com/problems/relative-ranks/solutions/5131789/)

---

Code
```
defmodule Solution do
  @spec find_relative_ranks(scores :: [integer]) :: [String.t]
  def find_relative_ranks(scores) do
    ranks =
      scores
      |> Enum.sort(:desc)
      |> Enum.with_index(1)
      |> Map.new()

    scores
    |> Enum.map(&Map.fetch!(ranks, &1))
    |> Enum.map(fn
        1 -> "Gold Medal"
        2 -> "Silver Medal"
        3 -> "Bronze Medal"
        n -> to_string(n)
    end)
  end
end
```