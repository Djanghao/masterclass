# An Elixir Solution

**Author:** lreid295
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4731161/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4731161/)

---

# Intuition
Sort the array then calculate if it was possible for the next value to form a polygon (bad intuition, solved another way).

# Approach
Initially I was trying to solve this with an array sorted by ascending but it works much better sorting the opposite way with `reduce_while`.

# Code
```
defmodule Solution do
  @spec largest_perimeter(nums :: [integer]) :: integer
  def largest_perimeter(nums) do
    sorted_nums = nums |> Enum.sort(:desc)

    list =
      nums
      |> Enum.reduce_while(sorted_nums, fn _x, acc ->
        [start | rest] = acc

        if start < Enum.sum(rest) do
          {:halt, [start] ++ rest}
        else
          {:cont, rest}
        end
      end)

    if length(list) < 3, do: -1, else: Enum.sum(list)
  end
end
```