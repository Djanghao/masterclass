# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3978623/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3978623/)

---

Fold from right side.
# Code
```
defmodule Solution do
  @spec minimum_replacement(nums :: [integer]) :: integer
  def minimum_replacement(nums) do
    List.foldr(nums, {0, nil}, fn
      x, {ans, prev} when x > prev ->
        quot = ceil(x / prev)
        {ans + quot - 1, div(x, quot)}
      x, {ans, _} -> {ans, x}
    end)
    |> elem(0)
  end
end
```