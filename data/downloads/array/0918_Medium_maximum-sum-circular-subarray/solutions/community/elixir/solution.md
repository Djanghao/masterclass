# Elixir "min-max"ing solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/3068067/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/3068067/)

---

I doubt I'd ever come up with this approach without learning it from others already...
My initial solution was with a monotonic queue...
# Code
```elixir
defmodule Solution do
  @spec max_subarray_sum_circular(nums :: [integer]) :: integer
  def max_subarray_sum_circular(nums) do
    Enum.reduce(nums, {0, 0, 0, 100_000, -100_000},
    fn x, {acc, min_acc, max_acc, min_diff, max_diff} ->
      acc = acc + x
      {acc,
        min(min_acc, acc),
        max(max_acc, acc),
        min(min_diff, acc - max_acc),
        max(max_diff, acc - min_acc)}
    end)
    |> then(fn {acc, _, _, min_diff, max_diff} ->
      if min_diff == acc do
        max_diff
      else
        max(max_diff, acc - min_diff)
      end
    end)
  end
end
```