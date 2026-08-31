# Elixir Simple Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/1769506/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/1769506/)

---

```elixir
defmodule Solution do
  @spec sort_even_odd(nums :: [integer]) :: [integer]
  def sort_even_odd(nums) do
    {evens, odds} = nums |> Enum.with_index() |> Enum.split_with(fn {_n, i} -> rem(i, 2) == 0 end)
    evens = evens |> Enum.map(fn {n, _i} -> n end) |> Enum.sort()
    odds = odds |> Enum.map(fn {n, _i} -> n end) |> Enum.sort(&>=/2)
    merge(evens, odds)
  end

  def merge([], lst), do: lst
  def merge(lst, []), do: lst

  def merge([x | xs], [y | ys]) do
    [x, y | merge(xs, ys)]
  end
end
```