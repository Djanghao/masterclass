# Elixir solution

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/4122087/](https://leetcode.com/problems/number-of-good-pairs/solutions/4122087/)

---

# Approach
Arithmetic series formula.
# Code
```
defmodule Solution do
  @spec num_identical_pairs(nums :: [integer]) :: integer
  def num_identical_pairs(nums) do
    Enum.frequencies(nums)
    |> Enum.map(fn {_, c} -> div(c * (c - 1), 2) end)
    |> Enum.sum()
  end
end
```