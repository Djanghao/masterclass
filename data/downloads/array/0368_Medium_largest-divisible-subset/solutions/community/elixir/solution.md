# Elixir with gb_sets

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/4699873/](https://leetcode.com/problems/largest-divisible-subset/solutions/4699873/)

---

For each `x` in `nums`, add a tuple element `{neg_len, list}` into a gb_sets, where `list` is a largest divisible subset having `x` as the largest element. `neg_len` represents the negative of the length of `list`, to take advantage of gb_sets iterator which traverses the elements from smallest value to largest value.

# Code
```
defmodule Solution do
  @spec largest_divisible_subset(nums :: [integer]) :: [integer]
  def largest_divisible_subset(nums) do
    Enum.sort(nums)
    |> Enum.reduce(:gb_sets.new(), fn x, set ->
      :gb_sets.iterator(set)
      |> find_largest(x)
      |> then(fn {neg_len, list} ->
        :gb_sets.add({neg_len - 1, [x | list]}, set)
      end)
    end)
    |> :gb_sets.smallest()
    |> elem(1)
  end

  defp find_largest(iter, x) do
    case :gb_sets.next(iter) do
      :none -> {0, []}
      {{neg_len, [y | tail]}, _} when rem(x, y) == 0 ->
        {neg_len, [y | tail]}
      {_, iter2} -> find_largest(iter2, x)
    end
  end
end
```