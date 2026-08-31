# Elixir frequencies twice

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4840136/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4840136/)

---

# Code
```
defmodule Solution do
  @spec max_frequency_elements(nums :: [integer]) :: integer
  def max_frequency_elements(nums) do
    Enum.frequencies(nums)
    |> Map.values()
    |> Enum.frequencies()
    |> Enum.max()
    |> then(fn {k, v} -> k * v end)
  end
end
```