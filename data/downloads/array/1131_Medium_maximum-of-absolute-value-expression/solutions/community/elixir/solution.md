# Elixir Chebyshev Distance Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/3028537/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/3028537/)

---

```
defmodule Solution do
  @spec max_abs_val_expr(arr1 :: [integer], arr2 :: [integer]) :: integer
  def max_abs_val_expr(arr1, arr2) do
    Enum.zip(arr1, arr2)
    |> Enum.with_index()
    |> Enum.reduce([], fn {{x, y}, i}, acc ->
      [[x + y + i, x - y + i, x + y - i, x - y - i] | acc]
    end)
    |> Enum.zip()
    |> Enum.max_by(&diff/1)
    |> then(&diff/1)
  end

  def diff(tp) do
    {mi, ma} = tp |> Tuple.to_list() |> Enum.min_max()
    ma - mi
  end
end

```