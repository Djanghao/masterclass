# Elixir solution using Enum module

**Author:** foxesknow
**Votes:** 0
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/3764596/](https://leetcode.com/problems/top-k-frequent-elements/solutions/3764596/)

---

# Code
```
defmodule Solution do
  @spec top_k_frequent(nums :: [integer], k :: integer) :: [integer]
  def top_k_frequent(nums, k) do
    nums 
    |> Enum.frequencies() 
    |> Enum.sort(fn {_, x}, {_, y} -> x > y end) 
    |> Enum.take(k)
    |> Enum.map(fn {n, _} -> n end)
  end
end
```