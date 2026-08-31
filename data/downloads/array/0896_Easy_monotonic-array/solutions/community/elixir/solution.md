# Elixir solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/4103082/](https://leetcode.com/problems/monotonic-array/solutions/4103082/)

---

# Code
```
defmodule Solution do
  @spec is_monotonic(nums :: [integer]) :: boolean
  def is_monotonic(nums) do
    Enum.chunk_every(nums, 2, 1, :discard)
    |> Enum.reject(fn [a, b] -> a == b end)
    |> Enum.split_with(fn [a, b] -> a < b end)
    |> then(fn
      {[], _} -> true
      {_, []} -> true
      _ -> false
    end)
  end
end
```