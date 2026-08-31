# Elixir with sorting

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858541/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858541/)

---

# Code
```Elixir []
defmodule Solution do
  @spec array_rank_transform(arr :: [integer]) :: [integer]
  def array_rank_transform(arr) do
    Enum.with_index(arr)
    |> Enum.sort()
    |> Enum.scan({nil, 0, -1_000_000_001}, fn
      {x, i}, {_, rank, x} -> {i, rank, x}
      {x, i}, {_, rank, _} -> {i, rank + 1, x}
    end)
    |> Enum.sort()
    |> Enum.map(fn {_, rank, _} -> rank end)
  end
end
```