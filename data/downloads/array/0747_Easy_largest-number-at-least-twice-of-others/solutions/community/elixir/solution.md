# Elixir Solution

**Author:** JJamesWWang
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/1884037/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/1884037/)

---

Find max with index, then check if `nums` matches the requirement.

```elixir
defmodule Solution do
  @spec dominant_index(nums :: [integer]) :: integer
  def dominant_index(nums) do
    {max, index} = nums
    |> Enum.with_index
    |> Enum.reduce({-1, -1}, fn {val, i}, {largest, index} -> {max(val, largest), (if val > largest, do: i, else: index)} end)

    nums
    |> Enum.with_index
    |> Enum.reduce(true, fn {n, i}, acc -> acc and (i == index or max >= 2 * n) end)
    |> (fn res -> if res, do: index, else: -1 end).()
  end
end
```